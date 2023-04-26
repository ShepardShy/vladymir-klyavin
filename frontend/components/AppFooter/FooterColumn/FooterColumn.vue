<template>
    <div class="footer__column footer-column">
        <div class="footer-column__title">
            {{ props.column.title }}
        </div>
        <div class="footer-column__list">
            <FooterLink 
                v-for="link in props.column.links"
                :link="link"
            />
        </div>
    </div>
</template>

<script setup>
    import './FooterColumn.scss';
    import FooterLink from '../FooterLink/FooterLink.vue'

    const props = defineProps({
        column: {
            default: {
                id: 0,
                title: "Сотрудничество",
                links: [
                    {
                        id: 0,
                        icon: "/icons/letter.svg",
                        src: "",
                        title: "undefined" 
                    }
                ] 
            }
        }
    })
</script>
