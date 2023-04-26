<template>
    <aside>
        <AsideLink 
            v-for="link in links"
            :link="link"
        />
    </aside>
</template>

<script setup>
    import './AppAside.scss';
    import links from './AsideLinks.json'

    import AsideLink from './AsideLink/AsideLink.vue'
</script>
