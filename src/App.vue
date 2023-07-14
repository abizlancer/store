<template>
  <navbar />
  <router-view />
  <app-footer />
</template>

<script>
import Navbar from './components/Navbar.vue';
import AppFooter from './components/Footer.vue';

export default {
  components: { Navbar, AppFooter }
}
</script>