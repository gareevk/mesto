import Popup from "./Popup.js";
import { cardAddSubmit , profileSubmit } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
    }

    _getInputValues() {
        const form = Array.from(this._popup.querySelectorAll('.popup__input'));
        const formInput = [form[0].value, form[1].value];
        this._formSubmit(formInput);
    }

    setEventListeners() {
        super.setEventListeners();
        cardAddSubmit.addEventListener('submit', () => {
            this._getInputValues(); 
        } , {once: true });
        profileSubmit.addEventListener('submit', () => {
            this._getInputValues();
        } , { once: true } );

    }

    close() {
        super.close();
        cardAddSubmit.reset();
        profileSubmit.reset();
        this._formSubmit = '';
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