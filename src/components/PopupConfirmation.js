import Popup from "./Popup.js";

export default class PopupConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._confirmButton = this._popup.querySelector('#delete-card-button');
    }

    _handleSubmit = () => {
        this._popupSubmitHandler();
        this._removeEventListeners();
    }

    setEventListeners(handler) {
        super.setEventListeners();
        this._popupSubmitHandler = handler;
        this._confirmButton.addEventListener('click', this._handleSubmit );
    }

    _removeEventListeners() {
        this._confirmButton.removeEventListener('click', this._handleSubmit );
    }
}