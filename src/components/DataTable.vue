<template>
  <div class="flex items-left justify-between mb-3">
    <div class="flex flex-row items-center">
      <span class="dark:text-white">
        <slot name="title" />
      </span>
      <span class="mx-4 bg-primary bg-opacity-40 px-3 rounded-lg dark:text-white dark:bg-primaryDark dark:bg-opacity-40">{{
        paginatedValues.length
      }}</span>
      <slot name="button-create" />
    </div>
    <div>
      <div class="flex flex-row justify-between">
        <div class="flex gap-2">
          <input
            type="text"
            class="border-2 rounded px-2 dark:bg-secondaryDark"
            :placeholder="languagei18n('common.SEARCH_SENTENCE')"
            v-model="searchValue"
          />
          <button
            class="px-4 border-2 border-secondary border-opacity-60 rounded-lg dark:border-gray-400"
            @click="handleModal(true)"
          >
            <font-awesome-icon
              :icon="['fas', 'filter']"
              class="text-secondary dark:text-gray-400"
            />
            <span class="mx-2 font-semibold dark:text-gray-400">{{
              languagei18n("common.FILTERS_SENTENCE")
            }}</span>
          </button>
        </div>
        <div class="px-4">
          <select
            name=""
            id=""
            class="hover:text-secondaryLight border-2 rounded px-2 dark:bg-secondaryDark dark:text-gray-300 dark:border-gray-400"
          >
            <option value="xls">Excel</option>
            <option value="pdf">PDF</option>
            <option value="csv">CSV</option>
          </select>
          <font-awesome-icon
            :icon="['fas', 'download']"
            class="pl-4 text-secondary cursor-pointer dark:text-gray-400"
            :title="languagei18n('common.EXPORT')"
          />
        </div>
      </div>
      <!-- <button class="mx-2 border-2 border-secondary border-opacity-60 px-3 rounded-lg">...</button> -->
    </div>
  </div>
  <div class="border-2 rounded-lg flex flex-col h-5/6 overflow-hidden dark:border-gray-500">
    <div class="flex-grow overflow-y-auto">
      <table class="w-full">
        <thead class="bg-gray-300 sticky top-0 dark:bg-gray-600 dark:text-gray-300">
          <th class="p-2 text-left" v-for="title in titles" :key="title">
            {{ languagei18n(`nameFields.${title.toUpperCase()}`) }}
          </th>
          <th class="p-2 text-left">{{languagei18n('nameFields.ACTIONS')}}</th>
        </thead>
        <tbody class="dark:text-gray-300" v-if="paginatedValues.length > 0">
          <tr v-for="value in paginatedValues" :key="value.id">
            <td
              class="border-b-2 p-2 text-left"
              v-for="title in titles"
              :key="title"
            >
              {{ value[title] }}
            </td>
            <td class="border-b-2 p-2">
              <div class="flex flex-row items-center justify-between">
                <font-awesome-icon
                  :icon="['fas', 'pen-to-square']"
                  class="mx-2 bg-primary rounded w-full p-1 cursor-pointer text-white"
                  :title="languagei18n('common.EDIT')"
                  @click="onUpdateRegister(value.id)"
                />
                <font-awesome-icon
                  :icon="['fas', 'ban']"
                  class="mx-2 bg-red-600 rounded w-full p-1 cursor-pointer text-white"
                  :title="languagei18n('common.INHABILITATE')"
                  @click="onDeleteRegister(value.id)"
                />
              </div>
            </td>
          </tr>
        </tbody>
        <div class="dark:text-gray-300 flex items-center justify-center" v-else>
          <h1>{{languagei18n('common.NO_DATA')}}</h1>
        </div>
      </table>
    </div>
    <footer class="bg-gray-100 px-4 py-3 flex justify-between dark:bg-gray-600">
      <div>
        <span class="mx-2 font-semibold dark:text-gray-300">{{
          languagei18n("common.SHOW_SENTECE")
        }}</span>
        <select
          name=""
          id=""
          class="hover:text-secondaryLight border-2 rounded px-2 dark:bg-gray-600 dark:text-gray-300 dark:border-gray-400"
          v-model="columnsPerPage"
        >
          <option v-for="option in columnsPerPageOptions" :key="option" :value="option">{{option}}</option>
        </select>
        <span class="mx-2 font-semibold dark:text-gray-300">{{
          languagei18n("common.COLUMNS_SENTENCE")
        }}</span>
      </div>
      <div class="flex justify-between gap-4">
        <button
          class="border-2 rounded-lg px-2 border-secondary border-opacity-60 dark:border-gray-400"
          @click="prevPage"
        >
          <font-awesome-icon
            :icon="['fas', 'circle-chevron-left']"
            class="text-secondary dark:text-gray-400"
          />
        </button>
        <span class="dark:text-gray-300">{{
          `${languagei18n("common.PAGE_FOOTER")} ${currentPage} ${languagei18n(
            "common.OF_FOOTER"
          )} ${totalPages}`
        }}</span>
        <button
          class="border-2 rounded-lg px-2 border-secondary border-opacity-60 dark:border-gray-400"
          @click="nextPage"
        >
          <font-awesome-icon
            :icon="['fas', 'circle-chevron-right']"
            class="text-secondary dark:text-gray-400"
          />
        </button>
      </div>
    </footer>
  </div>
  <modal-view v-if="isModalOpen" @on:close="handleModal(false)">
    <template v-slot:header>
      <h1>Filtros</h1>
    </template>
    <template v-slot:body>
      <div class="h-full p-3 dark:bg-gray-600"> 
        <button class="mb-3 rounded bg-primary text-white p-2" @click="addNewFilter">Agregar Filtro</button>
        <form>
          <div v-for="optFilter in arrayFilters" :key="optFilter.idFilter" class="flex justify-around my-3 w-full">  
            <select
              class="rounded border-2 border-gray-100 p-1"
              @change="(e) => changePropFilter(e,optFilter.idFilter,'optionsSearch')">
              <option v-for="title in allKeys" :key="title" :value="title">{{languagei18n(`nameFields.${title.toUpperCase()}`)}}</option>
            </select>
            <select
              class="rounded border-2 border-gray-100 p-1"
              @change="(e) => changePropFilter(e,optFilter.idFilter,'paramSearch')">
              <option v-for="opt in filterOptions" :key="opt" :value="opt">{{languagei18n(`filterOptions.${opt.toUpperCase()}`)}}</option>
            </select>
            <input
              type="text"
              class="rounded border-2 border-gray-100 p-1"
              @keyup="(e) => changePropFilter(e,optFilter.idFilter,'searchValueOption')">
            <button class="rounded-lg flex items-center justify-center">
              <font-awesome-icon
                  :icon="['fas', 'ban']"
                  class="bg-red-600 rounded p-2 cursor-pointer text-white"
                  :title="languagei18n('common.INHABILITATE')"
                  @click="deleteFilter(optFilter.idFilter)"
                />
            </button>
          </div>
        </form>
      </div>
    </template>
    <template v-slot:footer>
      <div class="flex items-end justify-end">
        <button class="bg-primary rounded text-white p-2 w-20" @click="handleFilter">
          {{languagei18n("common.FILTER_SEARCH")}}
        </button>
      </div>
    </template>
  </modal-view>
</template>

<script>
import {ref, watch} from 'vue'
import usePaginator from '@/utils/composables/usePaginator'
import { useI18n } from "vue-i18n";
import ModalView from '@/components/ModalView'
export default {
  components:{
    ModalView
  },
  props:{
    allKeys:{
      type: Array,
      required: true
    },
    allValues:{
      type: Array,
      required: true
    }
  },
  setup(props, {emit}) {
    const { t:languagei18n } = useI18n()
    const searchValue = ref(null)
    const isModalOpen = ref(true)
    const currentIdFilter = ref(0)
    /** Se usa composable para simplificar el componente*/
    const {
      columnsPerPageOptions,
      currentPage,
      totalPages,
      columnsPerPage,
      paginatedValues,
      prevPage,
      nextPage,
      filterData,
      filterDataByFields
    } = usePaginator(props.allValues)

    const filterOptions = ['equal','contains','diferent','not_contains']

    const arrayFilters = ref([
      {
        idFilter:0,
        paramSearch: filterOptions[0],
        optionsSearch: props.allKeys[0],
        searchValueOption: null
      }
    ])

    watch(
      searchValue,
      (newSearhValue) => {
        filterData(newSearhValue)
      }
    )

    const onUpdateRegister = (idValue) => {
      emit('on:updateRegister', idValue)
    }

    const onDeleteRegister = (idValue) => {
      emit('on:deleteRegister', idValue)
    }

    const handleModal = (isOpen) => {
      if(paginatedValues.value.length > 0){
        isModalOpen.value = isOpen
      }
    }

    const handleFilter = () => {
      filterDataByFields(arrayFilters.value)
      handleModal(false)
    }

    const addNewFilter = () => {
      const newIdFilter = currentIdFilter.value + 1
      const newDataFilter = [
        ...arrayFilters.value,
        {
          idFilter:newIdFilter,
          paramSearch: filterOptions[0],
          optionsSearch: props.allKeys[0],
          searchValueOption: null
        }
      ]

      arrayFilters.value = newDataFilter
    }

    const changePropFilter = (event, idFilter, propName) => {
      const propValue = event.target.value
      arrayFilters.value.forEach(filter => {
        if(idFilter === filter.idFilter ){
          filter[propName] = propValue
        }
      });
    }

    const deleteFilter = (idFilter) => {
      arrayFilters.value = arrayFilters.value.filter(filter => filter.idFilter !== idFilter)
    }

    return {
      languagei18n,
      columnsPerPageOptions,
      currentPage,
      totalPages,
      columnsPerPage,
      searchValue,
      isModalOpen,
      filterOptions,
      arrayFilters,

      paginatedValues,
      titles: props.allKeys,
      prevPage,
      nextPage,
      onUpdateRegister,
      onDeleteRegister,
      handleModal,
      handleFilter,
      addNewFilter,
      changePropFilter,
      deleteFilter
    };
  },
};
</script>