<template>
        <AppSection class="section_dark realize">
        <AppH2>
            Официальные релизы
        </AppH2>
        <Swiper 
            :slides-per-view="4" 
            :space-between="50" 
            :modules="[Navigation, Pagination, Virtual]" 
            navigation 
            :pagination="{clickable: true, dynamicBullets: true}" 
            virtual
        >
            <SwiperSlide v-for="img in images" :key="img.id" :virtual-index="img.id">
                <AppImage 
                    class="realize__img"
                    :img="img"
                />
            </SwiperSlide>
        </Swiper>
    </AppSection>
</template>

<script setup>
    import './SectionRealize.scss';
    
    import 'swiper/css'
    import 'swiper/css/bundle'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Navigation, Pagination, Virtual } from 'swiper'

    import AppSection from '~~/components/AppSection/AppSection.vue';
    import AppH2 from '~~/components/AppH2/AppH2.vue'
    import AppImage from '~~/components/AppImage/AppImage.vue';

    const images = [
        {
            id: 0,
            src: '/index/realizes/22_44.png',
            alt: '22:44'
        },
        {
            id: 1,
            src: '/index/realizes/chernaya_polosa.png',
            alt: 'Черная полоса'
        },
        {
            id: 2,
            src: '/index/realizes/svetliy_mir.png',
            alt: 'Светлый мир'
        },
        {
            id: 3,
            src: '/index/realizes/chernovichok.png',
            alt: 'Черновичок'
        }
        ,
        {
            id: 4,
            src: '/index/realizes/chernaya_polosa.png',
            alt: 'Черная полоса'
        },
        {
            id: 5,
            src: '/index/realizes/svetliy_mir.png',
            alt: 'Светлый мир'
        },
        {
            id: 6,
            src: '/index/realizes/chernovichok.png',
            alt: 'Черновичок'
        }
    ]
</script>
