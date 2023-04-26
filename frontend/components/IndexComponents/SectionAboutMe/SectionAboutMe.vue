<template>
    <AppSection class="section_light about">
        <div class="about__info">
            <AppH2 class="about__title">
                Обо мне
            </AppH2>
            <AppText>Владимир Клявин. Музыкант любитель из Беларуси. </AppText>
            <AppText>Основное направление рок, альтернатива, русский рок. </AppText>
            <AppText>Написанием музыки, текстов, а так же записью всего материала занимается полностью самостоятельно в свободное от работы время. </AppText>
            <AppText>Как следствие это накладывает свой отпечаток на скорость работы, ну и конечно на качество.</AppText>
            <AppText>Вот в принципе и все, что можно рассказать в двух словах. <br> Удачи и мира друзья</AppText>
            <AppText>Не всегда будет так...</AppText>
        </div>
        <figure class='ibg about__img'>
            <img src='/index/about.png' alt='Владимир Клявин'>
        </figure>
    </AppSection>
</template>

<script setup>
    import './SectionAboutMe.scss';
    
    import AppSection from '~~/components/AppSection/AppSection.vue';
    import AppH2 from '~~/components/AppH2/AppH2.vue'
    import AppText from '~~/components/AppText/AppText.vue';
</script>
