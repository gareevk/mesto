export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupCloseButton = this._popup.querySelector('.popup__close-button');
    };

    open() {
        this._popup.classList.add('popup_opened');
        this.setEventListeners();
    }

    close() {
        this._popup.classList.remove('popup_opened');
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close(evt);
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
        } );
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        }   );
    }
}

/*
Создайте класс Popup
Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
Принимает в конструктор единственный параметр — селектор попапа.
Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы.
*/