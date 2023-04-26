<template>
    <AppSection class="section_light news">
    <AppH2>
        Новости
    </AppH2>
    <div class="news__list">
        <AppNovelty 
            v-for="novelty in news"
            :novelty="novelty"
            :noveltyButtonClass="'button_dark'"
        />
    </div>
</AppSection>
</template>

<script setup>
    import './SectionNews.scss';

    import AppSection from '~~/components/AppSection/AppSection.vue';
    import AppH2 from '~~/components/AppH2/AppH2.vue'

    import AppNovelty from '~~/components/AppNovelty/AppNovelty.vue'


    import { useNewsStore } from '@/stores/newsStore';
    const newsStore = useNewsStore()

    let news = ref(null)

    onMounted(() => {
        news.value = newsStore.news.sort((prev, next) => prev.id - next.id).reverse().slice(0, 3)
    })
</script>
