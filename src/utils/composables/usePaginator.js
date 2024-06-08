import { ref, computed, watch } from 'vue';

const usePaginator = (values) => {
    const columnsPerPageOptions = ref([5,10,15])
    const columnsPerPage = ref(columnsPerPageOptions.value[0])
    const currentPage = ref(1)

    /** Propiedad computada para retornar siempre los datos correspondientes con la cantidad de columnas deseada*/
    const paginatedValues = computed(() => {
      const start = (currentPage.value - 1) * columnsPerPage.value;
      const end = start + columnsPerPage.value;
      return values.slice(start, end);
    });

    const totalPages = computed(() => {
      /** Calcula la cantidad de paginas*/
      return Math.ceil(values.length / columnsPerPage.value);
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
      nextPage
    }
}

export default usePaginator