const mainDiv = document.querySelector("#mainDiv");
const btnForPrompt = document.querySelector("#btnForPrompt");
btnForPrompt.addEventListener("click", askForNewGrid);

btnForPrompt.setAttribute("class", "btn");

function createNewDivs(gridSize) {
  const divsCount = gridSize * gridSize;

  mainDiv.style = `width:${divsCount}px; height: ${divsCount}px;`;

  const divs = Array.from(
    { length: divsCount },
    () =>
      `<div data-role="inner-div" style="width: ${gridSize}px; height: ${gridSize}px;"></div>`
  ).join("");

  mainDiv.innerHTML = divs;
}

function attachListeners() {
  mainDiv.addEventListener("mouseover", (e) => {
    if (e.target.dataset.role !== "inner-div") return;

    e.target.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  });
}

createNewDivs(16);
attachListeners();

//read about even delegation + e.target;

function askForNewGrid() {
  let gridSize = prompt(
    "Write number of squares. It can be up to 99",
    0
  );
  if (
    gridSize > 1 &&
    gridSize < 100 &&
    gridSize != null &&
    gridSize != undefined
  ) {
    const amountOfDivs = gridSize * gridSize;
    console.log(gridSize);
    Array.from(mainDiv.children).forEach((childNode) => {
      childNode.style = `width:${gridSize}px; height: ${gridSize}px;`;
    });
    mainDiv.style = `width:${amountOfDivs}px; height: ${amountOfDivs}px;`;
    createNewDivs(gridSize);
  } else if (gridSize < 1 || gridSize >= 100) {
    alert("Write number of squares < 100");
   
  }
}

//first iteration:
// function createNewDivs() {
//   for (let i = 0; i < amountOfDivs; i++) {
//     const newDiv = document.createElement("div");
//     mainDiv.appendChild(newDiv);
//     mainDiv.style = `width:${amountOfDivs}px; height: ${amountOfDivs}px;`;
//     newDiv.style = "width:16px; height: 16px";

//     newDiv.addEventListener("mouseover", function () {
//       randomColor = Math.floor(Math.random() * 16777215).toString(16);
//       newDiv.style = `width:16px; height: 16px ; background-color: #${randomColor};`;
//       console.log(randomColor);
//     });
//   }
// }

// createNewDivs();
