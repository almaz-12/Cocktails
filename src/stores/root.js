import { defineStore } from 'pinia'
import axios from 'axios'
import { INGREDIENTS_URL } from '@/constants'

// export const useRootStore = defineStore('root', () => {
//   const ingredients = ref([]);

//   const totalIngredients = computed(() => ingredients.value.length);

//   const getIngredients = async () => {
//     try {
//       const { data } = await axios.get(INGREDIENTS_URL);
//       console.log(data);
//       ingredients.value = data.drinks;
//     } catch (error) {
//       console.error("Ошибка загрузки:", error);
//     }
//   }

//   const addIngredient = (ingredient) => {
//     ingredients.value.push(ingredient);
//   };

//   const removeIngredient = (index) => {
//     ingredients.value.splice(index, 1);
//   };

//   const clearIngredients = () => {
//     ingredients.value = [];
//   };

//   return {
//     ingredients,
//     totalIngredients,
//     getIngredients,
//     addIngredient,
//     removeIngredient,
//     clearIngredients
//   }
// })

export const useRootStore = defineStore('root', {
  state: () => ({ ingredients: []}),
  actions: {    
    async getIngredients() {
      try {
        const { data } = await axios.get(INGREDIENTS_URL);
        console.log(data);
        this.ingredients = data?.drinks;
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      }
    }
  },
})
