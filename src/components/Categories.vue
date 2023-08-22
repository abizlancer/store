<template>
  <section class="categories container">
    <h2 class="title">Categories</h2>
    <ul class="categories__category">
      <li v-for="item in list" :key="item.id">
        <button
          @click="sortByCategory(item)"
          :class="{ active: item.isActive }"
        >
          {{ item.name }}
        </button>
      </li>
    </ul>
    <div class="sorted__products" v-if="sortedProducts">
      <card
        v-for="item in sortedProducts"
        :key="item.id"
        :item="item"
      />
    </div>
    <div class="pagination__content" v-else>
      <div class="categories__items">
        <card
          v-for="item in paginatedData"
          :key="item.id"
          :item="item"
        />
      </div>
      <div class="pagination--btns">
        <button @click.prevent="prevPage">
          <fa icon="fa-solid fa-chevron-left" />
        </button>
        <button @click.prevent="nextPage">
          <fa icon="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "./Card.vue";
import { ref, reactive, computed, onMounted } from "vue";
import { mapState } from "pinia";
import { useProductsStore } from "../stores/products";

export default {
  components: { Card },

  setup() {
    const list = reactive([
      { id: 1, name: "smartphones", isActive: false },
      { id: 2, name: "laptops", isActive: false },
      { id: 3, name: "fragrances", isActive: false },
      { id: 4, name: "skincare", isActive: false },
      { id: 5, name: "groceries", isActive: false },
      { id: 6, name: "home-decoration", isActive: false },
    ]);
    
    const store = useProductsStore();
    store.getProducts();
    
    const activeCategory = ref('')
    let sortedProducts = ref(null)
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
    function sortByCategory(obj) {
      if (obj.isActive) {
        obj.isActive = false
        sortedProducts.value = ''
        console.log(sortedProducts.value);
      } else {
        list.forEach((item, key) => {
          item.isActive = false
        })
        obj.isActive = true
        activeCategory.value = obj.name
        sortedProducts.value = store.products.filter(item => item.category == obj.name)
        console.log(sortedProducts.value);
      }
     
    }
    
    return {
      list,
      store,
      paginatedData,
      sortedProducts,
      prevPage,
      nextPage,
      sortByCategory
    };
  },
};
</script>
