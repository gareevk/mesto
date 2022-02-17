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
        this._userName.textContent = user.name;
        this._userInfo.textContent = user.about;
    }
}