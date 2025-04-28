<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import AppLayout from '../components/AppLayout.vue';
import BaseLoader from '../components/BaseLoader.vue';
import BaseAlert from '../components/BaseAlert.vue';
import { useRouter } from 'vue-router';
import { ref, onMounted, computed } from 'vue';
import { COCKTAIL_RANDOM_URL, INGREDIENT_PIC } from '@/constants'
import { get } from '@/api'

const router = useRouter();

const cocktail = ref(null);
const isLoading = ref(false)
const error = ref(null)

const ingredients = computed(() => {
  if (!cocktail.value) return [];

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail.value[`strIngredient${i}`];
    if (ingredient) ingredients.push(ingredient);
  }
  return ingredients;
})

const getIngredientPic = (pic) => {
  return `${INGREDIENT_PIC}${pic}-Small.png`;
}

async function fetchCocktail() {
  try {
    isLoading.value = true
    error.value = null
    const data = await get(`${COCKTAIL_RANDOM_URL}`);

    cocktail.value = data?.drinks?.[0];
  } catch (err) {
    error.value = err.message || "Ошибка загрузки коктеля"
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchCocktail()
})
</script>

<template>
  <BaseLoader v-if="isLoading"/>
  <BaseAlert v-else-if="error" :text="error" type="error"/>
  <div class="wrap" v-if="cocktail">
    <AppLayout :imgUrl="cocktail.strDrinkThumb">
      <div class="wrapper" >
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="images">
            <swiper
              :slides-per-view="3"
              :space-between="50"
              v-if="ingredients.length > 0"
            >
              <swiper-slide v-for="(item, key) in ingredients" :key="key">
                <img :src="getIngredientPic(item)" :alt="item">
                <p>{{ item }}</p>
              </swiper-slide>
            </swiper>
          </div>
          <div class="instructions">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="sass" scoped>
.images
  max-width: 586px
  margin: 50px auto
</style>
<!-- 'images/ingredients/' -->
