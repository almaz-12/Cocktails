<script setup>
import AppLayout from '../components/AppLayout.vue';
import { ref } from 'vue';

const bg = ref('./src/assets/img/bg-1.jpg');
</script>

<template>
  <AppLayout :imgUrl="bg"/>
</template>

<style lang="sass" scoped></style>
