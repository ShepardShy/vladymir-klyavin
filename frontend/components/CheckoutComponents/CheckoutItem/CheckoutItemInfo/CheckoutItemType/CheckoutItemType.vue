<template>
    <div class="product__type">
        {{ props.type }}
    </div>
</template>

<script setup>
    import './CheckoutItemType.scss';
    
    const props = defineProps({
        type: {
            default: "Undefined type",
            type: String
        }
    })
</script>
