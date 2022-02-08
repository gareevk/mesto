import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    
    open(card) {
        document.querySelector('.popup__card-fullscreen').src = card.link;
        document.querySelector('.popup__description').textContent = card.name;
        document.querySelector('.popup__description').alt = card.name;
        super.open();
    }
}