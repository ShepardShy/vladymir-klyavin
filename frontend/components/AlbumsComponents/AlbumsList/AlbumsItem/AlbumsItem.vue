<template>
    <div class="albums__item album">
        <AppImageVue 
            class="album__image"
            :img="{src: props.album.img, alt: props.album.title}"
        />
        <div class="album__subtitle">
            {{ props.album.type }}
        </div>
        <div class="album__title">
            {{ props.album.title }}
        </div>
        <AppLinkButton 
            class="button_light album__button"
            :link="{title: 'Слушать', src: props.album.link}"
        />
    </div>
</template>

<script setup>
    import './AlbumsItem.scss';

    import AppImageVue from '~~/components/AppImage/AppImage.vue';
    import AppLinkButton from '~~/components/AppLinkButton/AppLinkButton.vue';

    const props = defineProps({
        album: {
            default: {
                "type": "undefined type",
                "img": "/albums/chernaya-polosa.jpg",
                "title": "Undefined",
                "link": "/"
            }
        }
    })
</script>