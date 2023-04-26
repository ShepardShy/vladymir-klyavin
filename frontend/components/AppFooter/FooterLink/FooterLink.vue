<template>
    <a :href="props.link.src" class="footer__link" target="_blank">
        <AppImage class="footer__icon" :img="{src: props.link.icon, alt: props.link.title}" />
        <span> {{ props.link.title }} </span>
    </a>
</template>

<script setup>
    import './FooterLink.scss';

    import AppImage from '~~/components/AppImage/AppImage.vue';

    const props = defineProps({
        link: {
            default: {
                id: 0,
                icon: "/icons/about.svg",
                src: "/",
                title: "undefined" 
            }
        }
    })
</script>