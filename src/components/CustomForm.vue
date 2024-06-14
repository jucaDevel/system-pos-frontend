<template>
    <form
      class="t-5 w-full flex flex-col"
      @submit.prevent="saveRegister"
      @keydown="preventSubmitOnEnter">
      <template v-for=" field in localDataFields" :key="field.name">        
        <CustomFieldForm
          v-if="!field.hidden"
          :name="field.name"
          :type="field.type"
          :subtype="field.subtype ? field.subtype : null"
          :value="field.value ? field.value : null"
          :required="field.required"
          @on:updateValue="updateFormValue"
        />
      </template>
      <div class="flex items-center justify-center w-full">
        <button type="submit" class="bg-primary rounded text-white p-1 w-60">
          Guardar
        </button>
      </div>
    </form>
</template>

<script>
import {onMounted, ref} from 'vue'
import CustomFieldForm from '@/components/CustomFieldForm.vue'
export default {
    components:{
      CustomFieldForm
    },
    props:{
      dataFields: {
        type: Array,
        required: true
      }
    },
    setup(props, { emit }){
      const {value:localDataFields} = ref([...props.dataFields])
      const formValues = ref({})

      const updateFormValue = ({ name, value }) => {
        formValues.value[name] = value;
      };
    
      const saveRegister = () => {
        emit('on:saveRegister',formValues.value)
      }

      onMounted( () => {
        localDataFields.forEach(field => {
          if (field.value) {
            formValues.value[field.name] = field.value;
          }
        });
      })

      return{
        localDataFields,
        saveRegister,
        formValues,

        preventSubmitOnEnter: (event) => { if (event.key === "Enter") { event.preventDefault(); } },
        updateFormValue
      }
    }
}
</script>