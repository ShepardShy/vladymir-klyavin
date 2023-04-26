<template>
    <div class="filter__item">
        {{ filter.title }}
    </div>
</template>

<script setup>
    import './FilterItem.scss';

    const props = defineProps({
        filter: {
            default: {
                id: 0,
                title: 'Все'
            } 
        }
    })
</script>