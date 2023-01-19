const setNav = document.getElementById("nav-overlay");
const shapes = document.getElementsByClassName("shape");
const sections = document.getElementsByClassName("section");
const button = document.querySelector(".theme-toggle");


function getCurrentTheme() {
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  localStorage.getItem("site.theme")
    ? (theme = localStorage.getItem("site.theme"))
    : null;
  return theme;
}

function loadTheme(theme) {
  const root = document.querySelector(":root");
  if (theme === "light") {
    sections[0].setAttribute("data-bg", "var(--seagreen)");
    sections[1].setAttribute("data-bg", "#f15f61");
    sections[2].setAttribute("data-bg", "#DDBCF7");
    sections[3].setAttribute("data-bg", "#fca971");
    shapes[0].style.backgroundColor = "var(--offWhite)";
    shapes[1].style.backgroundColor = "var(--pastelGreen)";
    shapes[2].style.backgroundColor = "var(--redClay)";
    shapes[3].style.backgroundColor = "var(--salmon)";
    shapes[4].style.backgroundColor = "var(--tan)";
    shapes[5].style.backgroundColor = "var(--airForceBlue)";
    shapes[6].style.backgroundColor = "var(--navy)";
    setNav.style.backgroundColor = "#23b296";
    button.className = "theme-toggle";
    onScroll();
  } else {
    sections[0].setAttribute("data-bg", "#0D0E2F");
    sections[1].setAttribute("data-bg", "#0D0E2F");
    sections[2].setAttribute("data-bg", "#0D0E2F");
    sections[3].setAttribute("data-bg", "#0D0E2F");
    shapes[0].style.backgroundColor = "#1e1c49";
    shapes[1].style.backgroundColor = "#535181";
    shapes[2].style.backgroundColor = "#3731AE";
    shapes[3].style.backgroundColor = "#25257C";
    shapes[4].style.backgroundColor = "#715E97";
    shapes[5].style.backgroundColor = "#535181";
    shapes[6].style.backgroundColor = "#252560";
    setNav.style.backgroundColor = "#0D0E2F";
    button.className = "theme-toggle theme-toggle--toggled";
    onScroll();
  }
  root.setAttribute("color-scheme", `${theme}`);
}

toggleHandler = () => {
  let theme = getCurrentTheme();
  if (theme === "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }
  localStorage.setItem("site.theme", `${theme}`);
  loadTheme(theme);
  console.log(theme);
};

button.addEventListener("click", toggleHandler);

window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme());
});
