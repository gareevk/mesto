import {
    cardFullsizeSource,
    cardFullsizeName
} from "../utils/constants.js"

import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._cardImage = cardFullsizeSource;
        this._cardName = cardFullsizeName;   
    }
    
    open(card) {
        console.log(this._cardImage);
        this._cardImage.src = card.link;
        this._cardName.textContent = card.name;
        this._cardImage.alt = card.name;
        super.open();
    }
}