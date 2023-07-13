<template >
  <nav class="navbar container">
    <router-link :to="{ name: 'home' }" class="navbar--logo">
      <img src="../assets/images/logo.png" alt="logo">
    </router-link>
    <ul class="navbar__list">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link to="#!">Product card</router-link></li>
      <li><router-link to="#!">Payment and delivery</router-link></li>
      <li><router-link to="#!">Contacts</router-link></li>
    </ul>
    <router-link to="#!" class="navbar--cart">
      <span>2</span>
      <fa icon="fa-solid fa-cart-shopping" />
    </router-link>
    
    <div class="burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script>
export default {
  
}
</script>