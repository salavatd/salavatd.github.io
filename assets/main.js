function toWhite() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("white-theme");
  document.querySelector(".button-toggle-mode.to-white").classList.add("hidden");
  document.querySelector(".button-toggle-mode.to-dark").classList.remove("hidden");
  localStorage.setItem('theme', 'white');
}

function toDark() {
  document.body.classList.remove("white-theme");
  document.body.classList.add("dark-theme");
  document.querySelector(".button-toggle-mode.to-dark").classList.add("hidden");
  document.querySelector(".button-toggle-mode.to-white").classList.remove("hidden");
  localStorage.setItem('theme', 'dark');
}

document.querySelector(".button-toggle-mode.to-white").addEventListener("click", toWhite);

document.querySelector(".button-toggle-mode.to-dark").addEventListener("click", toDark);

const theme = localStorage.getItem('theme');
if (theme === 'white') {
  toWhite();
} else if (theme === 'dark') {
  toDark();
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  toDark();
}
