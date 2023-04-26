<template>
    <div class="product__description" v-html="props.description"> </div>
</template>

<script setup>
    import './CartDescription.scss';
    
    const props = defineProps({
        description: {
            default: '',
            type: String
        }
    })
</script>
