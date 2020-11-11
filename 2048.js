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
function printGrid (grid4)
{
for (var i = 0; i < 4; i++) { 
  for (var j = 0; j < 4; j++) 

  { 
      document.write(grid4[i][j] + " "); 
  } 
  document.write("<br>"); 
}
}

printGrid(grid);

// Function for DOM manipulation on keyboard action
  document.addEventListener('keydown', logKey);

    function logKey(e) 
    {
      if (e.code == "ArrowRight") 
      {
        const right = [];
        var revArray = [];
      for (i=0; i<grid.length; i++)
      {
        revArray = grid[i].reverse();
        right.push(revArray);
      }
      var newgrid = finalArray(right);

      for (i=0; i<newgrid.length; i++)
      {
        grid[i] = newgrid[i].reverse();
        console.log(grid[i]);
      }
         printGrid(grid);
      }


      if (e.code == "ArrowLeft") 
      {
        var newgrid = finalArray(grid);
        printGrid(newgrid);

        /*alert("Left Arrow was pressed");
        var i, j = 0;
        for (i = 0; i<4; i++) 
        {
          for (j=0; j<3; j++) 
          {
           if ((grid[i][j]) === 0)
            {
              grid[i][j] = grid[i][j+1];
              grid[i][j+1] = 0;
            }
          }
        }*/



      }
      

      if (e.code == "ArrowDown") {
        //code here
        alert("Down Arrow was pressed");
      }
      
      
      if (e.code == "ArrowUp") {
        //code here
        alert("Up Arrow was pressed");
      }


    // Loop to display the new elements of 2D array. 
    // for (var i = 0; i < 4; i++) { 
    //   for (var j = 0; j < 4; j++) 

    //   { 
    //       document.write(grid[i][j] + " "); 
    //   } 
    //   document.write("<br>"); 

    // }
  }


  // Create function to shift numbers to the left in 1D

  function newArray(grid2)
  {
    var a = 0; 
    var newArr =[];
  
    for (i = 0; i < grid2.length; i++)
    {
      if (grid2[i] !== 0) 
      {
       newArr.push(grid2[i]); 
      }
    else {a++}
    }

    for (i=0; i<a; i++) 
    {
      newArr.push(0);
    }
    return newArr;
  }


 //Function to call the final array
 function finalArray (grid1)
 {
   const ret = [];

   for (var i = 0; i < grid1.length; i++)
   {
    const val = newArray(grid1[i]);
    ret.push(val);
   }

   return ret;
  }



