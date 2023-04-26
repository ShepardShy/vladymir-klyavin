<template>
    <div class="albums__header">
        <AppH1>
            Дискография
        </AppH1>
        <AlbumFilter />
    </div>
</template>

<script setup>
    import './AlbumsHeader.scss';
    
    import AppH1 from '~/components/AppH1/AppH1.vue';
    
    import AlbumFilter from './AlbumFilter/AlbumFilter.vue'
</script>