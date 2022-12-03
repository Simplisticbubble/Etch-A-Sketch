const container = document.getElementById("container");
const clear_btn = document.getElementById("clear")
clear_btn.addEventListener('click', clear_pg);


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    
    container.appendChild(cell).className = "grid-item";
    cell.style.width = 550/16 + 'px';
    cell.style.height = 550/16 + 'px';
    cell.addEventListener('mouseover',paint);
  };
};

makeRows(16, 16);

function paint(e){
  e.target.style.backgroundColor = 'black';
}

function clear_pg(){
  let items = document.querySelectorAll(".grid-item");
  for(let i = 0; i < items.length; i++){
    items[i].style.backgroundColor='beige';
  };
}

