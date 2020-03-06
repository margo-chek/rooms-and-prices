'use strict';

document.addEventListener('click', function(event) {
    if (event.target.parentNode.parentNode.parentNode !== null &&
        event.target.parentNode.parentNode.parentNode !== undefined) {
        if (event.target.parentNode && event.target.parentNode.className.indexOf('card-room--selected')!== -1) {
            clearSelection(event.target.parentNode);
        } else if (event.target.parentNode.parentNode &&
            event.target.parentNode.parentNode.className.indexOf('card-room--selected')!== -1) {
            clearSelection(event.target.parentNode.parentNode);
        } else if (event.target.parentNode.parentNode.parentNode &&
            event.target.parentNode.parentNode.parentNode.className.indexOf('card-room--selected')!== -1) {
            clearSelection(event.target.parentNode.parentNode.parentNode);
        } else if (event.target.className.indexOf('button__card-room') !== -1) {
            selectRoom(event);
        }
    }
});

function clearSelection(eventRoom) {
    const button = eventRoom.querySelector('.button__card-room');
    const img = eventRoom.querySelector('.card-room__img');
    document.addEventListener('mouseout', function() {
        removeClass(eventRoom, button, img, 'card-room--selected');
    });
}

function selectRoom(event) {
    const room = event.target.parentNode.parentNode;
    const button = room.querySelector('.button__card-room');
    const img = room.querySelector('.card-room__img');
    document.addEventListener('mouseout', function() {
        addClass(room, button, img, 'card-room--selected');
    });
}

function removeClass(element, button, img, className) {
    button.classList.remove('button--selected');
    element.classList.remove(className);
    img.classList.remove('card-room__img--gray');
}

function addClass(element, button, img, className) {
    button.classList.add('button--selected');
    element.classList.add(className);
    img.classList.add('card-room__img--gray');
}
