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
    
    
