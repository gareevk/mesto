export default class Api {
    constructor( { baseUrl, methodType, headersConfig, bodyConfig }, requestHandler ) {
        this._url = baseUrl;
        this._method = methodType;
        this._headers = headersConfig;
        this._body = bodyConfig;
        this._requestHandler = requestHandler;
    }

    getInitialCards() {
        
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