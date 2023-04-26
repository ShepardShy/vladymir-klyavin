<template>
    <div class="product cart__item" v-if="product != null">
        <AppImage class="product__image" 
            :img="{
                src: product.value.img,
                alt: `${product.value.type} ${product.value.title}`
            }" 
        />
        <CartInfo 
            :product="product.value"
            @addCart="() => product.addCart()"
            @changeValue="(select) => product.changeValue(select)"
            @changeCount="(count) => product.changeCount(count)"
        />
    </div>
</template>

<script setup>
    import './CartItem.scss';

    import AppImage from '~~/components/AppImage/AppImage.vue';
    import CartInfo from './CartInfo/CartInfo.vue';

    import { useProductsStore } from '@/stores/productsStore';
    const productsStore = useProductsStore()

    let product = ref(null)
    
    onMounted(() => {
        product.value = new Cart(productsStore.products[0])
    })

    class Cart {
        constructor(product) {
            this.value = product
        }

        // Добавление товара в корзину
        addCart() {
            productsStore.addCart(this.value)
            console.log(this.value);
        }

        // Изменение количества товара
        changeCount = (count) => {
            if (count.type == 'plus') {
                this.value.summary++
            } else {
                this.value.summary--
            }
        }

        // Изменение значения опции
        changeValue = (select) => {
            this.value.settings.forEach(element => {
                if (element.objectTitle == select.key) {
                    element.value = select.value
                    return
                }
            });
        }
    }
</script>