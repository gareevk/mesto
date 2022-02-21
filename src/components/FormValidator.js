export default class FormValidator {
  constructor(config, validationElement) {
    this._validationConfig = config;
    this._saveButton = config.saveButton;
    this._saveButtonDisabled = config.saveButtonDisabled;
    this._errorInput = config.errorInput;
    this._errorActive = config.errorActive;
    this._popupInput = config.popupInput;
    this._popup = config.popup;
    this._validationElement = validationElement;
    this._inputList = Array.from(this._validationElement.querySelectorAll(this._popupInput));
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  } 
  
  _toggleButtonState(buttonElement) {
    if (this._hasInvalidInput()) {
      buttonElement.classList.add(this._saveButtonDisabled);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._saveButtonDisabled);
      buttonElement.removeAttribute('disabled');
    }
  }
  
  _showInputError(inputElement, errorMessage) {
      const errorElement = this._validationElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._errorInput);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorActive);
  }
    
  _hideInputError(inputElement) {
      const errorElement = this._validationElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._errorInput);
      errorElement.classList.remove(this._errorActive);
      errorElement.textContent = '';
  };
    
  _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
  };

  _setEventListeners() {
    const buttonElement = this._validationElement.querySelector(this._saveButton);
    this._toggleButtonState(buttonElement);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(buttonElement);
      });
    });
  }

  enableValidation() {
    console.log(this._validationElement);         
    this._validationElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });  
    this._setEventListeners();    
  }
}