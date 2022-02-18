export default class Card {
    constructor (card , templateSelector, handleCardClick, handleDeleteButtonClick) {
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

      if (this._cardOwner !== 'ec7fb4e4a3581b01330d0b00') {   // so far I know nothing about current session user ID
        this._element.querySelector('.elements__thrash-can').remove();
      } else {
        this._element.querySelector('.elements__thrash-can').addEventListener('click', () => {
          this._deleteCard();
        });
      }
  
      return this._element;
    }

    _deleteCard() {
      console.log(this._cardId);
      this._deleteCard(this._cardId);
      //this._element.remove();
    }
  
    _like() {
      this._isLiked = !this._isLiked;
      this._element.querySelector('.elements__item-like').classList.toggle('elements__item-like_active');
      if (this._isliked) {
        fetch(`https://mesto.nomoreparties.co/v1/cohort36/cards/${this._cardId}/likes`, {
          method: 'PUT',
          headers: {
            authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca'
          }
        })
        .then( (res) => res.json() )
        .then( (like) => console.log(like) )

        .catch( (err) => console.log('Ошибка: ' + err) );
      } else {
        fetch(`https://mesto.nomoreparties.co/v1/cohort36/cards/${this._cardId}/likes`, {
          method: 'DELETE',
          headers: {
            authorization: '29b7c506-9f8b-4a60-9054-462b94d7dbca'
          }
        } )
        .then( (res) => res.json() )
        .then( (like) => console.log(like) )
        .catch( (err) => console.log('Ошибка: ' + err) );
      }
    }
  
    _setEventListeners() {
      this._element.querySelector('.elements__item-image').addEventListener('click', () => {             //popup opening
        this._handleCardClick();
      });
  
      this._element.querySelector('.elements__item-like').addEventListener('click', () => {  //card like
        this._like();
      });  
    }
  }