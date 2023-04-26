<template>
    <NuxtLink :to="props.link.link" class="header__link" :class="props.link.link.split('/')[1] == $route.path.split('/')[1] ? 'header__link_active' : ''">
        {{ props.link.title }}
    </NuxtLink>
</template>

<script setup>
    import './HeaderLink.scss';
    
    const props = defineProps({
        link: {
            default: {
                title: 'Undefined',
                link: '/'
            }
        }
    })
</script>
