document.addEventListener('keydown', logKey);
    function logKey(e) {
      if (`${e.code}` == "ArrowRight") {
        //code here
        alert("Right Arrow was pressed");
      }
          if (`${e.code}` == "ArrowLeft") {
        //code here
        alert("Left Arrow was pressed");
      }
          if (`${e.code}` == "ArrowDown") {
        //code here
        alert("Down Arrow was pressed");

      }
          if (`${e.code}` == "ArrowUp") {
        //code here
        alert("Up Arrow was pressed");

      }
    }

// Create one dimensional array 
var grid = new Array(4); 
  
// Loop to create 2D array using 1D array 
document.write("This is what the grid looks like <br><br>"); 
for (var i = 0; i < grid.length; i++) { 
    grid[i] = []; 
} 
  
// Loop to initilize 2D array elements. 
for (var i = 0; i < 4; i++) { 
    for (var j = 0; j < 4; j++) { 
  
        grid[i][j] = parseInt(Math.random() * 3);  // 0 , 1 , 2 , 3 

        if(grid[i][j] === 1) {
          grid[i][j] = 4
        }
        if(grid[i][j] === 3) {
          grid[i][j] = 8
        }
    } 
} 
  
// Loop to display the elements of 2D array. 
for (var i = 0; i < 4; i++) { 
    for (var j = 0; j < 4; j++) 
  
    { 
        document.write(grid[i][j] + " "); 
    } 
    document.write("<br>"); 
  }

