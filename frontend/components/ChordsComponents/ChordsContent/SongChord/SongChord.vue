<template>
    <AppImage 
        class="song__chord" 
        :img="{src: props.chord.img, alt: props.chord.title}"
    />
</template>

<script setup>
    import './SongChord.scss';
    
    import AppImage from '~~/components/AppImage/AppImage.vue';

    const props = defineProps({
        chord: {
            default: {
                title: '',
                img: '/'
            }
        }
    })
</script>
