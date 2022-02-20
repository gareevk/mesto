export default class Api {
    constructor( baseUrl, methodType, headersConfig, bodyConfig, requestHandler, saveButton ) {
        this._url = baseUrl;
        this._method = methodType;
        this._headers = headersConfig;
        this._body = bodyConfig;
        this._requestHandler = requestHandler;
        this._saveButton = saveButton;

    }

    _handleLoadingRenedering(isLoading) {
        if (isLoading) {
            this._saveButton.classList.add('popup__save-button_loading');
          } else {
            this._saveButton.classList.remove('popup__save-button_loading');
          }
    }

    likeCard() {
        fetch(
            this._url,
            {
                method: this._method,
                headers: this._headers
            } 
        )
        .then( res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then( (res) => {
            this._requestHandler(res.likes.length);
        } )
        .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) );
    }

    getCardStatus() {
        fetch(
            this._url,
            {
                method: this._method,
                headers: this._headers
            } 
        )
        .then( res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then( (profileInfo) => {
            this._requestHandler(profileInfo);
        })
        .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) );
    }
    

    deleteCard() {
        fetch(
            this._url,
            {
                method: this._method,
                headers: this._headers
            } 
        )
        .then( res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then( (profileInfo) => {
            this._requestHandler(profileInfo);
        })
        .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) );
    }

    setProfileInfo() {
        this._handleLoadingRenedering(true);
        fetch(
            this._url,
            {
                method: this._method,
                headers: this._headers,
                body: this._body
            } 
        )
        .then( res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then( (profileInfo) => {
            this._requestHandler(profileInfo);
        })
        .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) )
        .finally( () => this._handleLoadingRenedering(false));
    }

    addCard() {
        this._handleLoadingRenedering(true);
        fetch(
            this._url,
            {
                method: this._method,
                headers: this._headers,
                body: this._body
            }
        )
        .then( res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then( (card) => {
            this._requestHandler(card);
        })
        .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) )
        .finally( () => this._handleLoadingRenedering(false));
    }

    setAvatar() {
        this._handleLoadingRenedering(true);
        fetch(
            this._url,
        {
            method: this._method,
            headers: this._headers,
            body: this._body
        }
        )
        .then( res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then( (avatar) => {
            this._requestHandler(avatar);
        })
        .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) )
        .finally( () => this._handleLoadingRenedering(false));
    }

    getInitialCards() {
        fetch(
            this._url, 
            {
                headers: this._headers
            })
        .then( res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then( (cards) => {
            this._requestHandler(cards); 
         } )
        .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) );
    }

    getUserInfo() {
        fetch(
            this._url,
            {
            method: this._method,
            headers: this._headers
            }
        )
        .then( res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then( (user) => {
            this._requestHandler(user);
        })
        .catch( (err) => console.log('Ошибка, загрузка не удалась: '+ err) );
    }

    sendRequest() {
        fetch(this._url, {
            method: this._method,
            headers: this._headers,
            body: this._body
        })
        .then( res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then( res => this._requestHandler(res))
        .catch( err => console.log('Ошибка: ' + err));

    }
}