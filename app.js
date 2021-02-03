// target elements
const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const buttons = document.querySelector('.buttons');
const black_btn = document.querySelector('.black-btn');
const grayscale_btn = document.querySelector('.grayscale-btn');
const random_btn = document.querySelector('.random-btn');
const reset_btn = document.querySelector('reset-btn');
const colorPicker = document.querySelector('.colorPicker');
const colorInput = document.querySelector('.colorInput');
const slider = document.querySelector('.slider');


// Create grid

const createGrid = (size) => {
  //grid.innerHTML = '';
  grid.setAttribute('style', `grid-template: repeat(${size}, 1fr);
                              grid-template-columns: repeat(${size}, 1fr)`);
  for (let i = 0; i < size * size; i++) {
      const div = document.createElement('div');
      div.classList.add('cell');
      div.addEventListener('mouseover', function(event){
          event.target.style.backgroundColor = 'black';
      })
      grid.appendChild(div);
  }

};

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
    console.log(cell)

    cellArr.forEach(el => {
        el.addEventListener('mouseover', (e) => e.target.style.backgroundColor = generateRandomColor());
    });
}


window.addEventListener('load', createGrid(10));
random_btn.addEventListener('click', setRandomColor);


