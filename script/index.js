import FormValidator from './FormValidator.js'
import Card from './Сard.js'

const popupProfile = document.querySelector('#profile-popup');
const editProfile = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.popup__close-button');
const nameInput = popupProfile.querySelector('#name-input');
const proInput = popupProfile.querySelector('#bio-input');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__description');
const profileSubmit = popupProfile.querySelector('.popup__container');

const popupAddCard = document.querySelector('#add-card-popup');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonCloseCardPopup = popupAddCard.querySelector('#card-popup-close');
const cardNameInput = popupAddCard.querySelector('#card-name');
const cardLinkInput = popupAddCard.querySelector('#card-link');
const cardAddSubmit = popupAddCard.querySelector('#add-card-container');

const buttonElement = popupAddCard.querySelector('.popup__save-button');

const cardTemplateSelector = '#elements__item-template';

const validationConfig = {
  saveButton: '.popup__save-button',
  saveButtonDisabled: 'popup__save-button_disabled',
  errorInput: 'popup__input_type_error',
  errorActive: 'popup__input-error_active',
  popupInput: '.popup__input',
  popup: '.popup__container'
}

const profilePopupValidation = new FormValidator(validationConfig, popupProfile);
const addCardPopupValidation = new FormValidator(validationConfig, popupAddCard);
profilePopupValidation.enableValidation();
addCardPopupValidation.enableValidation();

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

function addCard(newCard) {
  const card = new Card(newCard, cardTemplateSelector);  
  const cardElement = card.generateCard();
  document.querySelector('.elements__gallery').prepend(cardElement);
}

function submitAddCardForm(evt) {
  evt.preventDefault();
  const newCard =
    {
      name: cardNameInput.value,
      link: cardLinkInput.value
    }
  addCard(newCard, cardTemplateSelector);  
  buttonElement.classList.add('popup__save-button_disabled');
  buttonElement.setAttribute('disabled', true);
  closePopup(popupAddCard);
  cardAddSubmit.reset();
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closePopupFocusLost);
  document.removeEventListener('keydown', closePopupEsc);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupFocusLost);
  document.addEventListener('keydown', closePopupEsc);
}

/*close popup with Esc*/
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const closestPopup = document.querySelector('.popup_opened');
    closePopup(closestPopup);
  }
}

/*close popup with focus lost*/
function closePopupFocusLost(evt) {
  if (evt.target.classList.contains('popup')) {
    const closestPopup = evt.target.closest('.popup');
    closePopup(closestPopup);
  }
}

function openProfilePopup() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  proInput.value = profileBio.textContent;
}

//open edit profile popup
function submitProfileEdit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileBio.textContent = proInput.value;
    closePopup(popupProfile);
}

editProfile.addEventListener('click', openProfilePopup);

popupCloseButton.addEventListener('click', () => {
  closePopup(popupProfile);
});

profileSubmit.addEventListener('submit', submitProfileEdit); 

/* Add-card Popup */
buttonCloseCardPopup.addEventListener('click', () => {
  closePopup(popupAddCard);
});

cardAddSubmit.addEventListener('submit', submitAddCardForm);

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

/* загрузка карточек на страницу через класс Card */
initialCards.forEach((item) => {
  addCard(item, '#elements__item-template');
});

export {openPopup, closePopup};