console.log("Hello");
// Chart options
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#33adff",
    foreColor: "#000f1a"
  },
  series: [
    {
      name: "Sales"
    }
  ]
};
// Init chart
const chart = new ApexCharts(document.querySelector("#charts"), options);

// Render charts
chart.render();
