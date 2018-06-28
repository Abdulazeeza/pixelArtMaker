//creates the neccessary things to implemnt the table 
function makeGrid(colHeight,rowWidht,cellSize) {  
       
      $('#designSurrounding').append('<table id=\'pixelCanvas\' border=\'dashed\'></table>');  //this create the table
	 $('table').css('background','white');  //sets the backgrouund color of the table
      $('#colorPicker1').val('#ffffff');  //sets the default color of the colorPicker1 to white

	var table = $('#pixelCanvas');
       var col = 0;
      while(col < colHeight){ //this loop around to implement the columns
      	
            table.append('<tr></tr>');   //this  add the row to the table
   
      	for(var row = 0; row < rowWidht; row++){  // this loop around to implement the rows
           
           var icol = table.children().last();
           //adds the cells to the table and their events
            icol.append('<td draggable=\'true\' ondragover = \'this.style.background = $("#colorPicker").val()\' onclick= \'this.style.background = $("#colorPicker").val()\' ');
           
        }
         col++; //helps to add more columns to the table
      }

      $('td').css('height',cellSize + 'px'); //create the cell height
      $('td').css('width',cellSize + 'px'); //create the cell width
    }

$(document).ready(function(){
	 makeGrid(10,10,15); //calls the makeGrid and gives it a default value

$('#iSubmit').on('click', function( ){ //reads the click event for the submit button
	
	$('#pixelCanvas').remove();   //removes  the table ,so that another one can be created

 	var valHeigth = $('#inputHeight').val();    //gets the height of table 
    var valWidth = $('#inputWeight').val();   //gets the width of table
    var cell = $('#inputSize').val();         //gets the size of each cells
    makeGrid(valHeigth, valWidth,cell); //pass the height, width and size of cell as an argument to makeGrid function
     
 })

$('#colorPicker1').on('change',function(){
      $('table').css('background',$('#colorPicker1').val()); // changes the backgrond color for the table whenever the workspace color is changed
})

})
