export const radarSeries = [
  {
    name: "Series 1",
    data: [80, 50, 30, 40, 100, 20],
  },
  {
    name: "Series 2",
    data: [20, 30, 40, 80, 20, 80],
  },
  {
    name: "Series 3",
    data: [44, 76, 78, 13, 43, 10],
  },
];

export const radarOptions = {
  chart: {
    height: 350,
    type: "radar",
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1,
    },
    toolbar: {
      show: false
    },
    title: {
      show: false
    }
  },
  stroke: {
    width: 2,
  },
  fill: {
    opacity: 0.1,
  },
  markers: {
    size: 0,
  },
  xaxis: {
    categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
  },
};
