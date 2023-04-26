<template>
    <div class="videos">
        <div class="container">
            <div class="videos__header">
                <AppH1>
                    Видео
                </AppH1>
            </div>
            <div class="videos__list">
                <AppVideo 
                    v-for="video in videosStore.videos.sort((prev, next) => next.priority - prev.priority)" 
                    :video="video"    
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import './VideosComponents.scss';
    
    import AppH1 from '~~/components/AppH1/AppH1.vue';
    import AppVideo from '~~/components/AppVideo/AppVideo.vue';

    import { useVideosStore } from '~~/stores/videosStore';
    const videosStore = useVideosStore()
</script>
