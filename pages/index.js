import Card from '../components/Сard.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import {
  initialCards,
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

import initialCard from '../utils/utils.js'; 

import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

editProfile.addEventListener('click', () => {
  profilePopupValidation.enableValidation();
  const profilePopup = new PopupWithForm( '#profile-popup', (formInput) => {
    const profile = new UserInfo( '.profile__name', '.profile__description' );
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
        name: formInput[0],
        link: formInput[1]
    }];
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
  } );
  addCardPopup.open();
} );

initialCard.renderItems();