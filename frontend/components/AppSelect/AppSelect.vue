<template>
    <label :for="`${props.item.typeComponent}_${props.item.id}`"> 
        {{ props.item.title }} 
    </label>
    <select :value="props.item.value" :id="`${props.item.typeComponent}_${props.item.id}`" @change="(e) => $emit('changeValue', {key: props.item.objectTitle, value: e.target.value})">
        <option value="" selected> Не выбрано </option>
        <option v-for="option in props.item.options" :value="option.id">
            {{ option.value }}
        </option>
    </select>
</template>

<script setup>
    import './AppSelect.scss';

    const props = defineProps({
        item: {
            default: {
                id: 0,
                title: 'Undefined title',
                typeComponent: 'select',
                objectTitle: '',
                value: '',
                options: [
                    {
                        id: 0,
                        value: 'Undefined'
                    }
                ]
            },
            type: Object
        }
    })
</script>
