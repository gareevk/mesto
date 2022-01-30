const cardClose = document.querySelector('#card-close');
const card = document.querySelector('#card-popup');
const cardFullscreen = card.querySelector('.popup__card-fullscreen');
const cardFullscreenDescription = card.querySelector('.popup__description');

class Card {
    constructor (card, templateSelector) {
      this._name = card.name;
      this._image = card.link;
      this._template = templateSelector;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._template) //'#elements__item-template'
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

  export default Card;