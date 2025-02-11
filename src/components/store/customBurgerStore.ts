import { create } from "zustand";

type Ingredient = {
  id: number;
  name: string;
  price: number;
};

type CustomBurgerState = {
  ingredients: Ingredient[];
  totalPrice: number;
  addIngredient: (ingredient: Ingredient) => void;
  removeIngredient: (id: number) => void;
  resetBurger: () => void;
};

export const useCustomBurgerStore = create<CustomBurgerState>((set) => ({
  ingredients: [],
  totalPrice: 0,
  addIngredient: (ingredient) =>
    set((state) => ({
      ingredients: [...state.ingredients, ingredient],
      totalPrice: state.totalPrice + ingredient.price,
    })),
  removeIngredient: (id) =>
    set((state) => {
      const updatedIngredients = state.ingredients.filter((i) => i.id !== id);
      const removedIngredient = state.ingredients.find((i) => i.id === id);
      return {
        ingredients: updatedIngredients,
        totalPrice: removedIngredient
          ? state.totalPrice - removedIngredient.price
          : state.totalPrice,
      };
    }),
  resetBurger: () => set({ ingredients: [], totalPrice: 0 }),
}));
