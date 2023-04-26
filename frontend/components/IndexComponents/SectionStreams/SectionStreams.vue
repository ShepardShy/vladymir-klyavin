<template>
    <AppSection class="section_dark streams">
        <div class="streams__info">
            <AppH2 class="streams__title">
                Стримы
            </AppH2>
            <AppText class="streams__text">
                Стримы проходят каждую пятницу в 20:00 по Минскому (Московскому) времени.
            </AppText>
            <StreamAreas />
        </div>
        <AppImage class="streams__img" :img="{src: '/index/streams.png', alt: 'Стримы'}" />
    </AppSection>
</template>

<script setup>
    import './SectionStreams.scss';

    import AppSection from '~~/components/AppSection/AppSection.vue';
    import AppH2 from '~~/components/AppH2/AppH2.vue'
    import AppText from '~~/components/AppText/AppText.vue';
    import AppImage from '~~/components/AppImage/AppImage.vue';

    import StreamAreas from './StreamAreas/StreamAreas.vue';
</script>