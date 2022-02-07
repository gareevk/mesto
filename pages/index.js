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
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

profilePopupValidation.enableValidation();

//addCardPopupValidation.enableValidation();

/*
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
*/
/*
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closePopupFocusLost);
  document.removeEventListener('keydown', closePopupEsc);
}
*/

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

/*
function closePopupFocusLost(evt) {
  if (evt.target.classList.contains('popup')) {
    const closestPopup = evt.target.closest('.popup');
    closePopup(closestPopup);
  }
}
*/

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

//cardAddSubmit.addEventListener('submit', submitAddCardForm);

function addCard(newCard) {
  const card = new Card(newCard, cardTemplateSelector);  
  const cardElement = card.generateCard();
  document.querySelector('.elements__gallery').prepend(cardElement);
}

buttonAddCard.addEventListener('click', () => {
  addCardPopupValidation.enableValidation();
  const addCardPopup = new PopupWithForm( '#add-card-popup', (formInput) => {
    const newCard = [{
        name: formInput.cardName,
        link: formInput.cardLink
    }]
    const addNewCard = new Section( {
      items: newCard,
      renderer:  (item) => {
          const card = new Card(item, cardTemplateSelector, () => {
            const cardImagePopup = new PopupWithImage('#card-popup');
            cardImagePopup.open(item);
          });
          const cardElement = card.generateCard();
          addNewCard.addItem(cardElement);
      }
    },
    '.elements__gallery');
    addNewCard.renderItems();
    addCardPopup.close();
  }
  
  //submitPopupAddCard 
  );
  addCardPopup.open();
} );

const initialCard = new Section( {
  items: initialCards,
  renderer: (newCard) => {
    const card = new Card(newCard, cardTemplateSelector, () => {
      const cardImagePopup = new PopupWithImage('#card-popup');
      cardImagePopup.open(newCard);
    });
    const cardElement = card.generateCard();
    initialCard.addItem(cardElement);
  }
} , '.elements__gallery');

initialCard.renderItems();

// export {openPopup, closePopup};