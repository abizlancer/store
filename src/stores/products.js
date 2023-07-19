import { defineStore } from "pinia";

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: []
  }),
  getters: {},
  actions: {
    async getProducts() {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
    
      this.products = data.products
    }
  }
})