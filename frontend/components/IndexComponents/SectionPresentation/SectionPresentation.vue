<template>
    <AppSection class="section_dark presentation">
        <AppH1>
            Владимир Клявин
        </AppH1>
        <AppImage class="presentation__img" :img="{src: '/index/presentation.png', alt: 'Владимир Клявин'}"/>
    </AppSection>
</template>

<script setup>
    import './SectionPresentation.scss';
    
    import AppSection from '~~/components/AppSection/AppSection.vue';
    import AppImage from '~~/components/AppImage/AppImage.vue';
    import AppH1 from '~~/components/AppH1/AppH1.vue'
</script>
