export const lineChart = {
  series: [
    {
      name: "Net Profit",
      data: [100, 300, 200, 250, 200, 240, 180, 230, 200, 250, 300],
    },
  ],

  chartOptions: {
    chart: {
      type: "area",
      height: 40,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },

    // colors: ['var(--primary)'],
    fill: {
      opacity: 0.9,
      colors: "#119bff",
      type: "gradient",
      gradient: {
        colorStops: [
          {
            offset: 0,
            color: "#119bff",
            opacity: 0.5,
          },
          {
            offset: 0.6,
            color: "#119bff",
            opacity: 0.5,
          },
          {
            offset: 100,
            color: "white",
            opacity: 0,
          },
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 2,
      curve: "straight",
      colors: ["var(--primary)"],
    },

    grid: {
      show: false,
      borderColor: "#FF5E5E",
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: -1,
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
  },
};

export const pieChart = {
  series: [12, 30, 20],
  chartOptions: {
    chart: {
      type: "donut",
      // width: 150
    },
    plotOptions: {
      pie: {
        donut: {
          size: "80%",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 12,
            },
            value: {
              show: true,
              fontSize: "22px",
              fontFamily: "Arial",
              fontWeight: "500",

              offsetY: -17,
            },
            total: {
              show: true,
              fontSize: "11px",
              fontWeight: "500",
              fontFamily: "Arial",
              color: "var(--primary)",
              label: "Compete",

              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: string, b: string) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
    legend: {
      show: false,
    },
    colors: ["#3AC977", "var(--primary)", "var(--secondary)"],
    labels: ["Compete", "Pending", "Not Start", "Anuladas"],
    dataLabels: {
      enabled: false,
    },
  },
};

export const lineChart2 = {
  series: [
    {
      name: "Net Profit",
      data: [100, 300, 200, 250, 200, 240, 180, 230, 200, 250, 300],
      /* radius: 30,	 */
    },
  ],
  chartOptions: {
    chart: {
      type: "area",
      height: 40,
      //width: 400,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    fill: {
      opacity: 0.9,
      colors: "#FF5E5E",
      type: "gradient",
      gradient: {
        colorStops: [
          {
            offset: 0,
            color: "#FF5E5E",
            opacity: 0.5,
          },
          {
            offset: 0.6,
            color: "#FF5E5E",
            opacity: 0.5,
          },
          {
            offset: 100,
            color: "white",
            opacity: 0,
          },
        ],
      },
    },
    // colors: ['var(--primary)'],
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 2,
      curve: "straight",
      colors: ["#FF5E5E"],
    },

    grid: {
      show: false,
      borderColor: "#eee",
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: -1,
      },
    },
    normal: {
      filter: {
        type: "none",
        value: 0,
      },
    },
    hover: {
      filter: {
        type: "none",
        value: 0,
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
        value: 0,
      },
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "August",
      "Sept",
      "Oct",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      style: {
        fontSize: "12px",
      },
    },
    crosshairs: {
      show: false,
      position: "front",
      stroke: {
        width: 1,
        dashArray: 3,
      },
    },
    tooltip: {
      enabled: true,
      formatter: undefined,
      offsetY: 0,
      style: {
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    show: false,
  },
  tooltip: {
    enabled: false,
    style: {
      fontSize: "12px",
    },
    y: {
      formatter: function (val: number) {
        return "$" + val + " thousands";
      },
    },
  },
};

export const columnChart = {
  series: [
    {
      name: "Number of Projects",
      type: "column",
      data: [75, 85, 72, 100, 50, 100, 80, 75, 95, 35, 75, 100],
    },
    {
      name: "Revenue",
      type: "area",
      data: [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42],
    },
    {
      name: "Active Projects",
      type: "line",
      data: [30, 25, 45, 30, 25, 35, 20, 45, 35, 20, 35, 20],
    },
  ],
  chartOptions: {
    chart: {
      height: 300,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 1, 1],
      curve: "straight",
      dashArray: [0, 0, 5],
    },
    legend: {
      fontSize: "13px",
      fontFamily: "poppins",
      labels: {
        colors: "#888888",
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "18%",
        borderRadius: 6,
      },
    },
    fill: {
      //opacity: [0.1, 0.1, 1],
      type: "gradient",
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        /* opacityFrom: 0.85,
            opacityTo: 0.55, */
        colorStops: [
          [
            {
              offset: 0,
              color: "var(--primary)",
              opacity: 1,
            },
            {
              offset: 100,
              color: "var(--primary)",
              opacity: 1,
            },
          ],
          [
            {
              offset: 0,
              color: "#3AC977",
              opacity: 1,
            },
            {
              offset: 0.4,
              color: "#3AC977",
              opacity: 0.15,
            },
            {
              offset: 100,
              color: "#3AC977",
              opacity: 0,
            },
          ],
          [
            {
              offset: 0,
              color: "#FF5E5E",
              opacity: 1,
            },
            {
              offset: 100,
              color: "#FF5E5E",
              opacity: 1,
            },
          ],
        ],
        stops: [0, 100, 100, 100],
      },
    },
    colors: ["var(--primary)", "#3AC977", "#FF5E5E"],
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "month",
      labels: {
        style: {
          fontSize: "13px",
          colors: "#888888",
        },
      },
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
      labels: {
        style: {
          fontSize: "13px",
          colors: "#888888",
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: any) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  },
};

export const getDoughtnutChart = (
  pctNuevas: number,
  pctRenovadas: number,
  pctAnuladas: number,
) => {
  return {
    series: [pctNuevas, pctRenovadas, pctAnuladas],
    chartOption: {
      chart: {
        type: "donut",
        width: 250,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "90%",
            labels: {
              show: true,
              name: {
                show: true,
                offsetY: 12,
              },
              value: {
                show: true,
                fontSize: "24px",
                fontFamily: "Arial",
                fontWeight: "500",
                offsetY: -17,
              },
              total: {
                show: true,
                fontSize: "13px",
                fontWeight: "500",
                fontFamily: "Arial",
                label: "Porcentaje de polizas",

                formatter: function (w: any) {
                  return w.globals.seriesTotals.reduce(
                    (a: number, b: number) => {
                      return Math.round(a + b);
                    },
                    0,
                  );
                },
              },
            },
          },
        },
      },
      legend: {
        show: true,
        position: "bottom",
        fontSize: "18px",
        labels: {
          colors: "#888888",
        },
      },
      colors: ["#3AC977", "#FF9F00", "#FF5E5E"],
      labels: ["Nuevas", "Renovadas", "Anuladas"], // este modifica Project Status
      dataLabels: {
        enabled: false,
      },
    },
  };
};

export const flotBar1Chart = {
  series: [
    {
      name: "bar chart",
      data: [
        [2, 2],
        [2, 8],
        [4, 5],
        [6, 13],
        [8, 5],
        [10, 7],
        [12, 4],
        [14, 6],
        [14, 8],
      ],
      bars: {
        show: true,
        lineWidth: 0,
        fillColor: "#0d99ff",
      },
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    bars: {
      show: true,
      lineWidth: 0,
      fillColor: "#0d99ff",
    },
    chart: {
      type: "bar",
      height: 219,
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)"],
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#858282",
        size: 10,
      },
      labels: {
        formatter: (val: number) => {
          return `${val}.0`;
        },
      },
    },
    xaxis: {
      tickColor: "transparent",
      font: {
        color: "#858282",
        size: 10,
      },
    },
  },
};
export const flotBar2Chart = {
  series: [
    {
      name: "Running",
      data: [50, 18, 70, 40, 90, 70, 20],
    },
    {
      name: "Cycling",
      data: [80, 40, 55, 20, 45, 30, 80],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "100%",
      },
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },

    chart: {
      type: "bar",
      height: 300,
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)", "#FFAA2B"],
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#858282",
        size: 10,
      },
      labels: {
        formatter: (val: number) => {
          return `${val}.0`;
        },
      },
    },
    xaxis: {
      tickColor: "transparent",
      font: {
        color: "#858282",
        size: 10,
      },
    },
  },
};

export const flotLineChart = {
  series: [
    {
      name: "High - 2013",
      data: [2, 3, 6, 5, 7, 8, 10],
    },
    {
      name: "Low - 2013",
      data: [1, 2, 5, 3, 5, 6, 9],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      width: 2,
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },

    chart: {
      type: "line",
      height: 219,
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)", "#ffb64a"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#858282",
        size: 10,
      },
    },
    xaxis: {
      tickColor: "transparent",
      font: {
        color: "#858282",
        size: 10,
      },
      labels: {
        formatter: (val: number) => {
          return `${val}.0`;
        },
      },
    },
  },
};
export const flotLineChart2 = {
  series: [
    {
      name: "High - 2013",
      data: [2, 3, 6, 5, 7, 8, 10],
    },
    {
      name: "Low - 2013",
      data: [1, 2, 5, 3, 5, 6, 9],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },

    chart: {
      type: "line",
      height: 219,
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)", "#ffb64a"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#999",
        size: 8,
      },
    },
    xaxis: {
      tickColor: "transparent",
      font: {
        color: "#999",
        size: 8,
      },
      labels: {
        formatter: (val: number) => {
          return `${val}.0`;
        },
      },
    },
  },
};
export const flotLineChart3 = {
  series: [
    {
      name: "High - 2013",
      data: [10, 7, 8, 9, 6, 5, 7],
    },
    {
      name: "Low - 2013",
      data: [8, 5, 6, 8, 4, 3, 6],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: [4, 4],
      strokeWidth: [2, 2],
      strokeColors: ["var(--primary)", "#ffb64a"],
      border: 2,
      radius: 2,
      colors: ["#fff", "#fff", "#fff"],
      hover: {
        size: 10,
      },
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },

    chart: {
      type: "line",
      height: 219,
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)", "#ffb64a"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#999",
        size: 8,
      },
    },
    xaxis: {
      tickColor: "transparent",
      font: {
        color: "#999",
        size: 8,
      },
      labels: {
        formatter: (val: number) => {
          return `${val}.0`;
        },
      },
    },
  },
};

export const flotArea1 = {
  series: [
    {
      name: "High - 2013",
      data: [2, 3, 6, 5, 7, 8, 10],
    },
    {
      name: "Low - 2013",
      data: [1, 2, 5, 3, 5, 6, 9],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },

    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    fill: {
      colors: ["var(--primary)", "#ffb64a"],
      opacity: 1,
      type: "solid",
    },

    chart: {
      type: "area",
      height: 219,
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)", "#ffb64a"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#999",
        size: 8,
      },
    },
    xaxis: {
      tickColor: "transparent",
      font: {
        color: "#999",
        size: 8,
      },
      labels: {
        formatter: (val: number) => {
          return `${val}.0`;
        },
      },
    },
  },
};
export const flotArea2 = {
  series: [
    {
      name: "High - 2013",
      data: [2, 3, 6, 5, 7, 8, 10],
    },
    {
      name: "Low - 2013",
      data: [1, 2, 5, 3, 5, 6, 9],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },

    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    fill: {
      colors: ["var(--primary)", "#ffb64a"],
      opacity: 1,
      type: "solid",
    },

    chart: {
      type: "area",
      height: 219,
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)", "#ffb64a"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#999",
        size: 8,
      },
    },
    xaxis: {
      tickColor: "transparent",
      font: {
        color: "#999",
        size: 8,
      },
      labels: {
        formatter: (val: number) => {
          return `${val}.0`;
        },
      },
    },
  },
};

export const morris_donught = {
  series: [30, 12, 20],
  chartOption: {
    chart: {
      type: "donut",
      width: 250,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 12,
            },
            value: {
              show: true,
              fontSize: "24px",
              fontFamily: "Arial",
              fontWeight: "500",
              offsetY: -17,
            },
            total: {
              show: true,
              fontSize: "11px",
              fontWeight: "500",
              fontFamily: "Arial",

              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: string, b: string) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
    legend: {
      show: false,
    },
    colors: ["#ff5c00", "#0d99ff", "#ffaa2b"],
    labels: ["In-Store-Salse", "Download Salse", "Mail-Order-Salse"],
    dataLabels: {
      enabled: false,
    },
  },
};

export const morris_line = {
  series: [
    {
      name: "line-chart",
      data: [3, 4, 3, 6, 4, 15, 2],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "bottom",
        },
      },
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },

    chart: {
      type: "line",
      height: 219,
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        show: false,
      },
    },
    xaxis: {
      tickColor: "transparent",
      font: {
        color: "#999",
        size: 8,
      },
      show: false,
    },
  },
};

export const morris_bar = {
  series: [
    {
      name: "Net Profit",
      data: [110, 85, 60, 85, 60, 85, 110],
    },
    {
      name: "Revenue",
      data: [100, 75, 50, 75, 50, 75, 100],
    },
    {
      name: "Free Cash Flow",
      data: [70, 50, 40, 50, 40, 50, 50],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },

    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)", "#ffaa2b", "#ff9f00"],
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#858282",
        size: 10,
      },
    },
    xaxis: {
      categories: ["2006", "", "2008", "", "2010", "", "2006"],
    },
  },
};

export const line_chart_2 = {
  series: [
    {
      name: "High - 2013",
      data: [0, 90, 40, 30, 150, 25, 10],
    },
    {
      name: "mid - 2013",
      data: [0, 60, 80, 47, 40, 80, 10],
    },
    {
      name: "Low - 2013",
      data: [0, 25, 35, 17, 120, 40, 10],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    markers: {
      size: [4, 4],
      strokeWidth: [2, 2],
      strokeColors: ["#E47379", "#ffb64a"],
      border: 2,
      radius: 2,
      colors: ["var(--primary)", "#00abc5", "var(--primary)"],
      hover: {
        size: 10,
      },
    },
    grid: {
      borderWidth: 2,
      borderColor: "transparent",
    },

    chart: {
      type: "line",
      height: 219,
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)", "#00abc5", "var(--primary)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#999",
        size: 8,
      },
    },
    xaxis: {
      categories: ["2001", "2002", "2003", "2004", "2005", "2006", "2007"],
    },
  },
};

export const morris_bar_stalked = {
  series: [
    {
      name: "Q1 Budget",
      group: "budget",
      data: [
        44000, 55000, 41000, 67000, 22000, 43000, 44000, 55000, 41000, 67000,
        22000, 43000,
      ],
    },

    {
      name: "Q2 Budget",
      group: "budget",
      data: [
        13000, 36000, 20000, 8000, 13000, 27000, 13000, 36000, 20000, 8000,
        13000, 27000,
      ],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },

    chart: {
      type: "bar",
      height: 350,
      toolbar: false,
      stacked: true,
    },

    colors: ["var(--primary)", "var(--rgba-primary-1)"],
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#858282",
        size: 10,
      },
    },
    xaxis: {
      categories: ["2006", "", "2008", "", "2010", "", "2006"],
    },
  },
};

export const morris_area = {
  series: [
    {
      name: "High - 2013",
      data: [0, 90, 40, 30, 150, 25, 10],
    },
    {
      name: "mid - 2013",
      data: [0, 60, 80, 47, 40, 80, 10],
    },
    {
      name: "Low - 2013",
      data: [0, 25, 35, 17, 120, 40, 10],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 0,
    },

    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    fill: {
      colors: ["#55b2f6", "#25dfad", "#ea8342"],
      opacity: 1,
      type: "solid",
    },

    chart: {
      type: "area",
      height: 219,
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)", "#ffb64a"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#999",
        size: 8,
      },
    },
    xaxis: {
      categories: ["2001", "2002", "2003", "2004", "2005", "2006", "2007"],
    },
  },
};

export const barChart_1 = {
  type: "bar",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#fff",
        borderWidth: "0",
        colors: "#fff",
        barPercentage: 0.5,
        backgroundColor: "rgba(44, 44, 44, 1)",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        show: false,
        //display:0,
        //labelFontColor: '#fff',

        ticks: {
          beginAtZero: true,
          color: "#888",

          fontColor: "#888",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          fontColor: "#888",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};

export const barChart_2 = {
  type: "bar",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#fff",
        backgroundColor: (ctx: any) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(0, 0, 0, 250);

          gradient.addColorStop(0, "rgba(44, 44, 44, 1)");
          gradient.addColorStop(1, "rgba(44, 44, 44, 0.5)");

          return gradient;
        },
        borderWidth: "0",
        colors: "#fff",
        barPercentage: 0.5,
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        show: false,

        ticks: {
          beginAtZero: true,
          color: "#888",

          fontColor: "#888",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          fontColor: "#888",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};
export const barChart_3 = {
  type: "bar",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Red",
        backgroundColor: "#ee3c3c",
        hoverBackgroundColor: "#ee3c3c",
        data: ["12", "12", "12", "12", "12", "12", "12"],
      },
      {
        label: "Green",
        backgroundColor: "#627eea",
        hoverBackgroundColor: "#627eea",
        data: ["12", "12", "12", "12", "12", "12", "12"],
      },
      {
        label: "Blue",
        backgroundColor: "#000",
        hoverBackgroundColor: "#000",
        data: ["12", "12", "12", "12", "12", "12", "12"],
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        show: false,
        stacked: true,

        ticks: {
          beginAtZero: true,
          color: "#888",

          fontColor: "#888",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here
        stacked: true,
        ticks: {
          fontColor: "#888",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};
export const lineChart_1 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 20, 60, 41, 66, 45, 80],
        borderColor: "rgba(44, 44, 44, 1)",
        borderWidth: "2",
        backgroundColor: "transparent",
        tension: 0.5,
        pointBackgroundColor: "rgba(44, 44, 44, 1)",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        show: false,
        borderColor: "#fff",

        ticks: {
          beginAtZero: true,
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};
export const lineChart_2 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 20, 60, 41, 66, 45, 80],
        borderColor: "rgba(44, 44, 44, 1)",
        borderWidth: "2",
        backgroundColor: (ctx: any) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(500, 0, 100, 0);

          gradient.addColorStop(0, "rgba(44, 44, 44, 1)");
          gradient.addColorStop(1, "rgba(44, 44, 44, 0.5)");

          return gradient;
        },
        tension: 0.5,
        pointBackgroundColor: "rgba(44, 44, 44, 1)",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        show: false,
        borderColor: "#fff",

        ticks: {
          beginAtZero: true,
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};
export const lineChart_3 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 20, 60, 41, 66, 45, 80],
        borderColor: "rgba(44, 44, 44, 1)",
        borderWidth: "2",
        backgroundColor: (ctx: any) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(0, 0, 0, 160);
          gradient.addColorStop(0, "green");
          gradient.addColorStop(0.5, "cyan");
          gradient.addColorStop(1, "green");

          return gradient;
        },
        tension: 0.5,
        pointBackgroundColor: "rgba(44, 44, 44, 1)",
      },
      {
        label: "My First dataset",
        data: [5, 20, 15, 41, 35, 65, 80],
        borderColor: "rgba(44, 44, 44, 1)",
        borderWidth: "2",
        backgroundColor: "rgba(255, 92, 0, 1)",
        tension: 0.5,
        pointBackgroundColor: "rgba(44, 44, 44, 1)",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        show: false,
        borderColor: "#fff",

        ticks: {
          beginAtZero: true,
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};
export const areaChart_1 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 20, 60, 41, 66, 45, 80],
        borderColor: "rgba(0, 0, 1128, .3)",
        borderWidth: 1,
        tension: 0.5,
        backgroundColor: "rgba(44, 44, 44,1)",
        pointBackgroundColor: "rgba(0, 0, 1128, .3)",
        fill: {
          target: true,
        },
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        show: false,
        borderColor: "#fff",

        ticks: {
          beginAtZero: true,
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};
export const areaChart_2 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 20, 60, 41, 66, 45, 80],
        borderColor: "#ff2625",
        borderWidth: "4",
        tension: 0.5,
        backgroundColor: "rgba(44, 44, 44,1)",
        pointBackgroundColor: "rgba(0, 0, 1128, .3)",
        fill: {
          target: true,
          above: "#fde6e6",
          below: "rgb(0, 0, 255)",
        },
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        show: false,
        borderColor: "#fff",

        ticks: {
          beginAtZero: true,
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};
export const areaChart_3 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 20, 60, 41, 66, 45, 80],
        borderColor: "rgba(0, 0, 1128, .3)",
        borderWidth: 1,
        tension: 0.5,
        backgroundColor: "rgba(44, 44, 44,1)",
        pointBackgroundColor: "rgba(0, 0, 1128, .3)",
        fill: {
          target: true,
        },
      },
      {
        label: "My First dataset",
        data: [5, 25, 20, 41, 36, 75, 70],
        borderColor: "rgb(255, 92, 0)",
        borderWidth: 1,
        backgroundColor: "rgba(255, 92, 0, .5)",
        tension: 0.5,
        pointBackgroundColor: "rgba(0, 0, 1128, .3)",
        fill: {
          target: true,
        },
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        show: false,
        borderColor: "#fff",

        ticks: {
          beginAtZero: true,
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};
export const pie_chart = {
  data: {
    defaultFontFamily: "Poppins",
    type: "pie",
    datasets: [
      {
        data: [45, 25, 20, 10],
        borderWidth: 0,
        backgroundColor: [
          "rgba(44, 44, 44, .9)",
          "rgba(44, 44, 44, .7)",
          "rgba(44, 44, 44,1)",
          "rgba(0,0,0,0.07)",
        ],
        hoverBackgroundColor: [
          "rgba(44, 44, 44, .9)",
          "rgba(44, 44, 44, .7)",
          "rgba(44, 44, 44,1)",
          "rgba(0,0,0,0.07)",
        ],
      },
    ],
    labels: ["one", "two", "three", "four"],
  },
  options: {
    plugins: {
      legend: false,
      responsive: true,
    },

    aspectRatio: 2,
  },
};
export const doughnut_chart = {
  data: {
    defaultFontFamily: "Poppins",
    type: "doughnut",
    datasets: [
      {
        data: [45, 25, 20],
        borderWidth: 1,
        weight: 1,
        borderColor: "rgba(255,255,255,1)",
        backgroundColor: [
          "rgba(44, 44, 44, 1)",
          "rgba(98, 126, 234, 1)",
          "rgba(238, 60, 60, 1)",
        ],
        hoverBackgroundColor: [
          "rgba(44, 44, 44, 0.9)",
          "rgba(98, 126, 234, .9)",
          "rgba(238, 60, 60, .9)",
        ],
      },
    ],
  },
  options: {
    cutout: 30,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
    },
  },
};
export const polar_chart = {
  data: {
    defaultFontFamily: "Poppins",
    datasets: [
      {
        data: [15, 18, 9, 6, 19],
        borderWidth: 0,
        backgroundColor: [
          "rgba(44, 44, 44, 1)",
          "rgba(98, 126, 234, 1)",
          "rgba(238, 60, 60, 1)",
          "rgba(54, 147, 255, 1)",
          "rgba(255, 92, 0, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 2,
    //maintainAspectRatio: false
  },
};
export const radar_chart = {
  type: "radar",
  data: {
    defaultFontFamily: "Poppins",
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 66, 45, 56, 55, 40],
        borderColor: "#ffff",
        borderWidth: "0",
        backgroundColor: (ctx: any) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(500, 0, 100, 0);

          gradient.addColorStop(0, "rgba(68, 0, 235, .5)");
          gradient.addColorStop(1, "rgba(68, 236, 245, .5)");

          return gradient;
        },
      },
      {
        label: "My Second dataset",
        data: [28, 12, 40, 19, 63, 27, 87],
        borderColor: "#ffff",
        borderWidth: "0",
        backgroundColor: (ctx: any) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(500, 0, 100, 0);

          gradient.addColorStop(0, "rgba(54, 185, 216, .5)");
          gradient.addColorStop(1, "rgba(75, 255, 162, .5)");

          return gradient;
        },
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    maintainAspectRatio: false,
    scales: {
      r: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  },
};
export const widgetChart1 = {
  type: "bar",

  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgba(255, 255, 255, .8)",
        borderWidth: "0",
        barPercentage: 0.5,
        backgroundColor: "rgba(255, 255, 255, .8)",
        hoverBackgroundColor: "rgba(255, 255, 255, .8)",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          beginAtZero: true,
          display: false,
          max: 100,
          min: 0,
          stepSize: 10,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        display: false,
        barPercentage: 0.5,
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};
export const chart_widget_2 = {
  type: "bar",

  data: {
    defaultFontFamily: "Poppins",
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 54, 76],
        borderWidth: "0",
        barPercentage: 0.2,
        backgroundColor: "rgba(44, 44, 44, 1)",
        hoverBackgroundColor: "#000000",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          beginAtZero: true,
          display: false,
          max: 100,
          min: 0,
          stepSize: 10,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        display: false,
        barPercentage: 0.5,
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};
export const chart_widget_7 = {
  type: "bar",

  data: {
    defaultFontFamily: "Poppins",
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 54, 76],
        borderColor: "#ff2c53",
        borderWidth: "0",
        barPercentage: 0.5,
        backgroundColor: "#ff2c53",
        hoverBackgroundColor: "#ff2c53",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          beginAtZero: true,
          display: false,
          max: 100,
          min: 0,
          stepSize: 10,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        display: false,
        barPercentage: 0.5,
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};
export const chart_widget_3 = {
  type: "bar",
  data: {
    defaultFontFamily: "Poppins",
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Expense",
        backgroundColor: "#ff2c53",
        hoverBackgroundColor: "#ff5777",
        barPercentage: 0.2,
        data: [
          "20",
          "14",
          "18",
          "25",
          "27",
          "22",
          "12",
          "24",
          "20",
          "14",
          "18",
          "16",
        ],
      },
      {
        label: "Earning",
        backgroundColor: "#F1F3F7",
        hoverBackgroundColor: "#F1F3F7",
        barPercentage: 0.2,
        data: [
          "12",
          "18",
          "14",
          "7",
          "5",
          "10",
          "20",
          "8",
          "12",
          "18",
          "14",
          "16",
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    title: {
      display: false,
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        stacked: true,
        ticks: {
          beginAtZero: true,
          display: false,
          max: 100,
          min: 0,
          stepSize: 10,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        display: false,
        stacked: true,
        barPercentage: 0.5,
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};
export const chart_widget_4 = {
  type: "bar",
  data: {
    defaultFontFamily: "Poppins",
    labels: [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "forteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
      "twenty",
    ],
    datasets: [
      {
        label: "Expense",
        backgroundColor: "#430b58",
        barPercentage: 0.2,
        hoverBackgroundColor: "#6c2586",
        data: [
          20, 14, 18, 25, 27, 22, 12, 24, 20, 14, 18, 16, 34, 32, 43, 36, 56,
          12, 23, 34,
        ],
      },
      {
        label: "Earning",
        backgroundColor: "#F1F3F7",
        barPercentage: 0.2,
        hoverBackgroundColor: "#F1F3F7",
        data: [
          32, 58, 34, 37, 15, 41, 24, 38, 52, 38, 24, 19, 54, 34, 23, 34, 35,
          22, 43, 33,
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    title: {
      display: false,
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        stacked: true,
        ticks: {
          beginAtZero: true,
          display: false,
          max: 100,
          min: 0,
          stepSize: 10,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        display: false,
        stacked: true,
        barPercentage: 0.5,
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};
export const chart_widget_5 = {
  series: [
    {
      name: "High - 2013",
      data: [4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },

    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    fill: {
      colors: ["#20DEA6"],
      opacity: 1,
      type: "solid",
    },

    chart: {
      type: "area",
      height: 200,
      toolbar: {
        show: false,
      },
      offsetY: 27,
    },

    colors: ["#20DEA6"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      show: false,
      labels: {
        show: false,
      },
      font: {
        color: "#999",
        size: 8,
      },
    },
    xaxis: {
      tickColor: "transparent",
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
      font: {
        color: "#999",
        size: 8,
      },
    },
  },
};
export const chart_widget_6 = {
  series: [
    {
      name: "High - 2013",
      data: [4, 5, 3.5, 5, 4, 5.5, 3.8, 4.6],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },

    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    fill: {
      colors: ["#abdceb"],
      opacity: 1,
      type: "solid",
    },

    chart: {
      type: "area",
      height: 200,
      toolbar: {
        show: false,
      },
      offsetY: 27,
    },

    colors: ["#58bad7"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      show: false,
      labels: {
        show: false,
      },
      font: {
        color: "#999",
        size: 8,
      },
    },
    xaxis: {
      tickColor: "transparent",
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
      font: {
        color: "#999",
        size: 8,
      },
    },
  },
};
export const chart_widget_9 = {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "January",
      "February",
      "March",
      "April",
    ],
    datasets: [
      {
        label: "Sales Stats",
        backgroundColor: "#2780d4",
        borderColor: "#2780d4",
        pointBackgroundColor: "#2780d4",
        pointBorderColor: "#2780d4",
        pointHoverBackgroundColor: "#2780d4",
        pointHoverBorderColor: "#2780d4",
        data: [
          20, 10, 18, 15, 32, 18, 15, 22, 8, 6, 12, 13, 10, 18, 14, 24, 16, 12,
          19, 21, 16, 14, 24, 21, 13, 15, 27, 29, 21, 11, 14, 19, 21, 17,
        ],
        fill: true,
      },
    ],
  },
  options: {
    title: {
      display: !1,
    },
    tooltips: {
      intersect: !1,
      mode: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
    plugins: {
      legend: false,
    },
    responsive: !0,
    maintainAspectRatio: !1,
    hover: {
      mode: "index",
    },
    scales: {
      x: {
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: "Month",
        },
      },
      y: {
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: "Value",
        },
        ticks: {
          beginAtZero: !0,
        },
      },
    },
    elements: {
      line: {
        tension: 0.15,
      },
      point: {
        radius: 2,
        borderWidth: 1,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 5,
        bottom: 0,
      },
    },
  },
};
export const chart_widget_10 = {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales Stats",
        backgroundColor: "#2780d4",
        borderColor: "#2780d4",
        pointBackgroundColor: "#2780d4",
        pointBorderColor: "#2780d4",
        pointHoverBackgroundColor: "#2780d4",
        pointHoverBorderColor: "#2780d4",
        //borderWidth: 0,
        fill: true,
        data: [20, 10, 18, 10, 32, 15, 15, 22, 18, 6, 12, 13],
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    title: {
      display: !1,
    },
    tooltips: {
      intersect: !1,
      mode: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
    responsive: !0,
    maintainAspectRatio: !1,
    hover: {
      mode: "index",
    },
    scales: {
      x: {
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: "Month",
        },
      },
      y: {
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: "Value",
        },
        ticks: {
          beginAtZero: !0,
        },
      },
    },
    elements: {
      line: {
        tension: 0.7,
      },
      point: {
        radius: 0,
        borderWidth: 0,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 5,
        bottom: 0,
      },
    },
  },
};
export const chart_widget_11 = {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales Stats",
        backgroundColor: "#b0bef4",
        borderColor: "#ffaa2b",
        pointBackgroundColor: "#4cbc9a",
        pointBorderColor: "#4cbc9a",
        pointHoverBackgroundColor: "#4cbc9a",
        pointHoverBorderColor: "#4cbc9a",
        data: [0, 18, 14, 24, 16, 30],
        fill: true,
      },
    ],
  },
  options: {
    title: {
      display: !1,
    },
    tooltips: {
      intersect: !1,
      mode: "nearest",
      xPadding: 5,
      yPadding: 5,
      caretPadding: 5,
    },
    plugins: {
      legend: false,
    },
    responsive: !0,
    maintainAspectRatio: !1,
    hover: {
      mode: "index",
    },
    scales: {
      x: {
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: "Month",
        },
        ticks: {
          max: 30,
          min: 0,
        },
      },
      y: {
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: "Value",
        },
        ticks: {
          beginAtZero: !0,
        },
      },
    },
    elements: {
      line: {
        tension: 0.15,
      },
      point: {
        radius: 2,
        borderWidth: 1,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  },
};
export const chart_widget_14 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [55, 30, 90, 41, 86, 45, 80],
        borderColor: "#3693FF",
        borderWidth: "2",
        backgroundColor: "transparent",
        pointBackgroundColor: "#3693FF",
        pointRadius: 0,
        tension: 0.5,
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          stepSize: 20,
          padding: 0,
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        display: false,
        ticks: {
          padding: 0,
          display: false,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    },
  },
};
export const chart_widget_15 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 60, 30, 71, 26, 85, 50],
        borderColor: "#2780d4",
        borderWidth: "2",
        backgroundColor: "transparent",
        pointBackgroundColor: "#2780d4",
        pointRadius: 0,
        tension: 0.5,
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          stepSize: 20,
          padding: 0,
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        display: false,
        ticks: {
          padding: 0,
          display: false,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    },
  },
};
export const chart_widget_16 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 60, 30, 71, 26, 85, 50],
        borderColor: "#2c2c2c",
        borderWidth: "2",
        backgroundColor: "#2c2c2c",
        pointBackgroundColor: "#2c2c2c",
        pointRadius: 0,
        fill: true,
        tension: 0.5,
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      intersect: !1,
      mode: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
    scales: {
      y: {
        display: false,
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          stepSize: 20,
          padding: 0,
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        display: false,
        ticks: {
          padding: 0,
          display: false,
          beginAtZero: true,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    },
  },
};

export const chart_widget_8 = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
  series: [
    {
      data: [4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      width: 2,
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    markers: {
      size: [2, 2],
      strokeWidth: [2, 2],
      strokeColors: ["var(--primary)", "#ffb64a"],
      border: 2,
      radius: 2,
      hover: {
        size: 2,
      },
    },
    chart: {
      type: "line",
      height: 300,
      toolbar: {
        show: false,
      },
    },
    offsetY: -100,
    colors: ["#5bbbd7"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  },
};
