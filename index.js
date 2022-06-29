let color = "black";

function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
      let square = document.createElement("div");
      square.addEventListener("mouseover", draw);
      square.style.backgroundColor = 'grey';    
    board.insertAdjacentElement("beforeend", square);
    }
  }
  


function makeBoard(input) {
   if (input >=1 && input <=100) {
    populateBoard(input);
    }else if(input <1 || input >100) {
        alert("Please choose a number between 1-100");
    }
}

function draw(){
    if (color === 'random'){
        color = '#'+Math.floor(Math.random()*16777215).toString(16);
    } else {

    this.style.backgroundColor = color
}
}

function changeColor(choice){
    color = choice;
}


