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
    </div>
  </div>
</template>

<style lang="sass" scoped>
@use '@/assets/styles/variables' as *

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
  width: 50%
</style>
