const container = document.getElementById("container");
const clear_btn = document.getElementById("clear")
clear_btn.addEventListener('click', clear_pg);
var grid_num = 16;
var color = 'black';
var colorPick = document.getElementById("color-picker");
var outColor = document.getElementById("demo-color");
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
outColor.innerHTML = colorPick.value;
colorPick.oninput = function(){
  color = this.value;
  outColor.innerHTML = colorPick.value;
}
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  grid_num = this.value;
  clear_pg();

}
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    
    container.appendChild(cell).className = "grid-item";
    cell.style.width = 550/grid_num + 'px';
    cell.style.height = 550/grid_num + 'px';
    
    cell.addEventListener('pointerover',paint);
    
  };
};
makeRows(grid_num,grid_num);


function paint(e){
  e.target.style.backgroundColor = color;
}

function clear_pg(){
  let items = document.querySelectorAll(".grid-item");
  for(let i = 0; i < items.length; i++){
    items[i].remove();
  };
  makeRows(grid_num,grid_num);
}

