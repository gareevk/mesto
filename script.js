let popup = document.querySelector('.popup');
let editProfile = document.querySelector('.profile__edit');
let closePopup = document.querySelector('.popup__close-button');
let nameInput = popup.querySelector('.popup__name-input');
let proInput = popup.querySelector('.popup__bio-input');
let profileName = document.querySelector('.profile__name');
let profileBio = document.querySelector('.profile__description');
let profileSubmit = popup.querySelector('.popup__container');

function popupOpen() {
    popup.classList.add('popup_opened');
}

function popupClose() {
    popup.classList.remove('popup_opened')
}

function submitProfileEdit(evt) {
    evt.preventDefault();
    if (nameInput.value !== '') {
        profileName.textContent = nameInput.value;
    }
    if (proInput.value !== '') {
        profileBio.textContent = proInput.value;
    }
    popupClose();
}

editProfile.addEventListener('click', popupOpen);

closePopup.addEventListener('click', popupClose);

profileSubmit.addEventListener('submit', submitProfileEdit); 