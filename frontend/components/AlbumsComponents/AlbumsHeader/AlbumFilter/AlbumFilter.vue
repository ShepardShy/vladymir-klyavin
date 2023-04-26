<template>
    <div class="album__filter filter">
        <FilterItem 
            :class="filter.title == albumsStore.filter.type ? 'filter__item_active' : ''"
            v-for="filter in filters"
            :filter="filter"
            @click="() => { albumsStore.filterAlbums(filter.title) }"
        />
    </div>
</template>



<script setup>
    import './AlbumFilter.scss';

    import FilterItem from './FilterItem/FilterItem.vue';

    import { useAlbumsStore } from '@/stores/albumsStore';
    const albumsStore = useAlbumsStore()

    const filters = [
        {
            id: 0,
            title: 'Все'
        },
        {
            id: 1,
            title: 'Альбом'
        },
        {
            id: 2,
            title: 'Сингл'
        },
        {
            id: 3,
            title: 'Неизданное'
        }
    ]
</script>