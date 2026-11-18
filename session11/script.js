// Make an element draggable
function dragElement(book) {

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    book.onpointerdown = pointerDrag;

    function pointerDrag(e) {

        e.preventDefault();

        // Bring the selected book to the front
        book.style.zIndex = 10;

        // Remember the starting position
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {

        // Calculate how far the book has moved
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;

        pos3 = e.clientX;
        pos4 = e.clientY;

        // Move the book
        book.style.top = (book.offsetTop - pos2) + "px";
        book.style.left = (book.offsetLeft - pos1) + "px";
    }

    function stopElementDrag() {

        // Stop dragging
        document.onpointerup = null;
        document.onpointermove = null;
    }
}


// Make all 14 books draggable

dragElement(document.getElementById("book1"));
dragElement(document.getElementById("book2"));
dragElement(document.getElementById("book3"));
dragElement(document.getElementById("book4"));
dragElement(document.getElementById("book5"));
dragElement(document.getElementById("book6"));
dragElement(document.getElementById("book7"));
dragElement(document.getElementById("book8"));
dragElement(document.getElementById("book9"));
dragElement(document.getElementById("book10"));
dragElement(document.getElementById("book11"));
dragElement(document.getElementById("book12"));
dragElement(document.getElementById("book13"));
dragElement(document.getElementById("book14"));