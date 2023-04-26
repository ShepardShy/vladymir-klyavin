<template>
    <div class="support__donats">
        <a class="support__link" href="https://destream.net/live/Uladzimir_Kliavin/donate" target="_blank">
            <AppImage class="support__icon" :img="{src: '/icons/desctream.svg', alt: 'Донат через Destream'}"/>
            Донат через Destream
        </a>
        <a class="support__link" href="https://www.donationalerts.com/r/uladzimir_kliavin" target="_blank">
            <AppImage class="support__icon" :img="{src: '/icons/donation_alerts.svg', alt: 'Донат через DonationAlerts'}"/>
            Донат через DonationAlerts
        </a>
    </div>
</template>

<script setup>
    import './SectionSupportDonat.scss';
    
    import AppImage from '~~/components/AppImage/AppImage.vue';
</script>
