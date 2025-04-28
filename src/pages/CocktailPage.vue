<script setup>
import AppLayout from '../components/AppLayout.vue';
import BaseLoader from '../components/BaseLoader.vue';
import BaseAlert from '../components/BaseAlert.vue';
import { useRouter } from 'vue-router';
import { ref, defineProps, onMounted, computed } from 'vue';
import { COCKTAIL_BY_ID_URL } from '@/constants'
import { get } from '@/api'

const router = useRouter();

// через props компонент менее зависим от route
const props = defineProps({
  rid: {
    type: String,
    required: true
  }
});

const cocktail = ref(null);
const isLoading = ref(false)
const error = ref(null)

const ingredients = computed(() => {
  if (!cocktail.value) return []

  const ingredients = Array.from({ length: 15 }).reduce((acc, _, i) => {
    const index = i + 1;
    const name = cocktail.value[`strIngredient${index}`];

    if (!name) return acc;

    acc.push({
      name,
      measure: cocktail.value[`strMeasure${index}`],
    });

    return acc;
  }, []);

  return ingredients;
})

async function fetchCocktail(rid) {
  try {
    isLoading.value = true
    error.value = null
    const data = await get(`${COCKTAIL_BY_ID_URL}${rid}`);

    cocktail.value = data?.drinks?.[0];
  } catch (err) {
    error.value = err.message || "Ошибка загрузки коктеля"
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchCocktail(props.rid)
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
          <div class="list" v-if="ingredients.length">
            <div v-for="(item, key) in ingredients" :key="key" class="list-item">
              {{ item.name }}
              <template v-if="item.measure">| {{ item.measure }}</template>
            </div>
          </div>
          <div class="instructions">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

