<template>
    <div class="product__action">
        <div class="product__cost">
            {{ props.cost }} ₽
        </div>
        <AppButton class="product__button button_light" @click="() => {this.$emit('addCart', true)}">
            В корзину
        </AppButton>
    </div>
</template>

<script setup>
    import './CartActions.scss';

    import AppButton from '~~/components/AppButton/AppButton.vue';

    const props = defineProps({
        cost: {
            default: 0,
            type: Number
        }
    })
</script>