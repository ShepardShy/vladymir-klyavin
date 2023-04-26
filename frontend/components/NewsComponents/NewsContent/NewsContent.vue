<template>
    <div class="news news_dynamic">
        <div class="container">
            <div class="news__header">
                <AppH1>
                    Новости
                </AppH1>
                <AppLinkButton 
                    :link="{title: 'Список', src:'/news'}"
                    class="news__button button_light"
                />
            </div>
            <div class="news__content" v-html="'<div> Hey there! </div>'">

            </div>
        </div>
    </div>
</template>

<script setup>
    import './NewsContent.scss';
    
    import AppH1 from '~~/components/AppH1/AppH1.vue';
    import AppLinkButton from '~~/components/AppLinkButton/AppLinkButton.vue';
</script>
