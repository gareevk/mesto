(()=>{"use strict";var e={207:e=>{e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._card=e,this._cardId=e._id,this._cardOwner=e.owner._id,this._name=e.name,this._image=e.link,this._template=n,this._handleCardClick=r,this._likes=e.likes,this._isLiked=!1,this._cardId=e._id,this._deleteCard=o,this._handleLikeClick=i,this._userId=a}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".elements__item").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".elements__item-name").textContent=this._name,this._element.querySelector(".elements__item-image").src=this._image,this._element.querySelector(".elements__item-image").alt="Карточка с изображением места - ".concat(this._name),this._element.querySelector(".elements__like-counter").textContent=this._likes.length,this._likes.forEach((function(t){t._id===e._userId&&(e._like(),e._isLiked=!e._isLiked)})),this._cardOwner!==this._userId?this._element.querySelector(".elements__thrash-can").remove():this._element.querySelector(".elements__thrash-can").addEventListener("click",(function(){e._deleteCardHandler()})),this._element}},{key:"_deleteCardHandler",value:function(){this._deleteCard()}},{key:"removeCardElement",value:function(){this._element.remove()}},{key:"getCardInfo",value:function(){return{isLiked:this._isLiked,cardId:this._cardId,element:this._element,likesCount:this._likes.length}}},{key:"_like",value:function(){this._element.querySelector(".elements__item-like").classList.toggle("elements__item-like_active")}},{key:"_likeHandler",value:function(){this._isLiked=!this._isLiked,this._like(),this._handleLikeClick()}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".elements__item-image").addEventListener("click",(function(){e._handleCardClick()})),this._element.querySelector(".elements__item-like").addEventListener("click",(function(){e._likeHandler()}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(t),this._userInfo=document.querySelector(n),this._userAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,info:this._userInfo.textContent,avatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userInfo.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e.avatar}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n(207);var l=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._popupCloseButton=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleFocusLost",value:function(e){e.target.classList.contains("popup")&&this.close(e)}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseButton.addEventListener("click",(function(t){e.close(t)})),this._popup.addEventListener("click",(function(t){e._handleFocusLost(t)}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t,n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=function(){t._popupSubmitHandler(),t._removeEventListeners()},(r="_handleSubmit")in(n=y(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._confirmButton=t._popup.querySelector("#delete-card-button"),t}return t=a,(n=[{key:"setEventListeners",value:function(e){p(_(a.prototype),"setEventListeners",this).call(this),this._popupSubmitHandler=e,this._confirmButton.addEventListener("click",this._handleSubmit)}},{key:"_removeEventListeners",value:function(){this._confirmButton.removeEventListener("click",this._handleSubmit)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userToken=t.userToken,this._baseUrl="https://mesto.nomoreparties.co/v1/cohort36/",this._profileInfoLoading=document.querySelector("#profile-loading-placeholder"),this._profileAvatarLoading=document.querySelector("#avatar-loading-placeholder"),this._addCardLoading=document.querySelector("#add-card-loading-placeholder")}var t,n;return t=e,(n=[{key:"handleLoadingRenedering",value:function(e,t){e?t.classList.add(".popup__loading-placeholder_visible"):t.classList.remove(".popup__loading-placeholder_visible")}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"cards/".concat(e),{method:"DELETE",headers:{authorization:this._userToken,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"likeCard",value:function(e,t){return e?fetch(this._baseUrl+"cards/".concat(t,"/likes"),{method:"PUT",headers:{authorization:this._userToken,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})):fetch(this._baseUrl+"cards/".concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._userToken,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setProfileInfo",value:function(e,t){return this.handleLoadingRenedering(!0,this._profileInfoLoading),fetch(this._baseUrl+"users/me",{method:"PATCH",headers:{authorization:this._userToken,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"cards",{method:"GET",headers:{authorization:this._userToken}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addCard",value:function(e){return this.handleLoadingRenedering(!0,this._addCardLoading),fetch(this._baseUrl+"cards",{method:"POST",headers:{authorization:this._userToken,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"setAvatar",value:function(e){return this.handleLoadingRenedering(!0,this._profileAvatarLoading),fetch(this._baseUrl+"users/me/avatar",{method:"PATCH",headers:{authorization:this._userToken,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})})}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"users/me",{method:"GET",headers:{authorization:this._userToken}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationConfig=t,this._saveButton=t.saveButton,this._saveButtonDisabled=t.saveButtonDisabled,this._errorInput=t.errorInput,this._errorActive=t.errorActive,this._popupInput=t.popupInput,this._popup=t.popup,this._validationElement=n,this._inputList=Array.from(this._validationElement.querySelectorAll(this._popupInput))}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e){this._hasInvalidInput()?(e.classList.add(this._saveButtonDisabled),e.setAttribute("disabled",!0)):(e.classList.remove(this._saveButtonDisabled),e.removeAttribute("disabled"))}},{key:"_showInputError",value:function(e,t){var n=this._validationElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._errorInput),n.textContent=t,n.classList.add(this._errorActive)}},{key:"_hideInputError",value:function(e){var t=this._validationElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._errorInput),t.classList.remove(this._errorActive),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this,t=this._validationElement.querySelector(this._saveButton);this._toggleButtonState(t),this._inputList.forEach((function(n){n.addEventListener("input",(function(r){e._checkInputValidity(n),e._toggleButtonState(t)}))}))}},{key:"enableValidation",value:function(){this._validationElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),w={saveButton:".popup__save-button",saveButtonDisabled:"popup__save-button_disabled",errorInput:"popup__input_type_error",errorActive:"popup__input-error_active",popupInput:".popup__input",popup:".popup__container"},S=document.querySelector(".popup__card-fullscreen"),E=document.querySelector(".popup__description"),L=document.querySelector("#profile-popup"),j=document.querySelector(".profile__edit"),O=(document.querySelector(".popup__close-button"),L.querySelector("#name-input")),C=L.querySelector("#bio-input"),P=document.querySelector(".profile__name"),q=document.querySelector(".profile__description"),I=document.querySelector(".profile__avatar"),T=L.querySelector(".popup__loading-placeholder"),R=document.querySelector("#add-card-popup"),x=document.querySelector(".profile__add-button"),B=(R.querySelector("#card-popup-close"),R.querySelector("#card-name"),R.querySelector("#card-link"),R.querySelector(".popup__loading-placeholder")),A=document.querySelector(".profile__edit-avatar-button"),U=(document.querySelector("#add-avatar-link"),document.querySelector("#edit-avatar")),D=U.querySelector(".popup__loading-placeholder"),V=new k(w,L),z=new k(w,R),N=new k(w,U);function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=G(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function G(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}function M(e,t){return M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},M(e,t)}function K(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(r);if(o){var n=Q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return K(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._cardImage=S,t._cardName=E,t}return t=a,(n=[{key:"open",value:function(e){console.log(this._cardImage),this._cardImage.src=e.link,this._cardName.textContent=e.name,this._cardImage.alt=e.name,F(Q(a.prototype),"open",this).call(this)}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function X(e){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(e)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(){return Z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=$(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},Z.apply(this,arguments)}function $(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ne(e)););return e}function ee(e,t){return ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ee(e,t)}function te(e,t){if(t&&("object"===X(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ne(e){return ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ne(e)}var re,oe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ee(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ne(r);if(o){var n=ne(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return te(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formSubmit=t,n._form=n._popup.querySelector(".popup__container"),n._inputList=n._popup.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"_handleSubmit",value:function(){this._formSubmit(this._getInputValues())}},{key:"setEventListeners",value:function(){var e=this;Z(ne(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._handleSubmit()}))}},{key:"close",value:function(){Z(ne(a.prototype),"close",this).call(this),this._form.reset()}}])&&Y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l),ie=new W("#card-popup"),ae=new b({userToken:"29b7c506-9f8b-4a60-9054-462b94d7dbca"}),ue=new o({renderer:function(e){!function(e,n,r){var o=new t(e,"#elements__item-template",(function(){ie.open(e)}),(function(){ce.setEventListeners((function(){ae.deleteCard(o._cardId).then((function(e){o.removeCardElement(),ce.close()})).catch((function(e){return console.log("Ошибка, загрузка карточки не удалась: "+e)}))})),ce.open()}),(function(){var e=o.getCardInfo();console.log(e),ae.likeCard(e.isLiked,e.cardId).then((function(t){e.element.querySelector(".elements__like-counter").textContent=t.likes.length})).catch((function(e){return console.log("Ошибка, загрузка лайков не удалась: "+e)}))}),re),i=o.generateCard();n.addItem(i)}(e,ue)}},".elements__gallery"),le=new oe("#add-card-popup",(function(e){ae.addCard(e).then((function(e){var t=[e];ue.renderItems(t),le.close()})).catch((function(e){return console.log("Ошибка, загрузка чего-то не удалась: "+e)})).finally((function(){return ae.handleLoadingRenedering(!1,B)}))})),ce=new m("#delete-card-popup"),se=new a(".profile__name",".profile__description",".profile__avatar"),pe=new oe("#profile-popup",(function(e){ae.setProfileInfo(se.getUserInfo().name,se.getUserInfo().info).then((function(t){se.setUserInfo(e),O.value=t.name,C.value=t.about,pe.close()})).catch((function(e){return console.log("Ошибка, загрузка профиля не удалась: "+e)})).finally((function(){ae.handleLoadingRenedering(!1,T)}))})),fe=new oe("#edit-avatar",(function(e){ae.setAvatar(e.link).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){I.src=e.avatar,fe.close()})).catch((function(e){return console.log("Ошибка, загрузка аватара не удалась: "+e)})).finally((function(){return ae.handleLoadingRenedering(!1,D)}))}));x.addEventListener("click",(function(){le.open()})),j.addEventListener("click",(function(){pe.open()})),A.addEventListener("click",(function(){fe.open()})),z.enableValidation(),N.enableValidation(),V.enableValidation(),pe.setEventListeners(),le.setEventListeners(),ie.setEventListeners(),fe.setEventListeners(),Promise.all(void ae.getUserInfo().then((function(e){re=e._id,se.setUserInfo(e),se.setUserAvatar(e),O.value=P.textContent,C.value=q.textContent})).catch((function(e){return console.log("Ошибка, загрузка юзер инфо не удалась: "+e)})),void ae.getInitialCards().then((function(e){ue.renderItems(e)})).catch((function(e){return console.log("Ошибка, загрузка карточек не удалась: "+e)}))).then((function(e){console.log(e)})).catch((function(e){return console.log("Ошибка, загрузка информации не удалась: "+e)}))})()})();