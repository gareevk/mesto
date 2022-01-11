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
const cardName = document.querySelector('.elements__item-name');
const cardImageLink = document.querySelector('.elements__item-image');
const cardAddSubmit = popupAddCard.querySelector('#add-card-container');
const cardsContainer = document.querySelector('.elements__gallery');

const card = document.querySelector('#card-popup');
const cardFullscreen = card.querySelector('.popup__card-fullscreen');
const cardFullscreenDescription = card.querySelector('.popup__description');

const cardTemplate = document.querySelector('#elements__item-template').content;

const cardClose = document.querySelector('#card-close');

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

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  //clearValidation(popup);
  popup.removeEventListener('click', closePopupFocusLost);
  document.removeEventListener('keydown', closePopupEsc);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('click', closePopupFocusLost);
  document.addEventListener('keydown', closePopupEsc);
}

/*close popup with Esc*/
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const closestPopup = document.querySelector('.popup_opened');
    console.log(closestPopup);
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
    console.log('ping');
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

function submitAddCard(evt) {
  evt.preventDefault();
  addCard(cardNameInput.value, cardLinkInput.value);
  closePopup(popupAddCard);
  cardLinkInput.value = 'Ссылка на картинку';
  cardNameInput.value = 'Название';
}

cardAddSubmit.addEventListener('submit', submitAddCard);

cardClose.addEventListener('click', function() {
  closePopup(card);    
});

function prependCard(cardItem) {
  cardsContainer.prepend(cardItem);
}

function addCard(cardNameValue, cardLinkValue) {
  prependCard(createCard(cardNameValue, cardLinkValue));
}

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

/* Load initial cards*/
for (let i = initialCards.length - 1; i >= 0; i--) {
  addCard(initialCards[i].name, initialCards[i].link);
}