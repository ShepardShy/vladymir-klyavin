<template>
    <div class="news">
        <div class="container">
            <div class="news__header">
                <AppH1>
                    Новости
                </AppH1>
            </div>
            <NewsList />
        </div>
    </div>
</template>

<script setup>
    import './NewsComponents.scss';
    
    import AppH1 from '../AppH1/AppH1.vue';
    import NewsList from './NewsList/NewsList.vue';

</script>
