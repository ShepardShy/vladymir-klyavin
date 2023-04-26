<template>
    <div class="song">
        <AppH2 class="song__title">
            {{ chordsStore.activeSong.title }}
        </AppH2>
        <div class="song__text" v-html="chordsStore.activeSong.text"></div>
    </div>
</template>

<script setup>
    import './AppSong.scss';

    import AppH2 from '~~/components/AppH2/AppH2.vue'

    import { useChordsStore } from '~~/stores/chordsStore';
    const chordsStore = useChordsStore()
</script>