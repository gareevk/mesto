/* Profile Popup */
let popup = document.querySelector('.popup');
let editProfile = document.querySelector('.profile__edit');
let closePopup = document.querySelector('.popup__close-button');
let nameInput = popup.querySelector('#name-input');
let proInput = popup.querySelector('#bio-input');
let profileName = document.querySelector('.profile__name');
let profileBio = document.querySelector('.profile__description');
let profileSubmit = popup.querySelector('.popup__container');

function popupOpen() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    proInput.value = profileBio.textContent;
}

function popupClose() {
    popup.classList.remove('popup_opened')
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

  for (let i = 0; i < initialCards.length; i++) {
    const cardTemplate = document.querySelector('#elements__item-template').content;
    const cardsElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
    const cardsContainer = document.querySelector('.elements__gallery');
    cardsElement.querySelector('.elements__item-image').src = initialCards[i].link;
    cardsElement.querySelector('.elements__item-name').textContent = initialCards[i].name;
    cardsContainer.append(cardsElement);
  }
