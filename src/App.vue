<template>
  <navbar />
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue';
// import Header from './components/Header.vue';
export default {
  components: { Navbar }
}
</script>