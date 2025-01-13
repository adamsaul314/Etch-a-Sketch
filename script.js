// document.getElementById('container').innerHTML = parentDiv

// let parentDiv
const container = document.querySelector('.container')
let divNum = 1

// for (let i =0; i < 256; i++){
    
// const content = document.createElement('div')
// content.classList.add(`content${divNum}`, 'content')
// container.appendChild(content)
// divNum ++
// }

document.getElementById('btn').addEventListener('click', changeSize)

function changeSize() {
    container.innerHTML = '';

    let gridSize = parseInt(prompt('Enter Grid Size (e.g., 16 for 16x16 grid):'));

    if (isNaN(gridSize) || gridSize <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    const containerSize = 900; // Fixed container size
    const squareSize = Math.floor(containerSize / gridSize); // Fit squares within the container

    for (let i = 0; i < gridSize * gridSize; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.style.width = `${squareSize - 2}px`;
        content.style.height = `${squareSize - 2}px`;
        container.appendChild(content);
    }
}
    
    
