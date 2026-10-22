import { chart } from "ggaction";
// Ref: doc-8a4f6f06e0d37d5e — docs/tutorials/line-chart.md (line plot binding pattern)
import data from "./data.json";
import bars from "./bar-data.json";

export function buildChart() {
  return chart()
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
    .editXScale({ domain: [1672128000000, 1704384000000] })
    .editYScale({ domain: [0, 100], target: "linePlot" })
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
      layout: "diverging"
    })
    .editColorScale({
      domain: ["afname", "injectie"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [1672531200000, 1675209600000, 1677628800000, 1680307200000, 1682899200000, 1685577600000, 1688169600000, 1690848000000, 1693526400000, 1696118400000, 1698796800000, 1701388800000, 1704067200000],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: {
            fontSize: 10,
            offset: 7,
            alongOffset: 0.5,
            labelMap: [
              { value: 1672531200000, label: "2023" },
              { value: 1675209600000, label: "" },
              { value: 1677628800000, label: "March" },
              { value: 1680307200000, label: "" },
              { value: 1682899200000, label: "May" },
              { value: 1685577600000, label: "" },
              { value: 1688169600000, label: "July" },
              { value: 1690848000000, label: "" },
              { value: 1693526400000, label: "September" },
              { value: 1696118400000, label: "" },
              { value: 1698796800000, label: "November" },
              { value: 1701388800000, label: "" },
              { value: 1704067200000, label: "2024" }
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
          line: {},
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            ticks: { length: 5, alongOffset: 0.5 },
            labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 }
          },
          title: { text: "Vulniveau (%)", fontSize: 11, fontWeight: 700, color: "#000", offset: 32.1064453125, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } },
          underlay: true
        },
        {
          id: "flowAxis",
          scale: "flowY",
          position: "right",
          line: {},
          ticksAndLabels: {
            values: [-15000, -10000, -5000, 0, 5000, 10000, 15000],
            ticks: { length: 5, alongOffset: 0.5 },
            labels: {
              fontSize: 10,
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
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxis({
      ticksAndLabels: { labels: { color: "#000" } }
    })
    .editYAxisLine({ target: "y", color: "#888" })
    .editYAxisTicks({ target: "y", color: "#888" })
    .editYAxis({
      target: "y",
      ticksAndLabels: { labels: { color: "#000" } }
    })
    .editYAxisLine({ target: "flowAxis", color: "#888" })
    .editYAxisTicks({ target: "flowAxis", color: "#888" })
    .editYAxis({
      target: "flowAxis",
      ticksAndLabels: { labels: { color: "#000" } }
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
      text: "Gasvoorraad in Nederland 2023",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -7.046875
    })
    .editTitle({ align: "center" });
}