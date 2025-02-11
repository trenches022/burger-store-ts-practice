import { useState } from "react";
import { useCustomBurgerStore } from "../store/customBurgerStore";
import './Custom.css';

const availableIngredients = [
  { id: 1, name: "Ser", price: 2 },
  { id: 2, name: "Bekon", price: 3 },
  { id: 3, name: "Sałata", price: 1 },
  { id: 4, name: "Pomidor", price: 1.5 },
  { id: 5, name: "Cebula", price: 1 },
  { id: 6, name: "Serowy dip", price: 3 },
  { id: 7, name: "Wołowina medium rare", price: 15 },
];


const promocodes = [
  {
    id: 1,
    promo: 'Magic15',
    value: 15,
    minOrder: 40,
  },
  {
    id: 2,
    promo: 'SuperPromocode',
    value: 30,
    minOrder: 60,
  },
  {
    id: 3,
    promo: 'MagicPromo',
    value: 20,
    minOrder: 50,
  },
]

const Custom = () => {
  const { ingredients, totalPrice, addIngredient, removeIngredient, resetBurger } =
    useCustomBurgerStore();

    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [promoMessage, setPromoMessage] = useState('');

    const applyPromoCode = () => {
      const foundPromo = promocodes.find((p) => p.promo.toLowerCase() === promoCode.toLowerCase());
      
      if (!foundPromo) {
        setPromoMessage("Nieprawidłowy kod promocyjny!");
        setDiscount(0);
        return;
      }

      if (totalPrice >= foundPromo.minOrder) {
        setDiscount(foundPromo.value)
        setPromoMessage(`Zastosowano kod! Rabat: ${foundPromo.value} zł`)
      }
      else{
        setPromoMessage(`Minimalna wartość zamówienia: ${foundPromo.minOrder} zł`);
        setDiscount(0);
      }
    };

    const handlePromoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPromoCode(e.target.value)
    }


  return (
    <div className="custom-burger">
      <h1>Stwórz własnego burgera</h1>
      
      <div className="ingredients">
        <h2>Dostępne składniki:</h2>
        {availableIngredients.map((ingredient) => (
          <button key={ingredient.id} onClick={() => addIngredient(ingredient)}>
            {ingredient.name} (+{ingredient.price} zł)
          </button>
        ))}
      </div>

      <div className="selected-ingredients">
        <h2>Twój burger:</h2>
        {ingredients.length > 0 ? (
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.name} - {ingredient.price} zł
                <button onClick={() => removeIngredient(ingredient.id)}>❌</button>
              </li>
            ))}
            <input 
            type="text"  
            placeholder="Wpisz kod promocyjny" 
            className="promo-input"
            value={promoCode}
            onChange={handlePromoChange}
            />
            <button className="promo-btn" onClick={applyPromoCode}>Zastosuj</button>
            {promoMessage && <p className="promo-message">{promoMessage}</p>}
          </ul>
        ) : (
          <p>Nie dodano składników</p>
        )}
        <h3>Łączna cena: {totalPrice - discount} zł</h3>
        <button onClick={resetBurger}>Resetuj</button>
      </div>
    </div>
  );
};

export default Custom;
