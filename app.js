// target elements
const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const buttons = document.querySelector('.buttons');
const black_btn = document.querySelector('.black-btn');
const eraser_btn = document.querySelector('.eraser-btn');
const random_btn = document.querySelector('.random-btn');
const reset_btn = document.querySelector('.reset-btn');
const colorPicker = document.querySelector('.colorPicker');
const colorInput = document.querySelector('.colorInput');
const slider = document.querySelector('.slider');
const dimension = document.querySelector('.dimension');


// Create grid

const createGrid = (size) => {
  //grid.innerHTML = '';
  grid.setAttribute('style', `grid-template: repeat(${size}, 1fr);
                              grid-template-columns: repeat(${size}, 1fr)`);
  for (let i = 0; i < size * size; i++) {
      const div = document.createElement('div');
      div.classList.add('cell');
      div.addEventListener('mouseover', function(event){
          event.target.style.backgroundColor = 'darkOliveGreen';
      })
      grid.appendChild(div);
  }

};

// Helper function to eliminate repetition
const helper = (color) => {
    let cell = grid.children;
    let cellArr = Array.from(cell);
    cellArr.forEach(el => {
        el.addEventListener('mouseover', (e) => e.target.style.backgroundColor = color);
    });
}


// Generate black colored grid-cells
const generateBlackGrid = () => {
    helper('black');
}

// Erase the colored grids
const eraseBackground = () => {
    helper('rgb(181, 196, 148)');
}


// Generate random selection of colors
const generateRandomColor = () => {
    let colorString = '12345678ABCDEF';
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        randomColor += colorString[Math.floor(Math.random() * colorString.length)];
    }
    return randomColor;
}
const setRandomColor = () => {
    let cell = grid.children;
    let cellArr = Array.from(cell);
    cellArr.forEach(el => {
        el.addEventListener('mouseover', (e) => e.target.style.backgroundColor = generateRandomColor());
    });
}

// Reset the grid
const resetGrid = () => {
    grid.textContent = '';
    createGrid(slider.value);
}

// Change the grid size based on user input
const changeSize = () => {
    grid.textContent = '';
    dimension.innerText = `${slider.value}x${slider.value}`;
    createGrid(slider.value);
}

// Select Custom color
const customColor = () => {
    helper(colorInput.value);
}
customColor();

// Event listeners

window.addEventListener('load', createGrid(16));
random_btn.addEventListener('click', setRandomColor);
black_btn.addEventListener('click', generateBlackGrid);
eraser_btn.addEventListener('click', eraseBackground);
reset_btn.addEventListener('click', resetGrid);
slider.addEventListener('change', changeSize);
colorInput.addEventListener('input', customColor);


