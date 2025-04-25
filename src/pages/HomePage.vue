<script setup>
import AppLayout from '../components/AppLayout.vue';
import { ref } from 'vue';
import { useRootStore } from '@/stores/root';
import { storeToRefs } from 'pinia';
import CocktailItem from '../components/CocktailItem.vue'

const bg = ref('./src/assets/img/bg-1.jpg');

const rootStore = useRootStore();
rootStore.getIngredients();

const { ingredients, cocktails, ingredient } = storeToRefs(rootStore); //подробнее про storeToRefs

function getCocktails() {
  rootStore.getCocktails(ingredient.value);
}

function removeIngredient() {
  rootStore.setIngredient(null)
}
</script>

<template>
  <AppLayout :imgUrl="bg" :backFunc="removeIngredient" :isShowBack="!!ingredient">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrapper"></div>
        <el-select
          v-model="ingredient"
          placeholder="Choose main ingredient"
          size="large"
          filterable
          class="select"
          @change="getCocktails"
        >
          <el-option
            v-for="item in ingredients"
            :key="item.strIngredient1"
            :label="item.strIngredient1"
            :value="item.strIngredient1"
          />
        </el-select>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img src="/src/assets/img/cocktails.png" alt="cocktails">
      </div>
      <div v-else class="info">
        <div class="title">COCKTAILS WITH {{ ingredient }} </div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailItem v-for="{idDrink, strDrink, strDrinkThumb } in cocktails"
          :key="idDrink"
          :id="idDrink"
          :imgUrl="strDrinkThumb"
          :title="strDrink"
          />
        </div>

      </div>
    </div>
  </AppLayout>
</template>

<style lang="sass" scoped>

.select-wrapper
  padding-top:50px

.select
  width: 220px

.text
  max-width: 510px
  margin: 0 auto 60px
  padding-top: 50px
  line-height: 36px
  letter-spacing: 0.1em
  color: $textMuted

.cocktails
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  gap: 20px
  margin-top: 60px
  overflow-y: scroll
  max-height: 50vh
</style>
