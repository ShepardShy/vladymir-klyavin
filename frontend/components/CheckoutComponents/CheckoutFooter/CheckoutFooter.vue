<template>
    <div class="checkout__footer">
        <div class="checkout__total">
            <div class="checkout__value">
                Итого: 10000 ₽
            </div>

            <AppLinkButton
                class="button_light"
                :link="{
                    title: 'Оформление заказа',
                    src: '/market/making-order'
                }"
            />
        </div>
    </div>
</template>

<script setup>
    import './CheckoutFooter.scss';
    
    import AppLinkButton from '~~/components/AppLinkButton/AppLinkButton.vue';
</script>
