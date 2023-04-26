<template>
    <div class="product__quantity quantity">
        <div class="quantity__title">
            Количество
        </div>
        <div class="quantity__actions">
            <div class="quantity-actions__minus quantity-action" @click="() => changeCount('minus')"></div>
            <div class="quantity-actions__value"> {{ props.summary }} </div>
            <div class="quantity-actions__plus quantity-action" @click="() => changeCount('plus')"></div>
        </div>
        <div class="quantity__info">
            В наличии: <span> {{ props.count }} </span>
        </div>
    </div>
</template>

<script setup>
    import './AppQuantity.scss';

    const props = defineProps({
        count: {
            default: 0,
            type: Number
        },
        summary: {
            default: 0,
            type: Number
        }
    })

    const emit = defineEmits(['changeCount'])

    const changeCount = (type) => {
        if (((type == 'plus') && (props.summary >= props.count)) || ((type == 'minus') && (props.summary <= 1))) {
            return
        } else {
            emit('changeCount', type)
        }
    }
</script>