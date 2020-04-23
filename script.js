const container = document.querySelector('#container');
const newGridBtn = document.querySelector('#NewGrid');
const clearBtn = document.querySelector('#clear');
const colorBtn = document.querySelector('#color');
let size = 16;

newGridBtn.addEventListener('click', newGrid);
clearBtn.addEventListener('click', clean);

grid(size);

// create the grid.
function grid(size){
    container.style.setProperty('--grid-colums', size);
    container.style.setProperty('--grid-rows', size);

    for (i=0;i<=size*size;i++){
        let piece = document.createElement('div');
        piece.setAttribute('id', 'cell');
        piece.style.backgroundColor = 'white';
        piece.addEventListener('mouseover', () =>{
            let color = colorBtn.value;
            piece.style.backgroundColor = color; 
        })
        container.appendChild(piece);
    }
}

// take the value of the prompt and make the new grid.
function newGrid(){
    size = window.prompt('New Grid size:', '');
    console.log
    if (size == undefined) {
        alert('No, put a number!');
        newGrid();
    }
    grid(size);
    clean();
};

// removes divs with 'cell' id.
function clean(){
    let cells = document.querySelectorAll('#cell');
    cells.forEach(el => el.remove());
    grid(size);
};





    