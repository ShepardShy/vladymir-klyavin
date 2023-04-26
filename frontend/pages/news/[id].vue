<template>
    <div>
        <AppHeader />
        <AppMain>
            <NewsContent />
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

    import NewsContent from '~~/components/NewsComponents/NewsContent/NewsContent.vue'

    // Мета теги
    useHead({
        title: '12 Новости. Владимир Клявин',
        meta: [
            { 
                name: 'description', 
                content: 'My amazing site.' 
            }
        ],
    })
</script>
