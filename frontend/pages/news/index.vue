<template>
    <div>
        <AppHeader />
        <AppMain>
            <NewsComponents />
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

    import NewsComponents from '~~/components/NewsComponents/NewsComponents.vue'

    // Мета теги
    useHead({
        title: 'Новости. Владимир Клявин',
        meta: [
            { 
                name: 'description', 
                content: 'My amazing site.' 
            }
        ],
    })
</script>
