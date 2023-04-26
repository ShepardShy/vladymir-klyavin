<template>
    <div class="market">
        <div class="container">
            <div class="market__header">
                <AppH1>
                    Маркет
                </AppH1>
                <div class="market__actions">
                    <AppButton class="market__button button_light">
                        Фильтр
                    </AppButton>
                    <NuxtLink to="/market/checkout">
                        <figure class='ibg market__basket'>
                            <img src='/market/icons/cart.svg' alt='Корзина с товарами'>
                            <figcaption>
                                {{ productsStore.checkout.length }}
                            </figcaption>
                        </figure>
                    </NuxtLink>
                </div>
            </div>
            <MarketList />
        </div>
    </div>
</template>

<script setup>
    import './MarketComponents.scss';
    
    import AppH1 from '~~/components/AppH1/AppH1.vue';
    import AppButton from '~~/components/AppButton/AppButton.vue';
    import MarketList from './MarketList/MarketList.vue'

    import { useProductsStore } from '@/stores/productsStore.js'
    const productsStore = useProductsStore()
    
</script>
