<template>
  <section class="categories container">
    <h2 class="title">Categories</h2>
    <ul class="categories__category">
      <li v-for="item in list" :key="item.id">
        <button
          @click="item.isActive = !item.isActive"
          :class="{ active: item.isActive }"
        >
          {{ item.name }}
        </button>
      </li>
    </ul>
    <div class="categories__items">
      <card 
        v-for="item in paginatedData"
        :key="item.id"
        :item="item"
      />
    </div>
    <div class="pagination--btns">
      <button @click.prevent="prevPage">prev</button>
      <button @click.prevent="nextPage">next</button>
    </div>
  </section>
</template>

<script>
import Card from "./Card.vue";
import { ref, computed, onMounted } from "vue";
import { mapState } from "pinia";
import { useProductsStore } from "../stores/products";

export default {
  components: { Card },

  setup() {
    const list = [
      { id: 1, name: "smartphones", isActive: false },
      { id: 2, name: "laptops", isActive: false },
      { id: 3, name: "fragrances", isActive: false },
      { id: 4, name: "skincare", isActive: false },
      { id: 5, name: "groceries", isActive: false },
      { id: 6, name: "home-decoration", isActive: false },
    ];
    
    const store = useProductsStore();
    store.getProducts();
    
    const itemsPerPage = ref(9)
    const currentPage = ref(1)

    const totalPages = computed(() => Math.ceil(store.products.length / itemsPerPage.value))
    const paginatedData = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage.value
      const endIndex = startIndex + itemsPerPage.value
      return store.products.slice(startIndex, endIndex)
    })
    
    function prevPage() {
      if(currentPage.value > 1) {
        currentPage.value--
        console.log(currentPage.value);
      }
    }
    function nextPage() {
      if(currentPage.value < totalPages.value) {
        currentPage.value++
        console.log(currentPage.value);
      }
    }

    return {
      list,
      store,
      paginatedData,
      prevPage,
      nextPage,
    };
  },
};
</script>
