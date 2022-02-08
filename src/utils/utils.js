import Section from '../components/Section.js';
import { 
    initialCards, 
    cardTemplateSelector 
} from './constants.js';
import Card from '../components/Сard.js';
import PopupWithImage from '../components/PopupWithImage.js';

const initialCard = new Section( {
    items: initialCards,
    renderer: (newCard) => {
      const card = new Card(newCard, cardTemplateSelector, () => {
        const cardImagePopup = new PopupWithImage('#card-popup');
        cardImagePopup.open(newCard);
      });
      const cardElement = card.generateCard();
      initialCard.addItem(cardElement);
    }
  } , '.elements__gallery');

  export default initialCard;