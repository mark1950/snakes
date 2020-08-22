let board = document.querySelector('#board');
let boardGrid = document.querySelector('#boardGrid');

let gridSize = 16;

function makeGrid() {

  boardGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  boardGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {

    let colorChange = document.createElement('div');
    colorChange.classList = '.colorChange';

    colorChange.addEventListener('mouseover', mouseOver);
    function mouseOver() {
    colorChange.style.backgroundColor = 'red';
    }

    boardGrid.appendChild(colorChange);

  }

};

function clearGrid() {
  while (boardGrid.hasChildNodes()) {
    boardGrid.removeChild(boardGrid.firstChild);
  }
  makeGrid(gridSize);
}

const resetBtn = document.querySelector('.resetBtn');
  resetBtn.addEventListener('click', () => {
    clearGrid();
  });


const sizeBtn = document.querySelector('.sizeBtn');
  sizeBtn.addEventListener('click', () => {
    let size = Number (prompt('re-sze grid?'));
    gridSize = size;
  clearGrid();
});

makeGrid();