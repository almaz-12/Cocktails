<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="cocktail-item">
    <RouterLink :to="`/cocktails/${id}`">
      <img :src="imgUrl" :alt="title" class="cocktail-item-img">
      <div class="cocktail-item-title">{{ title }}</div>
    </RouterLink>
  </div>
</template>


<style scoped lang="sass">
.cocktail-item
  a
    text-decoration: none

.cocktail-item-img
  width: 120px

.cocktail-item-title
  padding-top: 15px
  font-size: 16px
</style>
