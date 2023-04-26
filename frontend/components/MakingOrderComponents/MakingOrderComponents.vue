<template>
    <div class="order">
        <div class="container">
            <div class="order__header">
                <AppH1>
                    Оформление заказа
                </AppH1>
            </div>
            <OrderInformation />
        </div>
    </div>
</template>

<script setup>
    import './MakingOrderComponents.scss';
    
    import AppH1 from '~~/components/AppH1/AppH1.vue'
    import OrderInformation from '~~/components/MakingOrderComponents/OrderInformation/OrderInformation.vue'
</script>