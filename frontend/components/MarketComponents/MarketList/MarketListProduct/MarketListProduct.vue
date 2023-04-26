<template>
    <NuxtLink :to="`/market/${props.product.id}`" class="product">
        <AppImage 
            class="product__image" 
            :img="{
                    src: props.product.img,
                    alt: props.product.title
                }" 
            />
        <div class="product__type">
            {{ props.product.type }}
        </div>
        <div class="product__title">
            {{ props.product.title }}
        </div>
        <div class="product__cost">
            {{ props.product.cost }} ₽
        </div>
    </NuxtLink>
</template>

<script setup>
    import './MarketListProduct.scss';

    import AppImage from '~~/components/AppImage/AppImage.vue';

    const props = defineProps({
        product: {
            default: {
                "id": 7,
                "type": "",
                "title": "Undefined",
                "description": "",
                "cost": 0,
                "img": "/",
                "settings": [
                    {
                        "id": 0,
                        "type": "",
                        "status": false,
                        "options": [
                            {
                                "id": 0,
                                "value": "S"
                            }
                        ]
                    }
                ]
            },
            type: Object
        }
    })
</script>