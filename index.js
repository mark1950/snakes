let board = document.querySelector('#board');
let boardGrid = document.querySelector('#boardGrid');
let sizeBtn = document.querySelector('.sizeBtn');
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

  const resetBtn =document.querySelector('.resetBtn');
    resetBtn.addEventListener('click', () => {
        colorChange.style.background = 'cornsilk';
    });

  }

};


makeGrid();
