// document.getElementById('container').innerHTML = parentDiv

// let parentDiv
const container = document.querySelector('.container')
let divNum = 1

for (let i =0; i < 256; i++){
    
const content = document.createElement('div')
content.classList.add(`content${divNum}`, 'content')
container.appendChild(content)
divNum ++
}

document.getElementById('btn').addEventListener('click', changeSize)

function changeSize(){

    

    let gridSize = prompt('Enter Grid Size')

    for (let i = 0; i < gridSize; i++){
    
        const content = document.createElement('div')
        content.classList.add(`content${divNum}`, 'content')
        container.appendChild(content)
        divNum ++
    }
}
    
    
