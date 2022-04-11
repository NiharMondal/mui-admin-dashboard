export const conversionSeries = [
  {
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
  },
];

export const conversionOptions = {
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "20%",
      borderRadius: 2,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: [
      "South Korea",
      "Canada",
      "United Kingdom",
      "Netherlands",
      "Italy",
      "France",
      "Japan",
      "United States",
      "China",
      "Germany",
    ],
  },
};
