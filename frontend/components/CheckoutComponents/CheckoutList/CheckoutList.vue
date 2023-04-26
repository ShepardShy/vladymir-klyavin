<template>
    <div class="checkout__list">
        <checkoutItem 
            v-for="product in productsStore.checkout"
            :product="product"
        />
    </div>
</template>

<script setup>
    import './CheckoutList.scss';

    import checkoutItem from '../CheckoutItem/CheckoutItem.vue';
    
    import { useProductsStore } from '@/stores/productsStore.js'
    const productsStore = useProductsStore()
    
    onMounted(() => {
        console.log(productsStore.checkout);
    })
</script>
