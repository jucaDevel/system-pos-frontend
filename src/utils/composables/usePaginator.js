import { ref, computed, watch } from 'vue';

const usePaginator = (values = []) => {
    const columnsPerPageOptions = ref([5,10,15])
    const columnsPerPage = ref(columnsPerPageOptions.value[0])
    const currentPage = ref(1)
    const dataValues = ref(values)
    const newDataValues = ref([])

    /** Funcion para filtrar la data*/
    const filterData = (searchValue) => {
      /** Se realiza un filter sobre la data actual, luego de eso se obtienen los valores de cada posición del array, se recorren igualmente
       * y posterior a eso se valida si algun valor de ese objeto coincide con el valor pasado como parametro
      */
      dataValues.value = values.filter((item) => {
        return Object.values(item).some( value => String(value).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      })
    }
    
    // const filterDataByField = (type, searchField, searchValue) => {
    //   switch (type) {
    //     case 'equal':
    //       dataValues.value = values.filter((value) => {
    //         return String(value[searchField]).toLocaleLowerCase() === searchValue.toLocaleLowerCase()
    //       })
    //       break;
    //     case 'contains':
    //       dataValues.value = values.filter((value) => {
    //         return String(value[searchField]).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    //       })
    //       break;
    //     case 'diferent':
    //       dataValues.value = values.filter((value) => {
    //         return String(value[searchField]).toLocaleLowerCase() !== searchValue.toLocaleLowerCase()
    //       })
    //       break;
    //     case 'not_contains':
    //       dataValues.value = values.filter((value) => {
    //         return !String(value[searchField]).toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    //       })
    //       break;
      
    //     default:

    //       break;
    //   }
    // }

    const filterDataByFields = (arrayFilters) => {
      for (const { paramSearch,optionsSearch,searchValueOption } of arrayFilters) {
        switch (paramSearch) {
          case 'equal':
            newDataValues.value = values.filter((value) => {
              return String(value[optionsSearch]).toLocaleLowerCase() === searchValueOption.toLocaleLowerCase()
            })
            break;
          case 'contains':
            newDataValues.value = values.filter((value) => {
              return String(value[optionsSearch]).toLocaleLowerCase().includes(searchValueOption.toLocaleLowerCase())
            })
            break;
          case 'diferent':
            newDataValues.value = values.filter((value) => {
              return String(value[optionsSearch]).toLocaleLowerCase() !== searchValueOption.toLocaleLowerCase()
            })
            break;
          case 'not_contains':
            newDataValues.value = values.filter((value) => {
              return !String(value[optionsSearch]).toLocaleLowerCase().includes(searchValueOption.toLocaleLowerCase())
            })
            break;
        
          default:
            
            break;
        }
      }
      
      dataValues.value = newDataValues.value
    }


    /** Propiedad computada para retornar siempre los datos correspondientes con la cantidad de columnas deseada*/
    const paginatedValues = computed(() => {
      const start = (currentPage.value - 1) * columnsPerPage.value;
      const end = start + columnsPerPage.value;
      return dataValues.value.slice(start, end);
    });

    const totalPages = computed(() => {
      /** Calcula la cantidad de paginas*/
      if(dataValues.value.length == 0) return 1
      return Math.ceil(dataValues.value.length / columnsPerPage.value);
    });

    /** Watcher que evita que el currentPage sea mayor al total de paginas*/
    watch([columnsPerPage, currentPage], () => {
      if (currentPage.value > totalPages.value) {
        currentPage.value = totalPages.value;
      }
    });

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    return {
      columnsPerPageOptions,
      currentPage,
      totalPages,
      columnsPerPage,
      paginatedValues,
      prevPage,
      nextPage,
      filterData,
      filterDataByFields
    }
}

export default usePaginator