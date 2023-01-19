window.sections = [...document.querySelectorAll(".section")];

document.body.style.background = window.sections[0].getAttribute("data-bg");

window.addEventListener("scroll", onScroll);

function onScroll() {
  const section = window.sections
    .map((section) => {
      const el = section;
      const rect = el.getBoundingClientRect();
      return { el, rect };
    })
    .find((section) => section.rect.bottom >= window.innerHeight / 4);
  document.body.style.background = section.el.getAttribute("data-bg");
}


