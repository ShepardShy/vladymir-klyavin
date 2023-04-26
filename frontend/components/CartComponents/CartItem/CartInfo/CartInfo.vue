<template>
    <div class="product__info">
        <CartType 
            :type="props.product.type"
        />
        <CartTitle 
            :title="props.product.title"
        />
        <CartDescription 
            :description="props.product.description"
        />
        <CartSettings 
            :product="props.product"
            @changeCount="(data) => this.$emit('changeCount', data)"
            @changeValue="(select) => this.$emit('changeValue', select)"
        />
        <CartActions 
            :cost="props.product.cost"
            @addCart="() => this.$emit('addCart', true)"
        />
    </div>
</template>

<script setup>
    import './CartInfo.scss';

    import CartType from './CartType/CartType.vue'
    import CartTitle from './CartTitle/CartTitle.vue'
    import CartDescription from './CartDescription/CartDescription.vue'
    import CartSettings from './CartSettings/CartSettings.vue'
    import CartActions from './CartActions/CartActions.vue';

    const props = defineProps({
        product: {
            default: {
                "id": 0,
                "type": "",
                "title": "Undefined",
                "description": "",
                "cost": 0,
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