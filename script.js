var themeSwitcher = document.querySelector(".checkbox");

var currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    themeSwitcher.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

themeSwitcher.addEventListener("change", switchTheme, false);

const burger = document.querySelector(".burger");
const nav = document.querySelector(".links");
const links = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
  nav.classList.toggle("active-nav");
  burger.classList.toggle("fa-times");
});

for (let i of links) {
  i.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      nav.classList.toggle("active-nav");
      burger.classList.toggle("fa-times");
    }
  });
}
