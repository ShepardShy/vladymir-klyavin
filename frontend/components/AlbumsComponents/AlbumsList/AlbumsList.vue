<template>
    <div class="albums__list" v-for="section in props.sections">
        <div class="albums__title">
            {{ section.title }}
        </div>
        <AlbumsItem 
            v-for="album in section.list"
            :album="album" 
        />
    </div>
</template>

<script setup>
    import './AlbumsList.scss';

    import AlbumsItem from './AlbumsItem/AlbumsItem.vue';

    const props = defineProps({
        sections: {
            default: [
                {
                    "id": 0,
                    "title": "Undefined",
                    "list": [{
                        "type": "none",
                        "img": "/albums/chernaya-polosa.jpg",
                        "title": "Undefined",
                        "link": "/"
                    }]
                }
            ]
        }
    })
</script>