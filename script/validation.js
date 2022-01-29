class FormValidator {
  constructor(config, validationElement) {
    this._validationConfig = config;
    this._saveButton = config.saveButton;
    this._saveButtonDisabled = config.saveButtonDisabled;
    this._errorInput = config.errorInput;
    this._errorActive = config.errorActive;
    this._popupInput = config.popupInput;
    this._popup = config.popup;
    this._validationElement = validationElement;
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
 
  
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._saveButtonDisabled);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._saveButtonDisabled);
      buttonElement.removeAttribute('disabled');
    }
  }
  
  _showInputError(inputElement, errorMessage) {
      const errorElement = this._validationElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(validationConfig.errorInput);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(validationConfig.errorActive);
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
    const inputList = Array.from(this._popup.querySelectorAll(this._popupInput));
    const buttonElement = this._popup.querySelector(this._saveButton);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._popup));
      
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
  
      this._setEventListeners();
    });
  }
}

//export {FormValidator};

/*Button validation*/
/*
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
}; 
  
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validationConfig.saveButtonDisabled);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(validationConfig.saveButtonDisabled);
      buttonElement.removeAttribute('disabled');
    }
}
*/

/*form validation*/
/*
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(validationConfig.errorInput);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorActive);
}
  
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.errorInput);
    errorElement.classList.remove(validationConfig.errorActive);
    errorElement.textContent = '';
};
  
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
};
*/

/*
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.popupInput));
    const buttonElement = formElement.querySelector(validationConfig.saveButton);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
};


function enableValidation () {
    const formList = Array.from(document.querySelectorAll(validationConfig.popup));
    
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
  
      setEventListeners(formElement);
    });
}
*/