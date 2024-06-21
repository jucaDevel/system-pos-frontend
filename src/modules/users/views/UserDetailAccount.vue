<template>
  <div class="flex flex-col justify-between w-full h-full px-5 gap-2">
    <div class="border-t-2 border-gray-200 w-full h-2/6">
      <div class="flex py-2 gap-5">
        <img
          src="@/assets/images/no-user.png"
          alt=""
          class="h-40 rounded-full"
        />
        <div class="flex flex-col items-start justify-center w-full">
          <span class="flex w-full gap-10">
            <h3>Juan Canizales</h3>
            <span
              class="border-2 border-green-400 px-2 rounded-full bg-green-100"
              >activo</span
            >
          </span>
          <span> $2'300,000 </span>
          <span> 120 </span>
        </div>
      </div>
    </div>
    <div class="flex justify-between h-4/6 gap-2">
      <div class="border-2 border-gray-200 w-2/5 rounded-lg p-2">
        <h2 class="font-bold">Detalles de usuario</h2>
        <div
          class="grid grid-cols-2 grid-flow-row gap-6 mt-5 px-3 border-b-2 pb-5"
        >
          <div class="flex flex-col">
            <h4 class="">Email</h4>
            <span class="font-semibold">jucavelarde8822@gmail.com</span>
          </div>
          <div class="flex flex-col">
            <h4 class="">Telefono</h4>
            <span class="font-semibold">3133423321</span>
          </div>
          <div class="flex flex-col">
            <h4 class="">Nombre de Usuario</h4>
            <span class="font-semibold">jucave_56</span>
          </div>
          <div class="flex flex-col">
            <h4 class="">Estado</h4>
            <span class="font-semibold">ACTIVO</span>
          </div>
        </div>
        <div class="grid grid-cols-2 grid-flow-row gap-6 mt-5 px-3">
          <div class="flex flex-col col-span-2">
            <h4 class="">Cantidad de ventas el ultimo mes</h4>
            <span class="font-semibold">200</span>
          </div>
          <div class="flex flex-col">
            <h4 class="">Promedio de ventas mensual</h4>
            <span class="font-semibold">600</span>
          </div>
          <div class="flex flex-col">
            <h4 class="">Promedio de ventas diarias</h4>
            <span class="font-semibold">20</span>
          </div>
        </div>
      </div>
      <div class="border-2 border-gray-200 w-3/5 rounded-lg p-2">
        <data-table
          :allKeys="allKeys"
        >
          <template v-slot:title>
            <h4 class="font-bold text-lg">
              Transacciones
            </h4>
          </template>
          <!-- <template v-slot:button-create>
            <button
              class="bg-primary p-2 rounded text-white dark:bg-primaryDark"
              @click="openModalUser"
            >
              {{ languagei18n("users.BTN_CREATE") }}
            </button>
          </template> -->
        </data-table>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
    components:{
        DataTable: defineAsyncComponent(()=> import('@/components/DataTable.vue')),
    },
    setup(){
        return{
            allKeys:[
                'name',
                'lastname'
            ]
        }
    }
};
</script>

<style>
</style>