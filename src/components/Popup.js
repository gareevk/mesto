import { thistle } from "color-name";

export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector('.popup__close-button');
    };

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        } 
    }

    _handleFocusLost(evt) {
        if (evt.target.classList.contains('popup')) {
            this.close(evt);
        }
    }

    setEventListeners() {
        this._popupCloseButton.addEventListener( 'click', (evt) => {
            this.close(evt); 
        });
        this._popup.addEventListener('click', (evt) => {
            this._handleFocusLost(evt);
        });
    }
}