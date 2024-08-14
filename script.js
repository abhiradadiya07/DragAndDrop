const draggables = document.querySelectorAll('[draggable="true"]');
const container = document.getElementById("parent");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", dragStart);
  draggable.addEventListener("dragover", dragOver);
  draggable.addEventListener("drop", drop);
  draggable.addEventListener("dragenter", dragEnter);
  draggable.addEventListener("dragleave", dragLeave);
});

let draggedElement = null;

function dragStart(e) {
  draggedElement = this;
  setTimeout(() => this.classList.add("dragging"), 0);
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  if (this !== draggedElement) {
    swapImages(draggedElement, this);
  }
  this.classList.remove("over");
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

function swapImages(elem1, elem2) {
  const tempBackground = elem1.style.backgroundImage;
  elem1.style.backgroundImage = elem2.style.backgroundImage;
  elem2.style.backgroundImage = tempBackground;

  const tempContent = elem1.textContent;
  elem1.textContent = elem2.textContent;
  elem2.textContent = tempContent;
}

window.addEventListener("load", () => {
  draggables.forEach((div) => {
    const computedStyle = window.getComputedStyle(div);
    div.style.backgroundImage = computedStyle.backgroundImage;
  });
});
