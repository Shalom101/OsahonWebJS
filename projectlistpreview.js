//projectlist
const container = document.querySelector(".o-project-list");
const project = container.querySelectorAll(".o-project-item");

// get the number of objects in an array.
let listInterval = 100 / project.length;
// console.log(project);
document.getElementById("project-count").textContent = project.length;

// hover action
function hoverAction(item, index) {
  // console.log("item => ", item, index);
  let hoverPosition = index * listInterval;
  //console.log("hoverPosition => ", hoverPosition);

  item.addEventListener("mouseover", () => {
    document.getElementById("projectimagelist").style.transform =
      // "translate(0,${hoverPosition}%)";
      `translate(0,-${hoverPosition}%)`;
  });
}

// hover on element project
project.forEach(hoverAction);

//exploration list
const expContainer = document.querySelector(".o-exploration-list");
const expProject = expContainer.querySelectorAll(".o-exploration-item");

// get the number of objects in an array.
let expListInterval = 100 / expProject.length;
document.getElementById("exploration-count").textContent = expProject.length;

// hover action
function expHoverAction(item, index) {
  // console.log("item => ", item, index);
  let expHoverPosition = index * expListInterval;
  //console.log("hoverPosition => ", hoverPosition);

  item.addEventListener("mouseover", () => {
    document.getElementById("explorationimagelist").style.transform =
      // "translate(0,${hoverPosition}%)";
      `translate(0,-${expHoverPosition}%)`;
  });
}

// hover on element project
expProject.forEach(expHoverAction);

/*
const container = document.querySelector(".o-project-list");
const project = container.querySelectorAll(".o-project-item");

// get the number of objects in an array.
let listInterval = 100 / project.length;
console.log(project);

// hover action
function hoverAction(item) {
  let hoverPosition = item * listInterval;
  document.getElementById("projectimagelist").style.transform =
    // "translate(0,${hoverPosition}%)";
    "translate(0," + hoverPosition + "%)";
}

// hover on element project
project.forEach.onmouseover(hoverAction);

//projectitem.onmouseover(hoverAction);

*/

/*
document.querySelector(
  ".o-project-list>:nth-child(1)"
).onmouseover = function () {
  document.getElementById("projectimagelist").style.transform =
    "translate(0,0%)";
};

document.querySelector(
  ".o-project-list>:nth-child(2)"
).onmouseover = function () {
  document.getElementById("projectimagelist").style.transform =
    "translate(0,-20%)";
};

document.querySelector(
  ".o-project-list>:nth-child(3)"
).onmouseover = function () {
  document.getElementById("projectimagelist").style.transform =
    "translate(0,-40%)";
};

document.querySelector(
  ".o-project-list>:nth-child(4)"
).onmouseover = function () {
  document.getElementById("projectimagelist").style.transform =
    "translate(0,-60%)";
};

document.querySelector(
  ".o-project-list>:nth-child(5)"
).onmouseover = function () {
  document.getElementById("projectimagelist").style.transform =
    "translate(0,-80%)";
};

*/
