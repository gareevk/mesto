export default class Api {
    constructor( apiConfig ) {
        this._getUserInfoUrl = apiConfig.getUserInfoUrl;
        this._getUserInfoMethod = apiConfig.getUserInfoMethod;

        this._getInitialCardsUrl = apiConfig.getInitialCardsUrl;
        this._getInitialCardsMethod = apiConfig.getInitialCardsMethod;

        this._avatarUpdateUrl = apiConfig.avatarUpdateUrl;
        this._avatarUpdateMethod = apiConfig.avatarUpdateMethod;

        this._addCardUrl = apiConfig.addCardUrl;
        this._addCardMethod = apiConfig.addCardMethod;

        this._setProfileInfoUrl = apiConfig.setProfileInfoUrl;
        this._setProfileInfoMethod = apiConfig.setProfileInfoMethod;

        this._likeCardMethodPut = apiConfig.likeCardMethodPut;
        this._likeCardMethodDelete = apiConfig.likeCardMethodDelete;

        this._deleteCardMethod = apiConfig.deleteCardMethod;
        this._userToken = apiConfig.userToken;
        
        this._profileInfoLoading = document.querySelector('#profile-loading-placeholder');
        this._profileAvatarLoading = document.querySelector('#avatar-loading-placeholder');
        this._addCardLoading = document.querySelector('#add-card-loading-placeholder');
    }

    handleLoadingRenedering(isLoading, loadingPlaceholder) {
        if (isLoading) {
            loadingPlaceholder.classList.add('.popup__loading-placeholder_visible');
          } else {
            loadingPlaceholder.classList.remove('.popup__loading-placeholder_visible');
          }
    }

    deleteCard(cardId) {
        return fetch(
            `https://mesto.nomoreparties.co/v1/cohort36/cards/${cardId}`,
            {
                method:  this._deleteCardMethod,
                headers: {
                    authorization: this._userToken,
                    'Content-Type': 'application/json'
                }
            } 
        )
    }

    likeCard(isLiked, cardId) {
        if (isLiked) {
            return fetch(`https://mesto.nomoreparties.co/v1/cohort36/cards/${cardId}/likes`, {
                method: this._likeCardMethodPut,
                headers: {
                    authorization: this._userToken,
                    'Content-Type': 'application/json'
                }                
            })
        } else {
            return fetch(`https://mesto.nomoreparties.co/v1/cohort36/cards/${cardId}/likes`, {
                method: this._likeCardMethodDelete,
                headers: {
                    authorization: this._userToken,
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    setProfileInfo(name, info) {
        this.handleLoadingRenedering(true, this._profileInfoLoading);
        return fetch(
            this._setProfileInfoUrl,
            {
                method: this._setProfileInfoMethod,
                headers: {
                    authorization: this._userToken,
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    name: name,
                    about: info
                })
            } 
        )
    }

    getInitialCards() {
        console.log(this._getInitialCardsUrl);
        return fetch(
            this._getInitialCardsUrl, 
            {
                method: this._getInitialCardsMethod,
                headers: { authorization: this._userToken }
            })
    }

    addCard(formInput) {
        this.handleLoadingRenedering(true, this._addCardLoading);
        return fetch(
            this._addCardUrl,
            {
                method: this._addCardMethod,
                headers: {authorization: this._userToken,
                'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formInput.name,
                    link: formInput.link
                  })
            }
        )
    }

    setAvatar(avatarLink) {
        this.handleLoadingRenedering(true, this._profileAvatarLoading);
        return fetch( this._avatarUpdateUrl,
        {
            method: this._avatarUpdateMethod,
            headers: { authorization: this._userToken, 'Content-Type': 'application/json'},
            body: JSON.stringify({ avatar: avatarLink})
        })
    }

    getUserInfo() {
        return fetch(
            this._getUserInfoUrl,
            {
            method: this._getUserInfoMethod,
            headers: {
              authorization: this._userToken
            },
            }
        )
    } 
}