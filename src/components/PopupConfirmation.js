import Popup from "./Popup.js";

export default class PopupConfirmation extends Popup {
    constructor(popupSelector, popupSubmitHandler) {
        super(popupSelector);
        this._popupSubmitHandler = popupSubmitHandler;
    }

    _handleSubmit() {
        this._handleSubmit();
    }

    setEventListeners() {
        super.setEventListeners();
        
    }
}