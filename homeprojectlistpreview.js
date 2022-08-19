//projectlist
const container = document.querySelector(".o-project-list");
const project = container.querySelectorAll(".o-project-item");

// get the number of objects in an array.
let listInterval = 100 / project.length;

// hover action
function hoverAction(item, index) {
  let hoverPosition = index * listInterval;

  item.addEventListener("mouseover", () => {
    document.getElementById(
      "projectimagelist"
    ).style.transform = `translate(0,-${hoverPosition}%)`;
  });
}

// hover on element project
project.forEach(hoverAction);

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: "smooth-wrapper",
  content: "smooth-content",
  smooth: 1.5
});
