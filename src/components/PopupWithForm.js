import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._form = this._popup.querySelector('.popup__container');
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach( (input) => {
            this._formValues[input.name] = input.value;
        });
        this._formSubmit(this._formValues);
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', () => {
            this._getInputValues(); 
        } );
    }

    close() {
        super.close();
        this._form.reset();
    }
    
}