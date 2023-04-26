<template>
    <div class="news__item novelty">
        <AppH3 class="novelty__title">
            {{ props.novelty.title }}
        </AppH3>
        <AppImage class="novelty__img" :img="{src: props.novelty.img, alt: props.novelty.title}" />
        <div class="novelty__text">
            <AppText class="novelty__description">
                {{ props.novelty.description }}
            </AppText>
            <AppLinkButton 
                :class="props.noveltyButtonClass" 
                :link="{title: props.novelty.link_title, src: props.novelty.src}"
            />
        </div>
    </div>
</template>

<script setup>
    import './AppNovelty.scss';

    import AppH3 from '~~/components/AppH3/AppH3.vue';
    import AppText from '~~/components/AppText/AppText.vue';
    import AppImage from '~~/components/AppImage/AppImage.vue';
    import AppLinkButton from '~~/components/AppLinkButton/AppLinkButton.vue';

    const props = defineProps({
        novelty: {
            default: {
                id: -1,
                title: 'Undefinded',
                description: '',
                img: '/index/about.png',
                src: '/',
                link_title: "Подробнее"
            },
            type: Object
        },
        noveltyButtonClass: "button_dark"
    })
</script>