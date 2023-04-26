<template>
    <div class="product__type">
        {{ props.type }}
    </div>
</template>

<script setup>
    import './CartType.scss';

    const props = defineProps({
        type: {
            default: "Type undefined",
            type: String
        }
    })
</script>