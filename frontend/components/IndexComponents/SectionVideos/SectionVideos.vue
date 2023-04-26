<template>
        <AppSection class="section_light videos">
        <AppH2>
            Видео
        </AppH2>

        <div class="videos__list">
            <AppVideo 
                v-for="video in videosStore.videos.filter(p => p.priority != 0).sort((prev, next) => next.priority - prev.priority)" 
                :video="video"    
            />
        </div>
    </AppSection>
</template>

<script setup>
    import './SectionVideos.scss';
    
    import AppSection from '~~/components/AppSection/AppSection.vue';
    import AppVideo from '~~/components/AppVideo/AppVideo.vue'
    import AppH2 from '~~/components/AppH2/AppH2.vue'

    import { useVideosStore } from '~~/stores/videosStore';
    const videosStore = useVideosStore()
</script>
