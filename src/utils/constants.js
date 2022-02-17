import FormValidator from "../components/FormValidator.js";

/* Initial Cards */
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  const validationConfig = {
    saveButton: '.popup__save-button',
    saveButtonDisabled: 'popup__save-button_disabled',
    errorInput: 'popup__input_type_error',
    errorActive: 'popup__input-error_active',
    popupInput: '.popup__input',
    popup: '.popup__container'
  };

const popupProfile = document.querySelector('#profile-popup');
const editProfile = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.popup__close-button');
const nameInput = popupProfile.querySelector('#name-input');
const proInput = popupProfile.querySelector('#bio-input');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__description');
const profileAvatar = document.querySelector('.profile__avatar');

const popupAddCard = document.querySelector('#add-card-popup');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonCloseCardPopup = popupAddCard.querySelector('#card-popup-close');
const cardNameInput = popupAddCard.querySelector('#card-name');
const cardLinkInput = popupAddCard.querySelector('#card-link');

const cardTemplateSelector = '#elements__item-template';

const profilePopupValidation = new FormValidator(validationConfig, popupProfile);
const addCardPopupValidation = new FormValidator(validationConfig, popupAddCard);

export {
    initialCards,
    validationConfig,
    popupProfile,
    editProfile,
    popupCloseButton,
    nameInput,
    proInput,
    profileName,
    profileBio,
    popupAddCard,
    buttonAddCard,
    buttonCloseCardPopup,
    cardNameInput,
    cardLinkInput,
    cardTemplateSelector,
    addCardPopupValidation,
    profilePopupValidation,
    profileAvatar
};