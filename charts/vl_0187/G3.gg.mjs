import {chart} from "ggaction";
import data from "./data.json";
import bars from "./bar-data.json";

export function buildChart(){
  return chart()
    // doc-b9261a4b2909a353 createLinePlot; doc-04276a48bb028dda editTitle
    .createCanvas({
      plot: { width: 400, height: 300 },
      margin: { left: 44, right: 132, top: 27, bottom: 37 },
      plotBorder: { underlay: true }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "gasDayStart", fieldType: "temporal" },
      y: "full",
      guides: false
    })
    .editXScale({ domain: [1514361600000, 1546617600000] })
    .editYScale({ target: "linePlot", domain: [0, 100] })
    .editLineMark({ stroke: "red" })
    .createData({ id: "flows", values: bars })
    .createBarPlot({
      x: { field: "gasDayStart", fieldType: "temporal", scale: { id: "x" } },
      y: { field: "value", scale: { id: "flowY", domain: [-15000, 15000] } },
      guides: false
    })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ stroke: false, opacity: 0.6 })
    .encodeColor({
      field: "variable",
      layout: "diverging",
      scale: { domain: ["afname", "injectie"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [1514764800000, 1517443200000, 1519862400000, 1522540800000, 1525132800000, 1527811200000, 1530403200000, 1533081600000, 1535760000000, 1538352000000, 1541030400000, 1543622400000, 1546300800000],
          ticks: { length: 5, color: "#888", alongOffset: 0.5 },
          labels: {
            fontSize: 10,
            color: "#000",
            offset: 7,
            alongOffset: 0.5,
            labelMap: [
              { value: 1514764800000, label: "2018" },
              { value: 1517443200000, label: "" },
              { value: 1519862400000, label: "March" },
              { value: 1522540800000, label: "" },
              { value: 1525132800000, label: "May" },
              { value: 1527811200000, label: "" },
              { value: 1530403200000, label: "July" },
              { value: 1533081600000, label: "" },
              { value: 1535760000000, label: "September" },
              { value: 1538352000000, label: "" },
              { value: 1541030400000, label: "November" },
              { value: 1543622400000, label: "" },
              { value: 1546300800000, label: "2019" }
            ]
          }
        },
        title: { text: "Datum", fontSize: 11, fontWeight: 700, color: "#000", offset: 27.578125, alongOffset: 0.5 },
        underlay: true
      },
      y: [
        {
          id: "y",
          scale: "y",
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: { fontSize: 10, color: "#000", offset: 6.5, alongOffset: 0.890625 }
          },
          title: { text: "Vulniveau (%)", fontSize: 11, fontWeight: 700, color: "#000", offset: 32.1064453125, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } },
          underlay: true
        },
        {
          id: "flowAxis",
          scale: "flowY",
          position: "right",
          line: { color: "#888" },
          ticksAndLabels: {
            values: [-15000, -10000, -5000, 0, 5000, 10000, 15000],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: {
              fontSize: 10,
              color: "#000",
              format: ",.0f",
              offset: 7.5,
              alongOffset: 0.890625,
              labelMap: [
                { value: -15000, label: "−15,000" },
                { value: -10000, label: "−10,000" },
                { value: -5000, label: "−5,000" }
              ]
            }
          },
          title: { text: "Gastoevoer (GWh/week)", fontSize: 11, fontWeight: 700, color: "#000", offset: 52.84765625, alongOffset: 0.5, rotation: { value: 90, unit: "degrees" } },
          underlay: true
        }
      ]
    })
    .createGrid({
      vertical: { color: "#ddd" },
      horizontal: { scale: "y", color: "#ddd" }
    })
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10, strokeWidth: 0, opacity: 0.6 }] }
    })
    .createTitle({
      text: "Gasvoorraad in Nederland 2018",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -7.046875
    })
    .editTitle({ align: "center" });
}