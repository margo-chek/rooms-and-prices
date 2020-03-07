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
    const buttonFree = eventRoom.querySelector('.button--free');
    const buttonDisabled = eventRoom.querySelector('.button--disabled');
    const img = eventRoom.querySelector('.card-room__img');
    document.addEventListener('mouseout', function() {
        removeClass(eventRoom, buttonFree, buttonDisabled, img, 'card-room--selected');
    });
}

function selectRoom(event) {
    const room = event.target.parentNode.parentNode;
    const buttonFree = room.querySelector('.button--free');
    const buttonDisabled = room.querySelector('.button--disabled');
    const img = room.querySelector('.card-room__img');
    document.addEventListener('mouseout', function() {
        addClass(room, buttonFree, buttonDisabled, img, 'card-room--selected');
    });
}

function removeClass(element, buttonFree, buttonDisabled, img, className) {
    buttonFree.classList.remove('button--selected');
    buttonDisabled.classList.remove('button--selected');
    element.classList.remove(className);
    img.classList.remove('card-room__img--gray');
}

function addClass(element, buttonFree, buttonDisabled, img, className) {
    buttonFree.classList.add('button--selected');
    buttonDisabled.classList.add('button--selected');
    element.classList.add(className);
    img.classList.add('card-room__img--gray');
}
