<template>
    <SectionPresentation />
    <SectionAboutMe />
    <SectionRealize />
    <SectionNews />
    <SectionStreams />
    <SectionVideos />
    <SectionSupport />
</template>

<script setup>
    import './IndexComponents.scss';
    
    import SectionPresentation from "./SectionPresentation/SectionPresentation.vue"
    import SectionAboutMe from "./SectionAboutMe/SectionAboutMe.vue"
    import SectionRealize from "./SectionRealize/SectionRealize.vue"
    import SectionNews from './SectionNews/SectionNews.vue';
    import SectionStreams from './SectionStreams/SectionStreams.vue';
    import SectionVideos from './SectionVideos/SectionVideos.vue';
    import SectionSupport from './SectionSupport/SectionSupport.vue';
</script>
