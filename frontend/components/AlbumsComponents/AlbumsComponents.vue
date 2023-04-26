<template>
    <div class="albums">
        <div class="container">
            <AlbumsHeader />
            <AlbumsList 
                :sections="albumsStore.filter.data.length == 0 ? albumsStore.albums : albumsStore.filter.data"
            />
        </div>
    </div>
</template>

<script setup>
    import './AlbumsComponents.scss';
    
    import AlbumsHeader from './AlbumsHeader/AlbumsHeader.vue'
    import AlbumsList from './AlbumsList/AlbumsList.vue'
    
    import { useAlbumsStore } from '@/stores/albumsStore';
    const albumsStore = useAlbumsStore()
</script>
