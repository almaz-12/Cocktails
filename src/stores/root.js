import { defineStore } from 'pinia'
import axios from 'axios'
import { INGREDIENTS_URL, COCKTAILS_BY_INGR_URL } from '@/constants'

export const useRootStore = defineStore('root', {
  state: () => ({
     ingredients: [],
     cocktails: [],
     ingredient: null,
  }),
  actions: {
    async getIngredients() {
      try {
        const { data } = await axios.get(INGREDIENTS_URL);
        console.log(data);
        this.ingredients = data?.drinks;
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      }
    },
    async getCocktails(ingredient) {
      try {
        const { data } = await axios.get(`${COCKTAILS_BY_INGR_URL}${ingredient}`);

        this.cocktails = data?.drinks;
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      }
    },
    setIngredient(val) {
      this.ingredient = val;
    }
  },
})
