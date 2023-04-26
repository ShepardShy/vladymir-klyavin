import { markRaw, defineAsyncComponent } from 'vue'

export default [
    {
        id: 0,
        title: "Имя",
        typeComponent: "input",
        type: "text",
        placeholder: "Иван",
        value: "",
        objectTitle: "name",
        component: markRaw(defineAsyncComponent(() => import('~/components/AppInput/AppInput.vue')))
    },
    {
        id: 1,
        title: "Фамилия",
        typeComponent: "input",
        type: "text",
        placeholder: "Иванов",
        value: "",
        objectTitle: "secondName",
        component: markRaw(defineAsyncComponent(() => import('~/components/AppInput/AppInput.vue')))
    },
    {
        id: 2,
        title: "Страна",
        typeComponent: "select",
        type: "text",
        placeholder: "Россия",
        value: "",
        objectTitle: "country",
        options: [
            {
                id: 0,
                value: 'Россия'
            },
            {
                id: 1,
                value: 'Беларусь'
            },
            {
                id: 2,
                value: 'Украина'
            },
            {
                id: 3,
                value: 'Казахстан'
            }
        ],
        component: markRaw(defineAsyncComponent(() => import('~/components/AppSelect/AppSelect.vue')))
    },
    {
        id: 3,
        title: "Город",
        typeComponent: "input",
        type: "text",
        placeholder: "Москва",
        value: "",
        objectTitle: "town",
        component: markRaw(defineAsyncComponent(() => import('~/components/AppInput/AppInput.vue')))
    },
    {
        id: 4,
        title: "Адрес",
        typeComponent: "input",
        type: "text",
        placeholder: "ул. Ленина, д. 38. кв. 12",
        value: "",
        objectTitle: "address",
        component: markRaw(defineAsyncComponent(() => import('~/components/AppInput/AppInput.vue')))
    },
    {
        id: 5,
        title: "Почтовый индекс",
        typeComponent: "input",
        type: "text",
        placeholder: "680943234",
        value: "",
        objectTitle: "postIndex",
        component: markRaw(defineAsyncComponent(() => import('~/components/AppInput/AppInput.vue')))
    },
    {
        id: 6,
        title: "Телефон",
        typeComponent: "input",
        type: "text",
        placeholder: "+7 (777) 777 77-77",
        value: "",
        objectTitle: "phone",
        component: markRaw(defineAsyncComponent(() => import('~/components/AppInput/AppInput.vue')))
    },
    {
        id: 7,
        title: "Email",
        typeComponent: "input",
        type: "text",
        placeholder: "Example~yandex.ru",
        value: "",
        objectTitle: "mail",
        component: markRaw(defineAsyncComponent(() => import('~/components/AppInput/AppInput.vue')))
    },
    {
        id: 8,
        title: "Промокод",
        typeComponent: "input",
        type: "text",
        placeholder: "",
        value: "",
        objectTitle: "promo",
        component: markRaw(defineAsyncComponent(() => import('~/components/AppInput/AppInput.vue')))
    }
]