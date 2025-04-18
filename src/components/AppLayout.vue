<script setup>
  const props = defineProps({
    imgUrl: {
      type: String,
      required: true,
    }
  });

</script>

<template>
  <div class="root">
    <div :style="`background-image: url( ${imgUrl} )`" class="img"></div>
    <div class="main">
      <el-button class="btn">Get Random Cocktail</el-button>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@use '@/assets/styles/variables' as *
@use "sass:color";

.root
  display: flex
  height: 100vh
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
</style>
