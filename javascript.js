const container = document.querySelector('.container');
const btn = document.querySelector('button');
let gridSize = 4;

createGrid(gridSize);

btn.addEventListener('click', changeGridSize);

function changeGridSize() {
    let newGridSize = prompt("Enter the length of a side");
    while (newGridSize > 100) {
        newGridSize = prompt("Enter the length of a side (Cannot exceed 100)"); 
    }
    clearGrid();
    createGrid(newGridSize);
}

function clearGrid() {
    container.innerHTML = '';
}

// create 16 x 16 grid
function createGrid(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    for (let i = 0; i < gridSize*gridSize; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', changeColor);
        container.appendChild(div);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}