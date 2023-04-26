<template>
    <div>
        <AppHeader />
        <AppMain>
            <ChordsContent />
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

    import ChordsContent from '~~/components/ChordsComponents/ChordsContent/ChordsContent.vue'

    // Мета теги
    useHead({
        title: 'Аккорды. Владимир Клявин',
        meta: [
            { 
                name: 'description', 
                content: 'My amazing site.' 
            }
        ],
    })
</script>
