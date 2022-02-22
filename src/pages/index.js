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


let userId;
const cardImagePopup = new PopupWithImage('#card-popup');
const mestoApi = new Api(apiConfig);
const newCard = new Section( {
  renderer: (item) => {
    addNewCard( item, newCard, '#elements__item-template');
  }
},
  '.elements__gallery'
);

const addCardPopup = new PopupWithForm( 
  '#add-card-popup',
  (formInput) => {
    mestoApi.addCard(formInput)
    .then( (cardData) => {
        const card = [cardData];
        newCard.renderItems(card);
        addCardPopup.close();
    })
    .catch( (err) => console.log('Ошибка, загрузка чего-то не удалась: '+ err) )
    .finally( () => mestoApi.handleLoadingRenedering(false, popupAddCardLoadingPlaceholder)); 
  } 
);

const deleteCardPopup = new PopupConfirmation('#delete-card-popup');

function addNewCard(newCard, newSection, cardTemplateSelector) {
  const card = new Card(
    newCard, 
    cardTemplateSelector, 
    () => {
      cardImagePopup.open(newCard);
    },
    () => {
      deleteCardPopup.setEventListeners( () => {
        mestoApi.deleteCard(card._cardId)
        .then( (res) => {
          card.removeCardElement();
          deleteCardPopup.close();
        })
        .catch( (err) => console.log('Ошибка, загрузка карточки не удалась: '+ err) ); 
        card
      })
      deleteCardPopup.open();
    },
    () => {
      const cardData = card.getCardInfo();
      console.log(cardData);
      mestoApi.likeCard(cardData.isLiked, cardData.cardId)
      .then( (likes) => {
        cardData.element.querySelector('.elements__like-counter').textContent = likes.likes.length;
      } )
      .catch( (err) => console.log('Ошибка, загрузка лайков не удалась: '+ err) );  
    },
    userId
  )
  const cardElement = card.generateCard();
  newSection.addItem(cardElement);
}

const profile = new UserInfo( '.profile__name', '.profile__description', '.profile__avatar' );

const profilePopup = new PopupWithForm(
  '#profile-popup',
  (formInput) => {
    mestoApi.setProfileInfo(profile.getUserInfo().name, profile.getUserInfo().info)
    .then( (profileInfo) => {
      profile.setUserInfo(formInput);
      nameInput.value = profileInfo.name;
      proInput.value = profileInfo.about;
      profilePopup.close();
    })
    .catch( (err) => console.log('Ошибка, загрузка профиля не удалась: '+ err) )
    .finally( () => { 
      mestoApi.handleLoadingRenedering(false, profilePopupLoadingPlaceholder);
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
    .catch( (err) => console.log('Ошибка, загрузка аватара не удалась: '+ err) )
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
  
  .then( (user) => {
      userId = user._id;
      profile.setUserInfo(user);
      profile.setUserAvatar(user);
      nameInput.value = profileName.textContent;
      proInput.value = profileBio.textContent;
  })
  .catch( (err) => console.log('Ошибка, загрузка юзер инфо не удалась: '+ err) ); 
}

function getInitialCards() {
  mestoApi.getInitialCards()
  .then( (cards) => {
    newCard.renderItems(cards);
  } )
  .catch( (err) => console.log('Ошибка, загрузка карточек не удалась: '+ err) );
}

Promise.all(getUserInfo(), getInitialCards())
.then( (res) => {
  console.log(res);
 } )
.catch( (err) => console.log('Ошибка, загрузка информации не удалась: '+ err) );

export default userId;

