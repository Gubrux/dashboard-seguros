import type { App } from "vue";

export const moneyFormatter = (value: number) => {
  // value = value / 1000;
  return value.toLocaleString("es-PY", {
    style: "currency",
    currency: "PYG",
  });
};

export const quantityFormatter = (value: number) => {
  return new Intl.NumberFormat("es-PY").format(value);
};

export const moneyFormatterAnterior = (value: Number) => {
  return value.toLocaleString("es-PY", {
    style: "currency",
    currency: "PYG",
  });
};

const moneyFormatterComponent = {
  methods: {
    moneyFormatter: moneyFormatter,
  },
};

const quantityFormatterComponent = {
  methods: {
    quantityFormatter: quantityFormatter,
  },
};

export default {
  install(app: App) {
    app.mixin(moneyFormatterComponent);
    app.mixin(quantityFormatterComponent);
  },
};
