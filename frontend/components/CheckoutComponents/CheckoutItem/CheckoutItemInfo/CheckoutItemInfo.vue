<template>
    <div class="product__info">
        <CheckoutItemType 
            :type="props.product.type"
        />
        <CheckoutItemTitle 
            :title="props.product.title"
        />
        <CheckoutItemSettings 
            :settings="props.product.settings"
        />
        <CheckoutItemActions 
            :cost="props.product.cost"
            :summary="props.product.summary"
        />
    </div>
</template>

<script setup>
    import './CheckoutItemInfo.scss';

    import CheckoutItemType from './CheckoutItemType/CheckoutItemType.vue'
    import CheckoutItemTitle from './CheckoutItemTitle/CheckoutItemTitle.vue'
    import CheckoutItemSettings from './CheckoutItemSettings/CheckoutItemSettings.vue';
    import CheckoutItemActions from './CheckoutItemActions/CheckoutItemActions.vue';

    const props = defineProps({
        product: {
            default: {
                "id": 0,
                "type": "Undefined type",
                "title": "Undefined title",
                "description": "",
                "cost": 2000,
                "img": "/",
                "count": 1,
                "summary": 1,
                "settings": [
                    {
                        "id": 0,
                        "title": "Undefined option",
                        "typeComponent": "select",
                        "objectTitle": "",
                        "value": "",
                        "options": [
                            {
                                "id": 0,
                                "value": ""
                            }
                        ]
                    }
                ]
            },
            type: Object
        }
    })
    
</script>
