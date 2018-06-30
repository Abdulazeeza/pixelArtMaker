//creates the neccessary things to implemnt the table 
function makeGrid(colHeight,rowWidht,cellSize) {  
       
      $('#designSurrounding').append('<table id=\'pixelCanvas\' border=\'dashed\'></table>');  //this create the table
      $('table').css('background','white');  //sets the backgrouund color of the table
      $('#colorPicker1').val('#ffffff');  //sets the default color of the colorPicker1 to white

       const table = $('#pixelCanvas');
       let col = 0;
       while(col < colHeight){    //this loop around to implement the columns
        
            table.append('<tr></tr>');   //this  add the row to the table
   
        for(let row = 0; row < rowWidht;row++){  // this loop around to implement the rows
           const icol = table.children().last();
           //adds the cells to the table and their events
            icol.append('<td draggable=\'true\' ondragover = \'this.style.background = $("#colorPicker").val()\' onclick= \'this.style.background = $("#colorPicker").val()\' ');
        }
          col++; //helps to add more columns to the table
      }

      $('td').css('height',cellSize + 'px'); //create the cell height
      $('td').css('width',cellSize + 'px'); //create the cell width
    }

function helpSubmit(){
    
    return function(){
        $('#pixelCanvas').remove();   //removes  the table ,so that another one can be created
        const valHeigth = $('#inputHeight').val();    //gets the height of table 
        const valWidth = $('#inputWeight').val();   //gets the width of table
        const cell = $('#inputSize').val();         //gets the size of each cells
        makeGrid(valHeigth, valWidth, cell); //pass the height, width and size of cell as an argument to makeGrid function
     }
  }

function workSpace(){   // changes the backgrond color for the table whenever the workspace color is changed
    return function(){
      $('table').css('background',$('#colorPicker1').val()); 
    }
  }
     
$(document).ready(function(){
  makeGrid(10,10,15); //calls the makeGrid and gives it a default value
  $('#iSubmit').on('click', helpSubmit()); //reads the click event for the submit button
  $('#colorPicker1').on('change',workSpace()); // reads for change of color on workspace and call workSpace()
})
