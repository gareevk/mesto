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
let popupProfile = document.querySelector('#profile-popup');
let editProfile = document.querySelector('.profile__edit');
let closePopup = document.querySelector('.popup__close-button');
let nameInput = popupProfile.querySelector('#name-input');
let proInput = popupProfile.querySelector('#bio-input');
let profileName = document.querySelector('.profile__name');
let profileBio = document.querySelector('.profile__description');
let profileSubmit = popupProfile.querySelector('.popup__container');

function popupOpen() {
    popupProfile.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    proInput.value = profileBio.textContent;
}

function popupClose() {
    popupProfile.classList.remove('popup_opened')
}

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
    popupClose();
}

editProfile.addEventListener('click', popupOpen);

closePopup.addEventListener('click', popupClose);

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

cardAddSubmit.addEventListener('submit', submitAddCard); 
function submitAddCard(evt) {
  evt.preventDefault();
  addCard(cardNameInput.value, cardLinkInput.value);
  cardPopupClose();
}
function addCard(cardNameValue, cardLinkValue) {
  const cardTemplate = document.querySelector('#elements__item-template').content;
  const cardsElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  const cardsContainer = document.querySelector('.elements__gallery');

  cardsElement.querySelector('.elements__item-image').src = cardLinkValue;
  cardsElement.querySelector('.elements__item-name').textContent = cardNameValue;

  cardsContainer.prepend(cardsElement);
}

for (let i = initialCards.length - 1; i >= 0; i--) {
  addCard(initialCards[i].name, initialCards[i].link);
}

buttonAddCard.addEventListener('click', cardPopupOpen);
function cardPopupOpen() {
  popupAddCard.classList.add('popup_opened');
}

buttonCloseCardPopup.addEventListener('click', cardPopupClose);
function cardPopupClose() {
  popupAddCard.classList.remove('popup_opened');
}