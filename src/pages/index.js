import './index.css';
import Card from '../components/Сard.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import {
  editProfile,
  nameInput,
  proInput,
  buttonAddCard,
  cardTemplateSelector,
  profilePopupValidation,
  addCardPopupValidation,
  initialCards
} from '../utils/constants.js';

import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

function addNewCard(newCard, newSection) {
  const card = new Card(newCard, cardTemplateSelector, () => {
    const cardImagePopup = new PopupWithImage('#card-popup');
    cardImagePopup.open(newCard);
  });
  const cardElement = card.generateCard();
  console.log(newSection);
  newSection.addItem(cardElement);
}

const initialCardSections = new Section( {
  items: initialCards,
  renderer: (initialCard) => {
    addNewCard( initialCard, initialCardSections);
  }
} , '.elements__gallery');

const profile = new UserInfo( '.profile__name', '.profile__description' );

editProfile.addEventListener('click', () => {
  profilePopupValidation.enableValidation();
  const profilePopup = new PopupWithForm( '#profile-popup', (formInput) => { 
    profile.setUserInfo(formInput);
    profilePopup.close();
    nameInput.value = profile.getUserInfo().name;
    proInput.value = profile.getUserInfo().info;
  } );
  profilePopup.open();
} );

buttonAddCard.addEventListener('click', () => {
  addCardPopupValidation.enableValidation();
  const addCardPopup = new PopupWithForm( '#add-card-popup', (formInput) => {
    const newCard = [{
        name: formInput.name,
        link: formInput.link
    }];
    const addNewCards = new Section( {
      items: newCard,
      renderer:  (item) => {
        addNewCard(item, addNewCards);
      }
    },
    '.elements__gallery');
    addNewCards.renderItems();
    addCardPopup.close();
  } );
  addCardPopup.open();
} );

initialCardSections.renderItems();