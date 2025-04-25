<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String
  },
  type: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <div :class="type">{{ props.text }}</div>
</template>

<style lang="sass" scoped>
.error
  color: red

</style>
