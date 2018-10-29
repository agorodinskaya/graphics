console.log("Hello");
// Chart options
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "white",
    foreColor: "#33adff"
  },
  series: [
    {
      name: "Coffee consumption by countries, kg per capita/year",
      data: [
        12,
        9.9,
        9,
        8.7,
        8.4,
        8.2,
        7.9,
        6.8,
        6.5,
        6.2,
        6.1,
        5.9,
        5.8,
        5.8,
        5.5,
        5.5,
        5.4,
        5.1,
        4.9,
        4.8
      ]
    }
  ],
  xaxis: {
    categories: [
      "Finland",
      "Norway",
      "Iceland",
      "Denmark",
      "Netherlands",
      "Sweden",
      "Switzerland",
      "Belgium",
      "Luxembourg",
      "Canada",
      "Bosnia and Herzegovina",
      "Austria",
      "Italy",
      "Slovenia",
      "Brazil",
      "Germany",
      "Greece",
      "France",
      "Croatia",
      "Cyprus"
    ]
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  fill: {
    colors: ["#ff0066"]
  },
  // grid: {
  // row: {
  //   colors: ["#F44336", "#E91E63", "#9C27B0"]
  // },
  //   column: {
  //     colors: ["#b2d7e9", "#6fb2bf", "#56b3c6"]
  //   }
  // },
  dataLabels: {
    enabled: true
  },
  title: {
    text: "Coffee consumption by countries, kg per capita/year"
  }
};
// Init chart
const chart = new ApexCharts(document.querySelector("#charts"), options);

// Render charts
chart.render();
