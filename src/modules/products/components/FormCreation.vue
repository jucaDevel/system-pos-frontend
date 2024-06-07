<template>
    <form class="t-5 w-full flex flex-col" @submit.prevent="createProduct" @keydown="preventSubmitOnEnter">
      <input
        class="bg-gray-300 rounded p-2 m-2"
        type="text"
        placeholder="Nombre"
        v-model="dataFields.name"
      />
      <textarea
        class="bg-gray-300 rounded p-2 m-2"
        type="text"
        v-model="dataFields.description"
      >
      </textarea>
      <input
        class="bg-gray-300 rounded p-2 m-2"
        type="number"
        placeholder="Stock"
        v-model="dataFields.stock"
      />
      <input
        class="bg-gray-300 rounded p-2 m-2"
        type="number"
        placeholder="Precio"
        v-model="dataFields.price"
      />
      <input
        class="bg-gray-300 rounded p-2 m-2"
        type="number"
        placeholder="Precio de compra"
        v-model="dataFields.purchasePrice"
      />
      <input
        class="bg-gray-300 rounded p-2 m-2"
        type="number"
        placeholder="Precio de venta"
        v-model="dataFields.wholeSalePrice"
      />
      <input
        class="bg-gray-300 rounded p-2 m-2"
        type="number"
        placeholder="Utilidad"
        v-model="dataFields.utility"
      />
      <select class="bg-gray-300 rounded p-2 m-2" v-model="dataFields.id_category">
        <option value="">Categoria</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <input
        class="bg-gray-300 rounded p-2 m-2"
        type="number"
        placeholder="Codigo de barras"
        v-model="dataFields.bar_code"
      />
      <div class="flex items-center justify-center w-full">
        <button type="submit" class="bg-primary rounded text-white p-1 w-60">
          Guardar
        </button>
      </div>
    </form>
</template>

<script>
export default {
    setup(props, {attrs}){
        return{
           dataFields:attrs.dataFields
        }
    }
}
</script>

<style>

</style>