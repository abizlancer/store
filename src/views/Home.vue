<template>
  <app-header />
  <categories />
  <more />
</template>

<script>
import AppHeader from '../components/Header.vue';
import Categories from '../components/Categories.vue';
import More from '../components/More.vue';

export default {
  components: { AppHeader, Categories, More }
}
</script>