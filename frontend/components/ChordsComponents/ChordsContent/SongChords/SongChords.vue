<template>
    <div class="song__chords">
        <AppH3>
            Аппликатуры аккордов
        </AppH3>
        <div class="chords__list">
            <SongChord 
                v-for="chord in props.chords"
                :chord="chord" />
        </div>
    </div>
</template>

<script setup>
    import './SongChords.scss';

    import AppH3 from '~~/components/AppH3/AppH3.vue';
    import SongChord from '../SongChord/SongChord.vue'

    const props = defineProps({
        chords: {
            default: [
                {
                    "id": 0,
                    "title": "Dm",
                    "img": "/chords/Dm.png"
                }
            ]
        }
    })
</script>