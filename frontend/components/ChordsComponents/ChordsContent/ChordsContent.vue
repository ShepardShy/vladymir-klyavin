<template>
    <div class="chords chords_dynamic">
        <div class="container">
            <div class="chords__header">
                <AppH1>
                    Аккорды
                </AppH1>
                <AppLinkButton 
                    :link="{title: 'Список', src:'/chords'}"
                    class="chords__button button_light"
                />
            </div>
            <div class="chords__content">
                <AppSong />
                <div class="song__inform">
                    <SongChords 
                        :chords="chordsStore.chords.filter(p => chordsStore.activeSong.chords.includes(p.title))"
                    />
                    <SongVideo 
                        :video="chordsStore.activeSong.video"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import './ChordsContent.scss';
    
    import AppH1 from '~~/components/AppH1/AppH1.vue';
    import AppLinkButton from '~~/components/AppLinkButton/AppLinkButton.vue';
    import AppSong from '~~/components/AppSong/AppSong.vue'

    import SongChords from './SongChords/SongChords.vue';
    import SongVideo from './SongVideo/SongVideo.vue';

    import { useChordsStore } from '~~/stores/chordsStore';
    const chordsStore = useChordsStore()
</script>
