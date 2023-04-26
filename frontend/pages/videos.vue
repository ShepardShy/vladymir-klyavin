<template>
    <div>
        <AppHeader />
        <AppMain>
            <VideosComponents />
        </AppMain>
        <AppAside />
        <AppFooter />
    </div>    
</template>

<script setup>
    import AppHeader from '~~/components/AppHeader/AppHeader.vue';
    import AppMain from '~~/components/AppMain/AppMain.vue';
    import AppFooter from '~~/components/AppFooter/AppFooter.vue';
    import AppAside from '~~/components/AppAside/AppAside.vue';

    import VideosComponents from '~~/components/VideosComponents/VideosComponents.vue';

    // Мета теги
    useHead({
        title: 'Видео. Владимир Клявин',
        meta: [
            { 
                name: 'description', 
                content: 'My amazing site.' 
            }
        ],
    })
</script>
