<template>
  <div class="card">
    <div class="card--top">
      <img :src="item.thumbnail" alt="card">
      <div class="card--top__btns">
        <button class="card-btn btn-cart">
          <fa icon="fa-solid fa-cart-shopping" />
        </button>
        <button class="card-btn btn-like">
          <fa icon="fa-regular fa-heart" />
        </button>
      </div>
      <div class="card--top__discount">
        <span>{{ discount }}% off</span>
      </div>
    </div>
    <div class="card--info">
      <h4>{{ item.title }}</h4>
      <div class="card--info__price">
        <span>${{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['item'],
  setup(props) {
    const discount = computed(() => Math.floor(props.item.discountPercentage))
    
    return {
      discount
    }
  }
}
</script>