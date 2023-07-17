<template>
  <section class="categories">
    <div class="categories__content container">
      <h2 class="title">Categories</h2>
      <ul class="categories__category">
        <li><a href="#!">smartphones</a></li>
        <li><a href="#!">laptops</a></li>
        <li><a href="#!">fragrances</a></li>
        <li><a href="#!">skincare</a></li>
        <li><a href="#!">groceries</a></li>
        <li><a href="#!">home-decoration</a></li>
      </ul>
      <div class="categories__items">
        <item />
      </div>
    </div>
  </section>
</template>

<script>
import Item from './Item.vue';
export default {
  components: { Item }
}
</script>