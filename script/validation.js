/*Button validation*/
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }; 
  
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__save-button_disabled');
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove('popup__save-button_disabled');
      buttonElement.removeAttribute('disabled');
    }
}

/*profile form validation*/
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
}
  
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
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
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__save-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
};
  
function enableValidation () {
    const formList = Array.from(document.querySelectorAll('.popup__container'));
    
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
  
      setEventListeners(formElement);
    });
}
  
enableValidation();


  
  /*
  const clearValidation = (popup) => {
    const errorMessage = Array.from(popup.querySelectorAll('.popup__input-error'));
    errorMessage.forEach((error) => {
      error.textContent = '';
    });
    const inputError = Array.from(popup.querySelectorAll('.popup__input'));
    inputError.forEach((input) =>{
      input.classList.remove('popup__input_type_error');
    });
    const buttonDisabled = popup.querySelector('.popup__save-button');
    buttonDisabled.classList.remove('popup__save-button_disabled');
  }
*/