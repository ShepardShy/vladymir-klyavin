<template>
    <div class="chords">
        <div class="container">
            <div class="chords__header">
                <AppH1>
                    Аккорды
                </AppH1>
            </div>
            <div class="chords__main">
                <ul class="chords__songs">
                    <li class="chords__item" v-for="chord in chordsStore.songs">
                        <a :href="chord.src"> {{ chord.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    import './ChordsComponents.scss';
    
    import AppH1 from '~~/components/AppH1/AppH1.vue';

    import { useChordsStore } from '~~/stores/chordsStore';
    const chordsStore = useChordsStore()
</script>
