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
  initialCards,
  profileName,
  profileBio,
  profileAvatar
} from '../utils/constants.js';

import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

const cardImagePopup = new PopupWithImage('#card-popup');

function addNewCard(newCard, newSection) {
  const card = new Card(newCard, cardTemplateSelector, () => {
    cardImagePopup.open(newCard);
  });
  const cardElement = card.generateCard();
  newSection.addItem(cardElement);
}

const profile = new UserInfo( '.profile__name', '.profile__description' );

const profilePopup = new PopupWithForm( '#profile-popup', (formInput) => {
  profile.setUserInfo(formInput);
  profilePopup.close();

  fetch('https://mesto.nomoreparties.co/v1/cohort36/users/me', {
    method: 'PATCH',

    headers: {
      authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca',
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      name: profile.getUserInfo().name,
      about: profile.getUserInfo().info
    })

  })
  .then( (res) => res.json() )
  .then( (result) => {
    nameInput.value = result.name;
    proInput.value = result.about;
  } )
  .catch( (err) => console.log('Ошибка, сохранение не удалось: '+ err) )
} );


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

  fetch('https://mesto.nomoreparties.co/v1/cohort36/cards', {
    method: 'POST',

    headers: {
      authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca',
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      name: formInput.name,
      link: formInput.link
    })
  })
  .then( (res) => res.json() )
  .then( (result) => console.log(result))
  .catch( (err) => console.log('Ошибка: ' + err));


  addNewCards.renderItems();
  addCardPopup.close();
} );


buttonAddCard.addEventListener('click', () => {
  addCardPopupValidation.enableValidation();
  addCardPopup.open();
} );

editProfile.addEventListener('click', () => {
  profilePopupValidation.enableValidation();
  profilePopup.open();
} );

profilePopup.setEventListeners();

addCardPopup.setEventListeners();

cardImagePopup.setEventListeners();

function getUserInfo() {
  fetch('https://nomoreparties.co/v1/cohort36/users/me', {
    method: 'GET',
    headers: {
      authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca'
    }
  })
  .then( (res) => res.json() )
  .then( (user) => {
    profile.setUserInfo(user);
    profileAvatar.src = user.avatar;  //update UserInfo with avatar property
  } );
}

getUserInfo();

function getInitialCards() {
  fetch('https://mesto.nomoreparties.co/v1/cohort36/cards', {
    headers: {
      authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca'
    }
  } )
  .then( (res) => res.json() )
  .then( (cards) => {
    const initialCardSections = new Section( {
      items: cards,
      renderer: (initialCard) => {
        addNewCard( initialCard, initialCardSections);
      }
    } , '.elements__gallery');
    initialCardSections.renderItems();
  })
  .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err));
}

getInitialCards();