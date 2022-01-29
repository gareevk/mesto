import FormValidator from './validation.js'
import Card from './card.js'

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

/* Card parent class to generate new places cards*/
/*
class Card {
  constructor (card) {
    this._name = card.name;
    this._image = card.link;
    //this._isLiked = false;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('#elements__item-template')
      .content
      .querySelector('.elements__item')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.elements__item-name').textContent = this._name;
    this._element.querySelector('.elements__item-image').src = this._image;
    this._element.querySelector('.elements__item-image').alt = `Карточка с изображением места - ${this._name}`;

    return this._element;
  }

  _like() {
    //this._isLiked = !this._isLiked;
    this._element.querySelector('.elements__item-like').classList.toggle('elements__item-like_active');
  }

  _deleteCard() {
    this._element.remove();
  }

  _handleOpenPopup() {
    cardFullscreen.src = this._image;
    cardFullscreenDescription.textContent = this._name;
    card.classList.add('popup_opened');
    
    this._element.addEventListener('keydown', (evt) => {  //how to remove this eventListeners after?
      if (evt.key === 'Escape') {
        this._handleClosePopup();
      }
    });

    card.addEventListener('click', (evt) => {
      if (!evt.target.classList.contains('.popup')) {
        this._handleClosePopup();
      }
    });
  }

  _handleClosePopup() {
    card.classList.remove('popup_opened');
    cardFullscreenDescription.textContent = '';
    //cardFullscreen.src = '';
    //this._element.removeEventListener('keydown');
    //this._element.removeEventListener('click');
  }

  _setEventListeners() {
    this._element.querySelector('.elements__item-image').addEventListener('click', () => {  //popup opening
      this._handleOpenPopup();
    });
    
    cardClose.addEventListener('click', () => {  //popup closing
      this._handleClosePopup();
    });

    this._element.querySelector('.elements__item-like').addEventListener('click', () => {  //card like
      this._like();
    });

    this._element.querySelector('.elements__thrash-can').addEventListener('click', () => {  //cart deletion
      this._deleteCard();
    });
  }
}
*/

/* загрузка карточек на страницу через класс Card */
initialCards.forEach((item) => {
  addCard(item);
});

function addCard(newCard) {  //cardNameValue, cardLinkValue
  const card = new Card(newCard);  //cardNameValue, cardLinkValue
  const cardElement = card.generateCard();
  document.querySelector('.elements__gallery').prepend(cardElement);
  //prependCard(createCard(cardNameValue, cardLinkValue));
}

function submitAddCard(evt) {
  evt.preventDefault();
  const newCard =
    {
      name: cardNameInput.value,
      link: cardLinkInput.value
    }
  addCard(newCard);  //cardNameInput.value, cardLinkInput.value
  buttonElement.classList.add('popup__save-button_disabled');
  buttonElement.setAttribute('disabled', true);
  closePopup(popupAddCard);
  cardLinkInput.value = 'Ссылка на картинку';
  cardNameInput.value = 'Название';
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  //clearValidation(popup);
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

editProfile.addEventListener('click', openProfilePopup);

popupCloseButton.addEventListener('click', () => {
  closePopup(popupProfile);
});

//open edit profile popup
function submitProfileEdit(evt) {
    evt.preventDefault();
    if (nameInput.value !== '') {
        profileName.textContent = nameInput.value;
        nameInput.setAttribute("value", nameInput.value);
    }
    if (proInput.value !== '') {
        profileBio.textContent = proInput.value;
        proInput.setAttribute("value", proInput.value);
    }
    closePopup(popupProfile);
}

profileSubmit.addEventListener('submit', submitProfileEdit); 

/* Add-card Popup */
buttonCloseCardPopup.addEventListener('click', () => {
  closePopup(popupAddCard);
});


cardAddSubmit.addEventListener('submit', submitAddCard);

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

cardNameInput.addEventListener('focusin', () => {
  cardNameInput.value = '';
});

cardNameInput.addEventListener('focusout', () => {
  if (cardNameInput.value === '') {
    cardNameInput.value = 'Название';
  };
});

cardLinkInput.addEventListener('focusin', () => {
  cardLinkInput.value = '';
});

cardLinkInput.addEventListener('focusout', () => {
  if (cardLinkInput.value === '') {
    cardLinkInput.value = 'Ссылка на картинку';
  };
});

/* Load initial cards
for (let i = initialCards.length - 1; i >= 0; i--) {
  addCard(initialCards[i].name, initialCards[i].link);
}*/
/*
cardClose.addEventListener('click', function() {
  closePopup(card);    
});

function prependCard(cardItem) {
  cardsContainer.prepend(cardItem);
}
*/

/*
function createCard(cardNameValue, cardLinkValue) {
  const cardsElement = cardTemplate.querySelector('.elements__item').cloneNode(true);

  cardsElement.querySelector('.elements__item-image').src = cardLinkValue;
  cardsElement.querySelector('.elements__item-name').textContent = cardNameValue;
  cardsElement.querySelector('.elements__item-image').alt = 'Карточка с изображением места - ' + cardNameValue;

  const cardLike = cardsElement.querySelector('.elements__item-like');
  cardLike.addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__item-like_active');
  });

  
  //удаление карточки по нажатию на кнопку корзины
  const buttonDeleteCard = cardsElement.querySelector('.elements__thrash-can');
   buttonDeleteCard.addEventListener('click', function(evt) {
     evt.target.closest('.elements__item').remove();
  });
  

  const cardOpen = cardsElement.querySelector('.elements__item-button');
  const cardImage = cardsElement.querySelector('.elements__item-image');
  
  cardOpen.addEventListener('click', function(evt) {      //Функция для открытия карточки на полный экран
    cardFullscreen.src = cardImage.src;
    cardFullscreen.alt = cardImage.alt;

    openPopup(card);
    console.log(evt.target.closest('.elements__item').querySelector('.elements__item-name'));
    cardFullscreenDescription.textContent = evt.target.closest('.elements__item').querySelector('.elements__item-name').textContent;
  });
  
  return cardsElement;
}
*/


