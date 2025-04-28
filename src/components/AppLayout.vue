<script setup>
import { computed } from 'vue';
import { Back } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router';
import { ROUTES_PATHS } from '@/constants';

const router = useRouter();
const route = useRoute();
const isRandomPage = computed(() => route.name === ROUTES_PATHS.COCKTAIL_RANDOM);

const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
  },
  backFunc: {
    type: Function,
  },
  isShowBack: {
    type: Boolean,
    default: true
  }
});

const backHandler = props.backFunc || (() => router.back());

function goRandomCocktail() {
  if(isRandomPage.value) {
    router.go(0);
    return;
  }
  router.push(ROUTES_PATHS.COCKTAIL_RANDOM)
}
</script>

<template>
  <div class="root">
    <div :style="`background-image: url( ${imgUrl} )`" class="img"></div>
    <div class="main">
      <div class="btns">
        <el-button type="primary" :icon="Back" circle class="back" @click="backHandler" v-if="isShowBack"/>
        <el-button class="btn" @click="goRandomCocktail">Get Random Cocktail</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@use '@/assets/styles/variables' as *
@use "sass:color";

.root
  display: flex
  min-height: 100vh
  background-color: $background

.img
  width: 50%
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover

.main
  position: relative
  width: 50%
  padding: 32px 40px

.btns
  display: flex
  justify-content: space-between
  align-items: center

.btn
  position: absolute
  top: 32px
  right: 40px
  font-size: 16px
  font-family: 'Raleway', 'Arial', sans-serif
  background-color: $accent
  border-color: $accent
  color: $text

  &:hover,
  &:active
    background-color: color.adjust($accent, $lightness: -10%);
    border-color: color.adjust($accent, $lightness: -10%);

.back
  background-color: transparent
  border-color: #fff

  &:hover
    border-color: $accent
</style>
