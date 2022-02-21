import './index.css';
import Card from '../components/Сard.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupConfirmation from '../components/PopupConfirmation.js';
import Api from '../components/Api.js';

import {
  editProfile,
  nameInput,
  proInput,
  buttonAddCard,
  profilePopupValidation,
  addCardPopupValidation,
  profileName,
  profileBio,
  profileAvatar,
  editAvatarButton,
  avatarPopupValidation,
  profilePopupSaveButton,
  addCardSaveButton,
  editAvatarSaveButton
} from '../utils/constants.js';

import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

const cardImagePopup = new PopupWithImage('#card-popup');

function addNewCard(newCard, newSection, cardTemplateSelector) {
  const card = new Card(
    newCard, 
    cardTemplateSelector, 
    () => {
      cardImagePopup.open(newCard);
    },
    () => {
      const deleteCardPopup = new PopupConfirmation(
        '#delete-card-popup',
        () => {
          const mestoApi = new Api(
            `https://mesto.nomoreparties.co/v1/cohort36/cards/${card._cardId}`,
            'DELETE',
            {
              authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca',
              'Content-Type': 'application/json'
            },
            '',
            (res) => {
              card.removeCardElement();
              deleteCardPopup.close();
            }
          );
          mestoApi.deleteCard();
        }  
      );
      deleteCardPopup.open();
      deleteCardPopup.setEventListeners();
    },
    () => {
      const cardData = card.getCardInfo();
      if (cardData.isLiked) {
        const mestoApi = new Api(
          `https://mesto.nomoreparties.co/v1/cohort36/cards/${cardData.cardId}/likes`,
          'PUT',
          {
            authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca',
            'Content-Type': 'application/json'
          },
          '',
          (counter) => {
            cardData.element.querySelector('.elements__like-counter').textContent = counter;
          }
        )
        mestoApi.likeCard();
      } else {
        const mestoApi = new Api(
          `https://mesto.nomoreparties.co/v1/cohort36/cards/${cardData.cardId}/likes`,
          'DELETE',
          {
            authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca',
            'Content-Type': 'application/json'
          },
          '',
          (counter) => {
            cardData.element.querySelector('.elements__like-counter').textContent = counter;
          }
        )
        mestoApi.likeCard();
      }
    }
    
  )
  const cardElement = card.generateCard();
  newSection.addItem(cardElement);
}



const profile = new UserInfo( '.profile__name', '.profile__description', '.profile__avatar' );

const profilePopup = new PopupWithForm(
  '#profile-popup',
  (formInput) => {
    profile.setUserInfo(formInput);
    console.log(profile.getUserInfo());
    const mestoApi = new Api(
      'https://mesto.nomoreparties.co/v1/cohort36/users/me',
      'PATCH',
      {
        authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca',
        'Content-Type': 'application/json'
      },
      JSON.stringify({
        name: profile.getUserInfo().name,
        about: profile.getUserInfo().info
      }),
      (profileInfo) => {
        nameInput.value = profileInfo.name;
        proInput.value = profileInfo.about;
      },
      document.querySelector('.popup__loading-placeholder')
      //profilePopupSaveButton
    );
    mestoApi.setProfileInfo();
    profilePopup.close();
  }
)

const addCardPopup = new PopupWithForm( 
  '#add-card-popup',
  (formInput) => {
    const mestoApi = new Api(
      'https://mesto.nomoreparties.co/v1/cohort36/cards',
      'POST',
      {
        authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca',
        'Content-Type': 'application/json'
      },
      JSON.stringify({
        name: formInput.name,
        link: formInput.link
      }),
      (cardData) => {
        const card = [cardData];
        const newCard = new Section( {
          items: card,
          renderer: (item) => {
            addNewCard( item, newCard, '#elements__item-template');
          }
        },
          '.elements__gallery'
        );
        newCard.renderItems();
        addCardPopup.close();
      },
      addCardSaveButton
    );
    mestoApi.addCard();
  } 
);

const editAvatarPopup = new PopupWithForm( 
  '#edit-avatar',
  (avatarLink) => {
    const mestoApi = new Api(
      'https://mesto.nomoreparties.co/v1/cohort36/users/me/avatar',
      'PATCH',
      {
        authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca',
        'Content-Type': 'application/json'
      },
      JSON.stringify({
        avatar: avatarLink.link
      }),
      (avatarLink) => {
        profileAvatar.src = avatarLink.avatar;
        editAvatarPopup.close();
      },
      editAvatarSaveButton
    );
    mestoApi.setAvatar();
  } );

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
  const mestoApi = new Api(
    'https://nomoreparties.co/v1/cohort36/users/me',
    'GET',
    {
      authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca'
    },
    '',
    (user) => {
      profile.setUserInfo(user);
      profile.setUserAvatar(user);
      nameInput.value = profileName.textContent;
      proInput.value = profileBio.textContent;
    }
  );
  mestoApi.getUserInfo();
}

getUserInfo();

function getInitialCards() {
  const mestoApi = new Api(
    'https://mesto.nomoreparties.co/v1/cohort36/cards',
    'GET',
    {
      authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca'
    },
    '',
    (cards) => {
      const initialCardSections = new Section( {
        items: cards,
        renderer: (initialCard) => {
          addNewCard( initialCard, initialCardSections, '#elements__item-template');
        }
      } , '.elements__gallery');
      initialCardSections.renderItems();
    }
  );
  mestoApi.getInitialCards();
}

getInitialCards();
