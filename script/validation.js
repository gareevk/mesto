const validationConfig = {
    saveButton: '.popup__save-button',
    saveButtonDisabled: 'popup__save-button_disabled',
    errorInput: 'popup__input_type_error',
    errorActive: 'popup__input-error_active',
    popupInput: '.popup__input',
    popup: '.popup__container'
}

/*Button validation*/
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
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

/*profile form validation*/
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
  
enableValidation(validationConfig);