<template>
    <div class="product__actions">
        <div class="product__cost"> {{ props.cost }} ₽ </div>

        <div class="product__quantity">
            <div class="quantity-actions__minus quantity-action" @click="() => changeCount('minus')"></div>
            <div class="quantity-actions__value"> {{ props.summary }} </div>
            <div class="quantity-actions__plus quantity-action" @click="() => changeCount('plus')"></div>
        </div>

        <div class="product__total-cost"> {{ props.cost * props.summary }} ₽ </div>
        <div class="product__delete" @click="(this.$emit('deleteProduct', true))"></div>
    </div>
</template>

<script setup>
    import './CheckoutItemActions.scss';
    import AppQuantity from '~~/components/AppQuantity/AppQuantity.vue';

    const props = defineProps({
        cost: {
            default: 0,
            type: Number
        },
        summary: {
            default: 1,
            type: Number
        }
    })
</script>