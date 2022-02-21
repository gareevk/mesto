export default class UserInfo {
    constructor( userName, userInfo, userAvatar ) {
        this._userName = document.querySelector(userName);
        this._userInfo = document.querySelector(userInfo);
        this._userAvatar = document.querySelector(userAvatar);
    }

    getUserInfo() {
        const userProfile = {
            name: this._userName.textContent,
            info: this._userInfo.textContent,
            avatar: this._userAvatar.src
        }
        return userProfile;
    }

    setUserInfo(user) {
        this._userName.textContent = user.name;
        this._userInfo.textContent = user.about;
    }

    setUserAvatar(user) {
        this._userAvatar.src = user.avatar;
    }
}