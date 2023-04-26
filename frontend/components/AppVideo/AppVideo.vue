<template>
    <div class="videos__item">
        <div class="videos__frame"  v-html="props.video.frame"></div>
        <div class="videos__title">
            {{ props.video.title }}
        </div>
    </div>

</template>

<script setup>
    import './AppVideo.scss';

    const props = defineProps({
        video: {
            default: {
                id: -1,
                priority: 0,
                title: 'Undefined',
                frame: null
            }
        }
    })
</script>
