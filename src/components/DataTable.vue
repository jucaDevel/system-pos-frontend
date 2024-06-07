<template>
  <div class="flex items-left justify-between mb-3">
      <div class="flex flex-row items-center">
        <slot name="title" />
        <span class="mx-4 bg-primary bg-opacity-40 px-3 rounded-lg">{{
          allValues.length
        }}</span>
        <slot name="button-create" />
      </div>
      <div class="w-2/5">
        <div class="flex flex-row justify-between">
          <div class="flex gap-2">
            <input
              type="text"
              class="border-2 rounded px-2"
              :placeholder="languagei18n('common.SEARCH_SENTENCE')"
            />
            <button
              class="px-4 border-2 border-secondary border-opacity-60 rounded-lg"
            >
              <font-awesome-icon
                :icon="['fas', 'filter']"
                class="text-secondary"
              />
              <span class="mx-2 font-semibold">{{languagei18n('common.FILTERS_SENTENCE')}}</span>
            </button>
          </div>
          <div class="px-4">
            <select
              name=""
              id=""
              class="hover:text-secondaryLight border-2 rounded px-2"
            >
              <option value="xls">Excel</option>
              <option value="pdf">PDF</option>
              <option value="csv">CSV</option>
            </select>
            <font-awesome-icon
              :icon="['fas', 'download']"
              class="pl-4 text-secondary cursor-pointer"
              :title="languagei18n('common.EXPORT')"
            />
          </div>
        </div>
        <!-- <button class="mx-2 border-2 border-secondary border-opacity-60 px-3 rounded-lg">...</button> -->
      </div>
    </div>
    <div class="border-2 rounded-lg flex flex-col h-5/6 overflow-hidden">
      <div class="flex-grow overflow-y-auto">
        <table class="w-full">
          <thead class="bg-gray-300 sticky top-0">
            <th class="p-2 text-left" v-for="title in allKeys" :key="title">
              {{ languagei18n(`headerTables.${title.toUpperCase()}`)}}
            </th>
            <th class="p-2 text-left">Acciones</th>
          </thead>
          <tbody class="">
            <tr v-for="product in allValues" :key="product.id">
              <td
                class="border-b-2 p-2 text-left"
                v-for="value in allKeys"
                :key="value"
              >
                {{ product[value] }}
              </td>
              <td class="border-b-2 p-2">
                <div class="flex flex-row items-center justify-between">
                  <font-awesome-icon
                    :icon="['fas', 'pen-to-square']"
                    class="mx-2 bg-primary rounded w-full p-1 cursor-pointer text-white"
                    :title="languagei18n('common.EDIT')"
                  />
                  <font-awesome-icon
                    :icon="['fas', 'ban']"
                    class="mx-2 bg-red-600 rounded w-full p-1 cursor-pointer text-white"
                    :title="languagei18n('common.INHABILITATE')"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer class="bg-gray-100 px-4 py-3 flex justify-between">
        <div>
          <span class="mx-2 font-semibold">{{languagei18n('common.SHOW_SENTECE')}}</span>
          <select
            name=""
            id=""
            class="hover:text-secondaryLight border-2 rounded px-2"
          >
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <span class="mx-2 font-semibold">{{languagei18n('common.COLUMNS_SENTENCE')}}</span>
        </div>
        <div class="flex justify-between gap-4">
          <button
            class="border-2 rounded-lg px-2 border-secondary border-opacity-60"
          >
            <font-awesome-icon
              :icon="['fas', 'circle-chevron-left']"
              class="text-secondary"
            />
          </button>
          <span>{{`${languagei18n('common.PAGE_FOOTER')} 1 ${languagei18n('common.OF_FOOTER')} 1`}}</span>
          <button
            class="border-2 rounded-lg px-2 border-secondary border-opacity-60"
          >
            <font-awesome-icon
              :icon="['fas', 'circle-chevron-right']"
              class="text-secondary"
            />
          </button>
        </div>
      </footer>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
export default {
    setup(props, { attrs }){
      const { t } = useI18n()
        return{
            languagei18n: t,

            allValues:attrs.allValues,
            allKeys: attrs.allKeys
        }
    }
};
</script>