<template>
    <div class="checkout">
        <div class="container">
            <div class="checkout__header">
                <AppH1>
                    Корзина
                </AppH1>
                <div class="checkout__actions">
                    <AppLinkButton 
                        class="checkout__button button_light" 
                        :link="{
                            title: 'В каталог',
                            src: '/market'
                        }"
                     />
                    <NuxtLink to="/market/checkout">
                        <figure class='ibg checkout__basket'>
                            <img src='/market/icons/cart.svg' alt='Корзина с товарами'>
                            <figcaption>
                                {{ productsStore.checkout.length }}
                            </figcaption>
                        </figure>
                    </NuxtLink>
                </div>
            </div>
            <CheckoutList />
            <CheckoutFooter />
        </div>
    </div>
</template>

<script setup>
    import './checkoutComponents.scss';
    
    import AppH1 from '~~/components/AppH1/AppH1.vue';
    import CheckoutList from './CheckoutList/CheckoutList.vue';
    import AppLinkButton from '~~/components/AppLinkButton/AppLinkButton.vue';
    import CheckoutFooter from './CheckoutFooter/CheckoutFooter.vue'

    import { useProductsStore } from '@/stores/productsStore.js'
    const productsStore = useProductsStore()
</script>


