<template>
    <div class="order__subtitle">
        Детали оплаты
    </div>
    <AppForm class="order__form-details">
        <FormItem class="form__item_light" v-for="item in detailsComponents">
            <component 
                :is="item.component"
                :item="item"
                @changeValue="changeValue"
            />
        </FormItem>
        <AppButton class="button_orange">
            Применить
        </AppButton>
    </AppForm>
</template>

<script setup>
    import './OrderDetails.scss';
    import detailsComponents from './details.js'

    import AppForm from '~/components/AppForm/AppForm.vue'
    import FormItem from '~/components/AppForm/FormItem/FormItem.vue'
    import AppButton from '~/components/AppButton/AppButton.vue'

    let details = ref({
        name: '',
        secondName: '',
        town: '',
        address: '',
        country: "",
        postIndex: '',
        phone: '',
        mail: '',
        promo: '',
    })

    const changeValue = (data) => {
        details.value[data.key] = data.value
        console.log(details.value);
    }
</script>
