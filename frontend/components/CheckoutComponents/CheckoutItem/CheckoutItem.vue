<template>
    <div class="product checkout__item">
        <AppImage class="product__image" 
            :img="{
                src: props.product.img,
                alt: `${props.product.type} ${props.product.title}`
            }" 
        />
        <CheckoutItemInfo 
            :product="props.product"
        />
    </div>
</template>

<script setup>
    import './CheckoutItem.scss';
    
    import AppImage from '~~/components/AppImage/AppImage.vue';
    import CheckoutItemInfo from './CheckoutItemInfo/CheckoutItemInfo.vue';

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
