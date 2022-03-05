const loading = document.querySelector("#loading");
const bg = document.querySelector(".bg");

let progress = 0;
let int = setInterval(blurring, 30);
function blurring() {
  progress++;
  if (progress > 99) {
    clearInterval(int);
  }
  loading.textContent = `${progress}%`;
  loading.style.opacity = scale(progress, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(progress, 0, 100, 30, 0)}px)`;
}
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
