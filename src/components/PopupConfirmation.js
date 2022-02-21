import Popup from "./Popup.js";

export default class PopupConfirmation extends Popup {
    constructor(popupSelector, popupSubmitHandler) {
        super(popupSelector);
        this._popupSubmitHandler = popupSubmitHandler;
        this._confirmButton = this._popup.querySelector('#delete-card-button');
    }

    _handleSubmit = () => {
        this._popupSubmitHandler();
        this._removeEventListeners();
    }

    setEventListeners() {
        super.setEventListeners();
        this._confirmButton.addEventListener('click', this._handleSubmit );
    }

    _removeEventListeners() {
        this._confirmButton.removeEventListener('click', this._handleSubmit );
    }
}