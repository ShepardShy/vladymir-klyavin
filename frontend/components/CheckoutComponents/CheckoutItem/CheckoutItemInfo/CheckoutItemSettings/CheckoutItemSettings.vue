<template>
    <div class="product__options">
        <div class="product__option" v-for="setting in props.settings">
            {{ setting.title }}: {{ setting.value }}
        </div>
    </div>
</template>

<script setup>
    import './CheckoutItemSettings.scss';

    const props = defineProps({
        settings: {
            default: [
                {
                    "id": 0,
                    "title": "Undefined option",
                    "typeComponent": "select",
                    "objectTitle": "",
                    "value": "",
                    "options": [{
                        "id": 0,
                        "value": ""
                    }]
                }
            ],
            type: Array
        }
    })
</script>