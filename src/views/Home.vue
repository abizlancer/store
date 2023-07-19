<template>
  <app-header />
  <categories />
</template>

<script>
import AppHeader from '../components/Header.vue';
import Categories from '../components/Categories.vue';

export default {
  components: { AppHeader, Categories }
}
</script>