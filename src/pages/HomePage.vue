<script setup>
import AppLayout from '../components/AppLayout.vue';
import { ref } from 'vue';
import { useRootStore } from '@/stores/root';
import { storeToRefs } from 'pinia';

const rootStore = useRootStore();

rootStore.getIngredients();

const { ingredients } = storeToRefs(rootStore);
console.log(ingredients);

const bg = ref('./src/assets/img/bg-1.jpg');
</script>

<template>
  <AppLayout :imgUrl="bg">
    <div class="wrapper">
      <div class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="sass" scoped>
.wrapper
  display: flex
  justify-content: center
  align-items: center

.info
  padding: 80px 0
  text-align: center
</style>
