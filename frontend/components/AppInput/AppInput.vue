<template>
    <label :for="`${props.item.typeComponent}_${props.item.id}`"> 
        {{ props.item.title }} 
    </label>
    <input 
        :id="`${props.item.typeComponent}_${props.item.id}`" 
        :placeholder="props.item.placeholder"
        :type="props.item.type"
        :value="props.item.value"
        @input="(e) => $emit('changeValue', {key: props.item.objectTitle, value: props.item.type == 'number' ? Number(e.target.value) : e.target.value})"
    />
</template>

<script setup>
    import './AppInput.scss';

    const props = defineProps({
        item: {
            default: {
                id: 0,
                title: "Undefined title",
                typeComponent: 'input',
                type: "text",
                placeholder: '',
                value: '',
                objectTitle: ''
            },
            type: Object
        }
    })
</script>
