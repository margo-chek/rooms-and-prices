function clearSelection(event) {
    const room = event.target.closest('.card-room--selected');
    const button = room.querySelector('.button__card-room');
    removeClass(room, button, 'card-room--selected');
}

function removeClass(element, button, className) {
    button.innerHTML = "Забронировать";
    element.classList.remove(className);
}

document.addEventListener("click", function(event) {
    if (event.target.closest(".card-room--selected")) {
        clearSelection(event);
    } else if(event.target.className.includes("button__card-room")){
        selectRoom(event);
    }
});

function addClass(element, button, className) {
    button.innerHTML = "Подробнее";
    element.classList.add(className);
}


function selectRoom(event) {
    const room = event.target.closest('.card-room');
    const button = event.target.closest('.button__card-room');
    addClass(room, button, 'card-room--selected');
}

