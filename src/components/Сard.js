export default class Card {
    constructor (card , templateSelector, handleCardClick, handleDeleteButtonClick, handleLikeClick ) {
      this._card = card;
      this._cardId = card._id;
      this._cardOwner = card.owner._id;
      this._name = card.name;
      this._image = card.link;
      this._template = templateSelector;
      this._handleCardClick = handleCardClick;
      this._likes = card.likes;
      this._isLiked = false;
      this._cardId = card._id;
      this._deleteCard = handleDeleteButtonClick;
      this._handleLikeClick = handleLikeClick;
      this._userId = 'ec7fb4e4a3581b01330d0b00';
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
      this._element.querySelector('.elements__like-counter').textContent = this._likes.length;
      this._likes.forEach(element => {
        if (element._id === this._userId) {
          this._like();
          this._isLiked = !this._isLiked;
        }
      })

      if (this._cardOwner !== this._userId) {   // so far I know nothing about current session user ID
        this._element.querySelector('.elements__thrash-can').remove();
      } else {
        this._element.querySelector('.elements__thrash-can').addEventListener('click', () => {
          this._deleteCardHandler();
        });
      }
      return this._element;
    }

    _deleteCardHandler() {
      this._deleteCard();
    }

    removeCardElement() {
      this._element.remove();
    }

    getCardInfo() {
      return {isLiked: this._isLiked, cardId: this._cardId, element: this._element, likesCount: this._likes.length}
    }

    _like() {
      this._element.querySelector('.elements__item-like').classList.toggle('elements__item-like_active');
    }
  
    _likeHandler() {
      this._isLiked = !this._isLiked;
      this._like();
      this._handleLikeClick();
    }
  
    _setEventListeners() {
      this._element.querySelector('.elements__item-image').addEventListener('click', () => {             //popup opening
        this._handleCardClick();
      });
  
      this._element.querySelector('.elements__item-like').addEventListener('click', () => {  //card like
        this._likeHandler();
      });  
    }
  }