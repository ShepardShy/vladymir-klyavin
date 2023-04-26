<template>
    <div class="cart">
        <div class="container">
            <div class="cart__header">
                <AppH1>
                    Маркет
                </AppH1>
                <div class="cart__actions">
                    <AppLinkButton 
                        class="cart__button button_light" 
                        :link="{
                            title: 'В каталог',
                            src: '/market'
                        }"
                     />
                    <NuxtLink to="/market/checkout">
                        <figure class='ibg cart__basket'>
                            <img src='/market/icons/cart.svg' alt='Корзина с товарами'>
                            <figcaption>
                                {{ productsStore.checkout.length }}
                            </figcaption>
                        </figure>
                    </NuxtLink>
                </div>
            </div>
            <CartItem />
        </div>
    </div>
</template>

<script setup>
    import './CartComponents.scss';
    
    import AppH1 from '~~/components/AppH1/AppH1.vue';
    import CartItem from './CartItem/CartItem.vue';
    import AppLinkButton from '~~/components/AppLinkButton/AppLinkButton.vue';

    import { useProductsStore } from '@/stores/productsStore.js'
    const productsStore = useProductsStore()
</script>


