<template>
    <div>
        <AppHeader />
        <AppMain>
            <AlbumsComponents />
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

    import AlbumsComponents from '~~/components/AlbumsComponents/AlbumsComponents.vue'

    // Мета теги
    useHead({
        title: 'Дискография. Владимир Клявин',
        meta: [
            { 
                name: 'description', 
                content: 'My amazing site.' 
            }
        ],
    })
</script>
