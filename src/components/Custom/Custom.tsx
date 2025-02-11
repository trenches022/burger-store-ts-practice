import { useCustomBurgerStore } from "../store/customBurgerStore";
import './Custom.css';

const availableIngredients = [
  { id: 1, name: "Ser", price: 2 },
  { id: 2, name: "Bekon", price: 3 },
  { id: 3, name: "Sałata", price: 1 },
  { id: 4, name: "Pomidor", price: 1.5 },
  { id: 5, name: "Cebula", price: 1 },
  { id: 6, name: "Serowy dip", price: 3 },
];

const Custom = () => {
  const { ingredients, totalPrice, addIngredient, removeIngredient, resetBurger } =
    useCustomBurgerStore();

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
          </ul>
        ) : (
          <p>Nie dodano składników</p>
        )}
        <h3>Łączna cena: {totalPrice} zł</h3>
        <button onClick={resetBurger}>Resetuj</button>
      </div>
    </div>
  );
};

export default Custom;
