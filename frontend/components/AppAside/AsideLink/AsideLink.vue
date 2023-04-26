<template>
    <a :href="props.link.src" target="_blank" class="aside__link">
        <AppImage 
            class="aside__icon"
            :img="{src: props.link.icon, alt: props.link.title}"
        />
    </a>
</template>

<script setup>
    import './AsideLink.scss';
    import AppImage from '~~/components/AppImage/AppImage.vue';

    const props = defineProps({
        link: {
            default: {
                src: '/',
                icon: '/',
                title: 'Undefined'
            }
        }
    })
</script>