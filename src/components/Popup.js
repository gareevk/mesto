export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector('.popup__close-button');
    };

    open() {
        this._popup.classList.add('popup_opened');
        this._handleEscClose(true);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        this._handleEscClose(false);
    }

    _handleEscClose(condition) {
        if (condition) {
            document.addEventListener('keydown', (evt) => {
                if (evt.key === 'Escape') {
                    this.close(evt);
                } 
            });

        } else {
            document.removeEventListener('keydown', (evt) => {
                if (evt.key === 'Escape') {
                    this.close(evt);
                } 
            });
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