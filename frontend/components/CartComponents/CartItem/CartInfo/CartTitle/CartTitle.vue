<template>
    <div class="product__title">
        {{ props.title }}
    </div>
</template>

<script setup>
    import './CartTitle.scss';

    const props = defineProps({
        title: {
            default: 'Title undefined',
            type: String
        }
    })
</script>