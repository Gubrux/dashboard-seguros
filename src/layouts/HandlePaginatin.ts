import { ref, computed, onMounted, watchEffect, watch } from 'vue'
import { useStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'

const { paginationLength } = storeToRefs(useStore())

export default function handlePagination(UserTable: any, pageNumber: number) {
  const page = ref(1)
  const data = ref()
  data.value = UserTable.map((item: any) => {
    return item
  })
  const searchData = (value: string) => {
    const searchName = value.toLowerCase()
    data.value = UserTable.filter((el: any) => el.name.toLowerCase().includes(searchName))
  }

  let perPage = pageNumber

  const addActive = ref(1)

  const paginatedData = computed(() =>
    data.value.slice((page.value - 1) * perPage, page.value * perPage)
  )

  const nextPage = () => {
    if (page.value !== Math.ceil(data.value.length / perPage)) {
      page.value += 1
      addActive.value = page.value
    }
    paginationLength.value = page.value * perPage
  }

  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1
      addActive.value = page.value
    }
    pageNumber
    paginationLength.value = page.value * perPage
  }

  const goToPage = (numPage: number) => {
    page.value = numPage
    addActive.value = numPage
    paginationLength.value = page.value * perPage
  }

  const dataValue = ref(false)

  const sortingArr = (column: string) => {
    dataValue.value = !dataValue.value;
    data.value.sort((a: any, b: any) => {
      if (typeof a[column] === "string") {
        return dataValue.value
          ? a[column].localeCompare(b[column])
          : b[column].localeCompare(a[column]);
      } else {
        return dataValue.value ? a[column] - b[column] : b[column] - a[column];
      }
    });
  };

  onMounted(() => {
    paginationLength.value = pageNumber
  })

  return {
    data,
    paginatedData,
    perPage,
    page,
    nextPage,
    backPage,
    goToPage,
    searchData,
    addActive,
    sortingArr
  }
}
