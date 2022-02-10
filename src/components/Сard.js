export default class Card {
    constructor (card , templateSelector, handleCardClick) {
      this._name = card.name;
      this._image = card.link;
      this._template = templateSelector;
      this._handleCardClick = handleCardClick;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._template)
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
  
    _setEventListeners() {
      this._element.querySelector('.elements__item-image').addEventListener('click', () => {             //popup opening
        this._handleCardClick();
      });
  
      this._element.querySelector('.elements__item-like').addEventListener('click', () => {  //card like
        this._like();
      });
  
      this._element.querySelector('.elements__thrash-can').addEventListener('click', () => {  //cart deletion
        this._deleteCard();
      });
    }
  }