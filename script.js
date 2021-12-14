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

/* Profile Popup */
const popupProfile = document.querySelector('#profile-popup');
const editProfile = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.popup__close-button');
const nameInput = popupProfile.querySelector('#name-input');
const proInput = popupProfile.querySelector('#bio-input');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__description');
const profileSubmit = popupProfile.querySelector('.popup__container');

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
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
const popupAddCard = document.querySelector('#add-card-popup');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonCloseCardPopup = popupAddCard.querySelector('#card-popup-close');
const cardNameInput = popupAddCard.querySelector('#card-name');
const cardLinkInput = popupAddCard.querySelector('#card-link');
const cardName = document.querySelector('.elements__item-name');
const cardImageLink = document.querySelector('.elements__item-image');
const cardAddSubmit = popupAddCard.querySelector('#add-card-container');
const cardsContainer = document.querySelector('.elements__gallery');

buttonCloseCardPopup.addEventListener('click', () => {
  closePopup(popupAddCard);
});

cardAddSubmit.addEventListener('submit', submitAddCard);

function createCard(cardNameValue, cardLinkValue) {
  const cardTemplate = document.querySelector('#elements__item-template').content;
  const cardsElement = cardTemplate.querySelector('.elements__item').cloneNode(true);

  cardsElement.querySelector('.elements__item-image').src = cardLinkValue;
  cardsElement.querySelector('.elements__item-name').textContent = cardNameValue;
  
  return cardsElement;
}

function prependCard(cardItem) {
  cardsContainer.prepend(cardItem);
}

function submitAddCard(evt) {
  evt.preventDefault();
  addCard(cardNameInput.value, cardLinkInput.value);
  closePopup(popupAddCard);
}

function addCard(cardNameValue, cardLinkValue) {
  //const cardTemplate = document.querySelector('#elements__item-template').content;
  //const cardsElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  //cardsElement.querySelector('.elements__item-image').src = cardLinkValue;
  //cardsElement.querySelector('.elements__item-name').textContent = cardNameValue;
  
  prependCard(createCard(cardNameValue, cardLinkValue));

  const cardsElement = cardsContainer.querySelector('.elements__item');
  const cardLike = cardsElement.querySelector('.elements__item-like'); //лайки для карточек
  cardLike.addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__item-like_active');
  });

  const buttonDeleteCard = cardsElement.querySelector('.elements__thrash-can') //удаление карточки по нажатию на кнопку корзины
  buttonDeleteCard.addEventListener('click', function(evt) {
    evt.target.parentNode.remove(cardsElement);
  });

  const cardOpen = cardsElement.querySelector('.elements__item-button');
  cardOpen.addEventListener('click', function(evt) {                              //Функция для открытия карточки на полный экран
    const card = document.querySelector('#card-popup');
    const cardImage = cardOpen.querySelector('.elements__item-image');
    card.querySelector('.popup__card-fullscreen').src = cardImage.src;
    card.classList.add('popup_opened');
    console.log(evt.target.parentNode.parentNode.querySelector('.elements__item-name').textContent);
    document.querySelector('.popup__description').textContent = evt.target.parentNode.parentNode.querySelector('.elements__item-name').textContent;
  });

  const cardClose = document.querySelector('#card-close');
  cardClose.addEventListener('click', function() {
    const card = document.querySelector('#card-popup');
    closePopup(card);    
  });

  //cardsContainer.prepend(cardsElement); //добавление новой карточки в начало
}

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

/* Load initial cards*/
for (let i = initialCards.length - 1; i >= 0; i--) {
  addCard(initialCards[i].name, initialCards[i].link);
}