function clearSelection(event) {
    const room = event.target.closest('.card-room--selected');
    const button = room.querySelector('.button__card-room');
    document.addEventListener("mouseleave", function(event) {
        removeClass(room, button, 'card-room--selected');
    });
}

function removeClass(element, button, className) {
    button.innerHTML = "Забронировать";
    button.classList.remove("button--selected");
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
    button.classList.add("button--selected");
    element.classList.add(className);
}

function selectRoom(event) {
    const room = event.target.closest('.card-room');
    const button = event.target.closest('.button__card-room');
    document.addEventListener("mouseleave", function(event) {
        addClass(room, button, 'card-room--selected');
    });
}
