function OnDragListener(element) {
    
    let dragBeginX = 0;
    let dragBeginY = 0;
    let dragEndX = 0;
    let dragEndY = 0;

    element.onmousedown = function (event) {
        dragBeginX = event.clientX;
        dragBeginY = event.clientY;
    }

    element.onmouseup = function (event) {
        dragEndX = event.clientX;
        dragEndY = event.clientY;

        let dragDistanceX = dragEndX - dragBeginX;
        let dragDistanceY = dragEndY - dragBeginY;

        alert('x=' + dragDistanceX + ';y=' + dragDistanceY);
    }

    return this;
}