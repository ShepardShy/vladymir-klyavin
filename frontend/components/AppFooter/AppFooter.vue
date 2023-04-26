<template>
    <footer>
        <div class="container">
            <FooterColumn 
                v-for="column in FooterColumns"
                :column="column"
            />
        </div>
    </footer>
</template>

<script setup>
    import './AppFooter.scss';
    
    import FooterColumn from './FooterColumn/FooterColumn.vue';
    import FooterColumns from './FooterColumns.json'
</script>
