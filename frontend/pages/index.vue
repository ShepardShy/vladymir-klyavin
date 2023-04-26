<template>
    <div class="main-page">
        <AppHeader />
        <AppMain>
            <IndexComponents />
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

    import IndexComponents from '~~/components/IndexComponents/IndexComponents.vue';

    // Мета теги
    useHead({
        title: 'Владимир Клявин',
        meta: [
            { 
                name: 'description', 
                content: 'My amazing site.' 
            }
        ],
    })
</script>
