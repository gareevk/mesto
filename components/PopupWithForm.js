import Popup from "./Popup.js";
import { cardAddSubmit } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
    }

    _getInputValues() {
        const formInput = this._popup.querySelectorAll('.popup__input').value;
            //name: this._popup.querySelector('#card-name').value,
            //link: this._popup.querySelector('#card-link').value
        this._formSubmit(formInput);
    }

    setEventListeners() {
        super.setEventListeners();
        cardAddSubmit.addEventListener('submit', this._getInputValues);
    }

    close() {
        super.close();
        cardAddSubmit.reset();
    }
}

/*
Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
*/