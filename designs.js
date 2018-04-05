// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    var height, width, grid, gridrow;
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    grid = $('#pixelCanvas');
    gridrow = $('#pixelCanvas tr');

    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++)
            grid.append('tr');
    }
        gridrow.append('td');
}

grid.makeGrid(){
};
