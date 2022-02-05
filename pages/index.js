import Card from '../components/Сard.js';
//import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';

import {
  initialCards,
  validationConfig,
  popupProfile,
  editProfile,
  popupCloseButton,
  nameInput,
  proInput,
  profileName,
  profileBio,
  profileSubmit,
  popupAddCard,
  buttonAddCard,
  buttonCloseCardPopup,
  cardNameInput,
  cardLinkInput,
  cardAddSubmit,
  buttonElement,
  cardTemplateSelector,
  profilePopupValidation,
  addCardPopupValidation
} from '../utils/constants.js';

profilePopupValidation.enableValidation();
addCardPopupValidation.enableValidation();



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

/*
initialCards.forEach((item) => {
  addCard(item, '#elements__item-template');
});
*/

/*
function addCard(newCard) {
  const card = new Card(newCard, cardTemplateSelector);  
  const cardElement = card.generateCard();
  document.querySelector('.elements__gallery').prepend(cardElement);
}
*/

const addCard = new Section( {
  items: initialCards,
  renderer: (newCard) => {
    const card = new Card(newCard, cardTemplateSelector);
    const cardElement = card.generateCard();
    addCard.addItem(cardElement);
  }
} , '.elements__gallery');

addCard.renderItems();

export {openPopup, closePopup};