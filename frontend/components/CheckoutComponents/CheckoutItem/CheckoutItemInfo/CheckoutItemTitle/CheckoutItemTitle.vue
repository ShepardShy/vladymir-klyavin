<template>
    <div class="product__title">
        {{ props.title }}
    </div>
</template>

<script setup>
    import './CheckoutItemTitle.scss';
    
    const props = defineProps({
        title: {
            default: "Undefined title",
            type: String
        }
    })
</script>
