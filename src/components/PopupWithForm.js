import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector);
        this._formSubmit = formSubmit;
        this._cardAddSubmit = document.querySelector('#add-card-container');
        this._profileSubmit = document.querySelector('.popup__container');
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach( (input) => {
            this._formValues[input.name] = input.value;
            console.log(this._formValues);  
        });
        this._formSubmit(this._formValues);
    }

    setEventListeners() {
        super.setEventListeners();
        this._cardAddSubmit.addEventListener('submit', () => {
            this._getInputValues(); 
        } , {once: true });
        this._profileSubmit.addEventListener('submit', () => {
            this._getInputValues();
        } , { once: true } );

    }

    close() {
        super.close();
        this._cardAddSubmit.reset();
        this._profileSubmit.reset();
    }
}