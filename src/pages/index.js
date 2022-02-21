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
  profilePopupLoadingPlaceholder,
  popupAddCardLoadingPlaceholder,
  profileAvatarLoadingPlaceholder,
  apiConfig
} from '../utils/constants.js';

import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

const cardImagePopup = new PopupWithImage('#card-popup');

const mestoApi = new Api(apiConfig);

const addCardPopup = new PopupWithForm( 
  '#add-card-popup',
  (formInput) => {
    mestoApi.addCard(formInput)
    .then( res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then( (cardData) => {
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
    })
    .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) )
    .finally( () => mestoApi.handleLoadingRenedering(false, popupAddCardLoadingPlaceholder)); 
  } 
);

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
          mestoApi.deleteCard(card._cardId)
          .then( res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .then( () => {
            card.removeCardElement();
            deleteCardPopup.close();
          })
          .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) ); 
        }  
      );
      deleteCardPopup.open();
      deleteCardPopup.setEventListeners();
    },
    () => {
      const cardData = card.getCardInfo();
      mestoApi.likeCard(cardData.isLiked, cardData.cardId)
      .then( res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then( (likes) => {
        cardData.element.querySelector('.elements__like-counter').textContent = likes.likes.length;
      } )
      .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) );  
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
    mestoApi.setProfileInfo(profile.getUserInfo().name, profile.getUserInfo().info)
    .then( res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then( (profileInfo) => {
      nameInput.value = profileInfo.name;
      proInput.value = profileInfo.about;
    })
    .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) )
    .finally( () => { 
      mestoApi.handleLoadingRenedering(false, profilePopupLoadingPlaceholder);
      profilePopup.close();
    });
  }
)

const editAvatarPopup = new PopupWithForm( 
  '#edit-avatar',
  (avatarLink) => {
    mestoApi.setAvatar(avatarLink.link)
    .then( res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then( (avatar) => {
        profileAvatar.src = avatar.avatar;
        editAvatarPopup.close();
    })
    .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) )
    .finally( () => mestoApi.handleLoadingRenedering(false, profileAvatarLoadingPlaceholder));
  } );

buttonAddCard.addEventListener('click', () => {
  addCardPopup.open();
} );

editProfile.addEventListener('click', () => {
  
  profilePopup.open();
} );

editAvatarButton.addEventListener('click', () => {
  
  editAvatarPopup.open();
});

addCardPopupValidation.enableValidation();
avatarPopupValidation.enableValidation();
profilePopupValidation.enableValidation();

profilePopup.setEventListeners();

addCardPopup.setEventListeners();

cardImagePopup.setEventListeners();

editAvatarPopup.setEventListeners();

function getUserInfo() {
  mestoApi.getUserInfo()
  .then( res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then( (user) => {
    console.log(user);
      profile.setUserInfo(user);
      profile.setUserAvatar(user);
      nameInput.value = profileName.textContent;
      proInput.value = profileBio.textContent;
  })
  .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) ); 
}


/*
const newCard = new Section(
  () => {
    addNewCard( newCard.getCardData(), newCard, '#elements__item-template');
  },
  '.elements__gallery'
);
*/

function getInitialCards() {
  mestoApi.getInitialCards()
  .then( res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then( (cards) => {
    console.log(cards);
    const initialCardSections = new Section( {
      items: cards,
      renderer: (initialCard) => {
        addNewCard( initialCard, initialCardSections, '#elements__item-template');
      }
    } , '.elements__gallery');
    initialCardSections.renderItems();
  } )
  .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) );
}

Promise.all(getInitialCards(), getUserInfo())
.then( (res) => console.log(res) )
.catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) );
