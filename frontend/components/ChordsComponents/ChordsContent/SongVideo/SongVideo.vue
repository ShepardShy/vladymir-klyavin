<template>
    <AppH3>
        Видео
    </AppH3>
    <AppVideo 
        class="song__video" 
        :video="props.video" 
    />
</template>

<script setup>
    import './SongVideo.scss';
    
    import AppH3 from '~~/components/AppH3/AppH3.vue';
    import AppVideo from '~~/components/AppVideo/AppVideo.vue'

    const props = defineProps({
        video: {
            default: {
                "id": 1,
                "title": "Undefined",
                "frame": "<iframe width='1280' height='720' src='https://www.youtube.com/embed/X-khyq42gjU' title='Черновичок. Разбор на гитаре. Владимир Клявин' frameborder='0' allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
            },
        }
    })    
</script>
