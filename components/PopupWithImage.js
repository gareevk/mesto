import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        //this._image = document.querySelector('.elements__item-image').src;
        //this._name = document.querySelector('.elements__item-name').textContent;
    }
    
    open(card) {
        document.querySelector('.popup__card-fullscreen').src = card.link;
        document.querySelector('.popup__description').textContent = card.name;
        document.querySelector('.popup__description').alt = card.name;
        super.open();
    }
}

/*
Создайте класс PopupWithImage
Создайте класс PopupWithImage, который наследует от Popup. Этот класс должен перезаписывать родительский метод open. В методе open класса PopupWithImage нужно вставлять в попап картинку с src изображения и подписью к картинке.
*/