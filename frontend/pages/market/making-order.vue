<template>
    <div>
        <AppHeader />
        <AppMain>
            <MakingOrderComponents />
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

    import MakingOrderComponents from '~~/components/MakingOrderComponents/MakingOrderComponents.vue';
</script>