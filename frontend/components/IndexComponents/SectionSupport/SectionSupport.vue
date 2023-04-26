<template>
        <AppSection class="section_dark support">
        <AppH2>
            Поддержать меня
        </AppH2>
        <div class="support__info">
            <div class="support__cart-info">
                <SectionSupportCart />
                <SectionSupportDonat />
            </div>
            <AppImage class="support__image" :img="{src: '/index/support.png', alt: 'Поддержать меня'}"/>
        </div>
    </AppSection>
</template>

<script setup>
    import './SectionSupport.scss';
    
    import AppSection from '~~/components/AppSection/AppSection.vue';
    import AppH2 from '~~/components/AppH2/AppH2.vue'
    import AppImage from '~~/components/AppImage/AppImage.vue';

    import SectionSupportCart from './SectionSupportCart/SectionSupportCart.vue';
    import SectionSupportDonat from './SectionSupportDonat/SectionSupportDonat.vue';
</script>
