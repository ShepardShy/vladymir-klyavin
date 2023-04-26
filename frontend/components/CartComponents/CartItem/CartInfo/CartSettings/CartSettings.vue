<template>
    <div class="product__settings">
        <FormItem class="form__item_light"  v-for="setting in props.product.settings">
            <AppSelect
                :item="setting"
                @changeValue="(select) => $emit('changeValue', select)"
            />
        </FormItem>

        <AppQuantity 
            :summary="props.product.summary"
            :count="props.product.count"
            @changeCount="(type) => $emit('changeCount', {data: props.product, type: type})"
        />
    </div>
</template>

<script setup>
    import './CartSettings.scss';

    import AppQuantity from '~~/components/AppQuantity/AppQuantity.vue';
    import FormItem from '~~/components/AppForm/FormItem/FormItem.vue';
    import AppSelect from '~~/components/AppSelect/AppSelect.vue';

    const props = defineProps({
        product: {
            default: {
                "id": 0,
                "type": "",
                "title": "Undefined",
                "description": "",
                "cost": 0,
                "summary": 1,
                "img": "/",
                "settings": [{
                        "id": 0,
                        "type": "",
                        "status": false,
                        "options": [
                            {
                                "id": 0,
                                "value": "Undefined"
                            }
                        ]
                    }
                ]
            },
            type: Object
        } 
    })
</script>