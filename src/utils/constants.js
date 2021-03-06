import FormValidator from "../components/FormValidator.js";

  const validationConfig = {
    saveButton: '.popup__save-button',
    saveButtonDisabled: 'popup__save-button_disabled',
    errorInput: 'popup__input_type_error',
    errorActive: 'popup__input-error_active',
    popupInput: '.popup__input',
    popup: '.popup__container'
  };

  const apiConfig = {
    userToken: '29b7c506-9f8b-4a60-9054-462b94d7dbca'
  }

  const cardFullsizeSource = document.querySelector('.popup__card-fullscreen');
  const cardFullsizeName = document.querySelector('.popup__description');

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

const cardTemplateSelector = '#elements__added-item-template';

const editAvatarButton = document.querySelector('.profile__edit-avatar-button');
const editAvatarForm = document.querySelector('#add-avatar-link');
const profileAvatarPopup = document.querySelector('#edit-avatar');

const profilePopupSubmitButton = popupProfile.querySelector('#profile-submit-button');
const avatarPopupSubmitButton = profileAvatarPopup.querySelector('#avatar-submit-button');
const addCardPopupSubmitButton = popupAddCard.querySelector('#card-submit-button');

const profilePopupValidation = new FormValidator(validationConfig, popupProfile);
const addCardPopupValidation = new FormValidator(validationConfig, popupAddCard);
const avatarPopupValidation = new FormValidator(validationConfig, profileAvatarPopup);

export {
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
  profileAvatar,
  editAvatarButton,
  editAvatarForm,
  avatarPopupValidation,
  apiConfig,
  cardFullsizeSource,
  cardFullsizeName,
  profileAvatarPopup,
  profilePopupSubmitButton,
  avatarPopupSubmitButton,
  addCardPopupSubmitButton
};