<template>
    <div class="areas">
        <div class="areas__title"> Площадки </div>
        <div class="areas__list">
            <StreamArea 
                v-for="area in areas" 
                :area="area"    
            /> 
        </div>
    </div>
</template>

<script setup>
    import './StreamAreas.scss';
    import areas from './StreamAreas.json'
    
    import StreamArea from './StreamArea/StreamArea.vue';

</script>
