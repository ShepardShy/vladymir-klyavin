<template>
    <div class="order__information">
        <div class="order__column">
            <OrderDetails />
        </div>

        <div class="order__column">
            <OrderCart />
            <OrderDelivery />
            <OrderConfidence />
            <AppButton class="button_orange">
                Оформить заказ
            </AppButton>
        </div>
    </div>
</template>

<script setup>
    import './OrderInformation.scss';

    import OrderDetails from '../OrderDetails/OrderDetails.vue'
    import OrderCart from '../OrderCart/OrderCart.vue'
    import OrderDelivery from '../OrderDelivery/OrderDelivery.vue'
    import OrderConfidence from '../OrderConfidence/OrderConfidence.vue'
    import AppButton from '~~/components/AppButton/AppButton.vue'
</script>
