<template>
    <div class="market__list">
        <MarketListProduct 
            v-for="product in productsStore.products" 
            :product="product"
        />
    </div>
</template>

<script setup>
    import './MarketList.scss';

    import MarketListProduct from './MarketListProduct/MarketListProduct.vue'

    import { useProductsStore } from '~~/stores/productsStore';
    const productsStore = useProductsStore()
</script>