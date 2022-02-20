import './index.css';
import Card from '../components/Сard.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupConfirmation from '../components/PopupConfirmation.js';
//import Api from '../components/Api.js';

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
  profileAvatar,
  cardDeleteButton,
  editAvatarButton,
  editAvatarForm,
  avatarPopupValidation
} from '../utils/constants.js';

import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api';

const cardImagePopup = new PopupWithImage('#card-popup');

function addNewCard(newCard, newSection, cardTemplateSelector) {
  const card = new Card(newCard, cardTemplateSelector, 
  () => {
    cardImagePopup.open(newCard);
  },
  () => {
    const deleteCardPopup = new PopupConfirmation('#delete-card-popup', 
      () => {
        fetch(`https://mesto.nomoreparties.co/v1/cohort36/cards/${card._cardId}`, {
          method: 'DELETE',
          headers: {
            authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca',
            'Content-Type': 'application/json'
          }
        })
        .then( (res) => res.json() )
        .then( (res) => {
          console.log(res);
          card.deleteCard();
          deleteCardPopup.close();
        } );
      });
    deleteCardPopup.open();
    deleteCardPopup.setEventListeners();
    
  } );
  const cardElement = card.generateCard();
  card._likes.forEach( (entry) => {
    if (entry._id === 'ec7fb4e4a3581b01330d0b00') {
      console.log(cardElement);
      card.like();
    }
  })
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
  .then( (result) => {
    const card = [result];
    const newCard = new Section( {
      items: card,
      renderer: (item) => {
        addNewCard(item, newCard, '#elements__item-template');
        console.log(item);
        fetch('https://mesto.nomoreparties.co/v1/cohort36/cards', {
            method: 'POST',
            headers: {
                authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: item.name,
                link: item.link
            })    
        })
        .then( (res) => res.json() )
        .catch( (err) => console.log('Ошибка, карточка не добавлена: ' + err));
      }
    },
    '.elements__gallery');
    
    newCard.renderItems();
  })
  .catch( (err) => console.log('Ошибка: ' + err));
  
  addCardPopup.close();
} );

const editAvatarPopup = new PopupWithForm('#edit-avatar', (avatarLink) => {
  console.log(avatarLink.link);
  fetch('https://mesto.nomoreparties.co/v1/cohort36/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatarLink.link
    })
  })
  .then( (res) => res.json() )
  .then( (res) => {
    console.log(res);
    profileAvatar.src = avatarLink.link;
    editAvatarPopup.close();
  })
  .catch( (err) => {
    console.log('Ошибка: ' + err);
    editAvatarPopup.close();
  } );
});

buttonAddCard.addEventListener('click', () => {
  addCardPopupValidation.enableValidation();
  addCardPopup.open();
} );

editProfile.addEventListener('click', () => {
  profilePopupValidation.enableValidation();
  profilePopup.open();
} );

editAvatarButton.addEventListener('click', () => {
  avatarPopupValidation.enableValidation();
  editAvatarPopup.open();
});

profilePopup.setEventListeners();

addCardPopup.setEventListeners();

cardImagePopup.setEventListeners();

editAvatarPopup.setEventListeners();

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

//const mestoApi = new Api();

function getInitialCards() {
  fetch('https://mesto.nomoreparties.co/v1/cohort36/cards', {
    headers: {
      authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca'
    }
  } )
  .then( (res) => res.json() )
  .then( (cards) => {
    console.log(cards);
    const initialCardSections = new Section( {
      items: cards,
      renderer: (initialCard) => {
        addNewCard( initialCard, initialCardSections, '#elements__item-template');
      }
    } , '.elements__gallery');
    initialCardSections.renderItems();
  })
  .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err));
}

getInitialCards();