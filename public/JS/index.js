// Executes the move function once for each 
// progress bar when the user first loads the 
// website
window.onload = function() {
    move("htmlBar", 100, 4);
    move("javascriptBar", 50, 8);
    move("cplusplusBar", 80, 5);
    move("javaBar", 80, 5);
    move("photoshopBar", 100, 4);
    move("nodeBar", 50, 8);
}

// Moves the Progress Bars for Skills
function move(elemId, percent, interval) {
    var elem = document.getElementById(elemId);
    var width = 1;
    var id = setInterval(frame, interval);

    function frame() {
        if (width >= percent) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}