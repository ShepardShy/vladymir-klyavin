import { defineStore } from 'pinia'
import products from '../data/products.json'

export const useProductsStore = defineStore('productsStore', {
    state: () => {
        return {
            products,
            checkout: []
        }
    },

    // actions
    actions: {
        // Добавление товара в корзину
        addCart(product) {
            this.checkout.push(product)
        }
    }
})