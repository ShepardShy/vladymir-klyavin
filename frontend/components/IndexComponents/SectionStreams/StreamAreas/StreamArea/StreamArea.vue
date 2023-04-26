<template>
    <a :href="props.area.src" class="areas__item" target="_blank">
        <AppImage class="areas__icon" :img="{src: props.area.icon, alt: props.area.title}"/>
        {{ props.area.title }}
    </a>
</template>

<script setup>
    import './StreamArea.scss';

    import AppImage from '~~/components/AppImage/AppImage.vue';

    const props = defineProps({
        area: {
            default: {
                title: 'Undefined',
                icon: '/about.png',
                src: '/'
            },
            type: Object
        }
    })
</script>
