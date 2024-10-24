import { ComponentCustomProperties } from "vue";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    moneyFormatter: (value: number) => string;
    quantityFormatter: (value: number) => string;
  }
}
