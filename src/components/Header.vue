<template>
  <header class="header container">
    <div class="header__info">
      <h1>Phone 14 Pro Max</h1>
      <a href="#!" class="btn-link">SHOP NOW</a>
    </div>
    <swiper 
      :pagination="pagination" 
      :modules="modules"
      :space-between="50"
      class="header__slides"
    >
      <swiper-slide class="header--slide"><img src="../assets/images/slide1.png" alt=""></swiper-slide>
      <swiper-slide class="header--slide"><img src="../assets/images/slide1.png" alt=""></swiper-slide>
      <swiper-slide class="header--slide"><img src="../assets/images/slide1.png" alt=""></swiper-slide>
    </swiper>
  </header>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
  
export default {
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}"></span>`;
        },
      },
      modules: [Pagination]
    }
  }
}
</script>