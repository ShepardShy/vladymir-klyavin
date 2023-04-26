<template>
    <div class="news__list">
        <AppNovelty 
            v-for="novelty in news"
            :novelty="novelty" 
            :noveltyButtonClass="'button_light'" 
        />
    </div>
</template>

<script setup>
    import './NewsList.scss';

    import AppNovelty from '~~/components/AppNovelty/AppNovelty.vue';

    import { useNewsStore } from '@/stores/newsStore';
    const newsStore = useNewsStore()

    let news = ref(null)
    
    onMounted(() => {
        news.value = newsStore.news.sort((prev, next) => prev.id - next.id).reverse()
    })
</script>