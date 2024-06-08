<template>
    <input
        v-if="type==='input'"   
        class="bg-gray-300 rounded p-2 m-2"
        :type="subtype"
        :name="name"
        :placeholder="languagei18n(`nameFields.${name.toUpperCase()}`)"
        :value="value ? value : null"
        @input="updateValue($event.target.value,name)"
    />
    <textarea
        v-else-if="type==='textarea'"
        class="bg-gray-300 rounded p-2 m-2"
        type="text"
        :name="name"
        @input="updateValue($event.target.value,name)"
    >
    </textarea>
    <select
        v-else-if="type==='select'"
        class="bg-gray-300 rounded p-2 m-2"
        :name="name"
        @input="updateValue($event.target.value,name)"
    >
        <option value="">{{ languagei18n(`nameFields.${name.toUpperCase()}`) }}</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
</template>

<script>
import {useI18n} from 'vue-i18n'
export default {
    props:{
        name:{
            type: String,
            required: true
        },
        type:{
            type: String,
            required: true
        },
        subtype:{
            type: String,
            required: false
        },
        required:{
            type: Boolean,
            required: true
        }
    },
    
    setup(props, {emit}){
        const {t:languagei18n} = useI18n()
        const updateValue = ( value, name ) => {
            emit('on:updateValue', { name, value });
        }
        return{
            languagei18n,
            updateValue,
            ...props
        }
    }
}
</script>

<style>

</style>