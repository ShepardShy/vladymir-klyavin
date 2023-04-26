<template>
    <a class="button-link" :href="props.link.src">
        {{ props.link.title }}
    </a>
</template>

<script setup>
    import './AppLinkButton.scss';

    const props = defineProps({
        link: {
            default: {
                title: 'Undefined',
                src: '/'
            },
            type: Object
        }
    })
    
</script>
