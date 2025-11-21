/* Wallpapers */
const LIGHT = [
  "Light/light1.jpg", "Light/light2.jpg", "Light/light3.jpg",
  "Light/light4.jpg", "Light/light5.jpg"
];

const DARK = [
  "Dark/dark1.jpg", "Dark/dark2.jpg", "Dark/dark3.jpg",
  "Dark/dark4.jpg", "Dark/dark5.jpg"
];

let isDark = true;
let index = 0;

/* Preload first images */
new Image().src = LIGHT[0];
new Image().src = DARK[0];

/* Apply background to fixed layer */
function applyBG() {
  const set = isDark ? DARK : LIGHT;
  const url = `url("${set[index]}")`;

  document.body.style.setProperty("--wallpaper", url);
}
applyBG();

/* Shift + C → change theme + wallpaper */
document.addEventListener("keydown", e => {
  if (e.shiftKey && e.key.toLowerCase() === "c") {
    isDark = !isDark;
    index = (index + 1) % 5;

    document.body.classList.toggle("light", !isDark);
    document.body.classList.toggle("dark", isDark);

    applyBG();
  }
});

/* Tile Click */
document.querySelectorAll(".tile").forEach(t => {
  t.onclick = () => window.location.href = t.dataset.link;
});
