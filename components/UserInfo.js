export default class UserInfo {
    constructor( userName, userInfo ) {
        this._userName = document.querySelector(userName);
        this._userInfo = document.querySelector(userInfo);
    }

    getUserInfo() {
        const userProfile = {
            name: this._userName.textContent,
            info: this._userInfo.textContent
        }
        return userProfile;
    }

    setUserInfo(user) {
        this._userName.textContent = user[0];
        this._userInfo.textContent = user[1];
    }
}

/*
Создайте класс UserInfo
Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
*/