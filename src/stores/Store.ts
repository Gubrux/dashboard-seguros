import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("storeId", {
  state: () => {
    const earningChartRef = ref<HTMLDivElement | null>(null);
    const naveHeader = ref<boolean>(false);
    const iconHover = ref<boolean>(false);
    const paginationLength = ref();
    const emaiComposeMenuToggle = ref(false);
    const parametros = ref([
      {
        key: "CODIGO_SECCIONES_INDIVIDUALES",
        value: [0, 4],
      },
    ]);
    const colorArray = [
      "#46c9e3",
      "#3ac977",
      "#f2a538",
      "#E28059",
      "#D75927",
      "#FC025F",
      "#FE00B7",
      "#CA04FA",
      "#9401FD",
      "#05C1F9",
      "#06F8E0",
      "#06F8A9",
      "#12EC73",
      "#15E929",
      "#37C751",
      "#DFBF1F",
    ];
    return {
      openChatbox: false,
      seriesType: "week",
      earningChartRef,
      naveHeader,
      iconHover,
      paginationLength,
      emaiComposeMenuToggle,
      parametros,
      colorArray,
    };
  },
});
