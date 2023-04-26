<template>
    <header>
        <nav class="container">
            <HeaderLinkVue 
                v-for="link in links" 
                :link="link"
            />
        </nav>
    </header>
</template>

<script setup>
    import './AppHeader.scss';
    
    import HeaderLinkVue from './HeaderLink/HeaderLink.vue';

    const links = [
        {
            title: 'Главная',
            link: '/'
        },
        {
            title: 'Дискография',
            link: '/albums'
        },
        {
            title: 'Новости',
            link: '/news'
        },
        {
            title: 'Маркет',
            link: '/market'
        },
        {
            title: 'Видео',
            link: '/videos'
        },
        {
            title: 'Аккорды',
            link: '/chords'
        }
    ]
</script>
