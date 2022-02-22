export default class Api {
    constructor( apiConfig ) {
        this._userToken = apiConfig.userToken;

        this._baseUrl = 'https://mesto.nomoreparties.co/v1/cohort36/';
        
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
            this._baseUrl + `cards/${cardId}`,
            {
                method:  'DELETE',
                headers: {
                    authorization: this._userToken,
                    'Content-Type': 'application/json'
                }
            } 
        )
        .then( res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    likeCard(isLiked, cardId) {
        if (isLiked) {
            return fetch(this._baseUrl + `cards/${cardId}/likes`, {
                method: 'PUT',
                headers: {
                    authorization: this._userToken,
                    'Content-Type': 'application/json'
                }                
            })
            .then( res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
        } else {
            return fetch(this._baseUrl + `cards/${cardId}/likes`, {
                method: 'DELETE',
                headers: {
                    authorization: this._userToken,
                    'Content-Type': 'application/json'
                }
            })
            .then( res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
        }
    }

    setProfileInfo(name, info) {
        this.handleLoadingRenedering(true, this._profileInfoLoading);
        return fetch(
            this._baseUrl + 'users/me',
            {
                method: 'PATCH',
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
        .then( res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    getInitialCards() {
        return fetch(
            this._baseUrl + 'cards', 
            {
                method: 'GET',
                headers: { authorization: this._userToken }
            })
            .then( res => {
                if (res.ok) {
                  return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })

    }

    addCard(formInput) {
        this.handleLoadingRenedering(true, this._addCardLoading);
        return fetch(
            this._baseUrl + 'cards',
            {
                method: 'POST',
                headers: {authorization: this._userToken,
                'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formInput.name,
                    link: formInput.link
                  })
            }
        )
        .then( res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    setAvatar(avatarLink) {
        this.handleLoadingRenedering(true, this._profileAvatarLoading);
        return fetch( this._baseUrl + 'users/me/avatar',
        {
            method: 'PATCH',
            headers: { authorization: this._userToken, 'Content-Type': 'application/json'},
            body: JSON.stringify({ avatar: avatarLink})
        })
    }

    getUserInfo() {
        return fetch(
            this._baseUrl + 'users/me',
            {
            method: 'GET',
            headers: {
              authorization: this._userToken
            },
            }
        )
        .then( res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    } 
}