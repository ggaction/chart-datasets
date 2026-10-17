// DOCS: doc-e790db38fc2a278a doc-bc26da5598d35bae doc-2e6240c00cb297cc
import { chart } from "ggaction";
import data from "./data.json";

const X_TICKS = [0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150];
const Y_TICKS = [0,5,10,15,20,25,30,35];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 545,
      height: 527,
      margin: { left: 39, top: 61, right: 6, bottom: 66 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "criScore",
      as: "criScore",
      expression: { op: "toNumber", operand: { field: "CRI Score " } }
    })
    .createComputedData({
      id: "co2pc",
      as: "co2pc",
      expression: { op: "toNumber", operand: { field: "CO2 per cap" } }
    })
    .createScatterPlot({
      x: { field: "criScore", fieldType: "quantitative" },
      y: { field: "co2pc", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 150] })
    .editYScale({ domain: [0, 36] })
    .encodeColor({ field: "Continent", scale: { palette: "set1", domain: ["Africa", "Asia", "Europe", "North America", "Oceana", "South America"] } })
    .encodePointRadius({ value: 6.124 })
    .editPointMark({ opacity: 0.6 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: X_TICKS,
        ticks: {},
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Climate Risk Index Score", fontSize: 11, offset: 27 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: "bold" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Co2 per capita", fontSize: 11, offset: 30 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: "bold" }
    })
    .createGrid({
      horizontal: { values: Y_TICKS },
      vertical: { values: X_TICKS }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({ title: false, position: "bottom", labels: { fontSize: 10 } })
    .editLegendSymbols({
      target: "scatterPlot",
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.6 } })
    .createTitle({
      text: "Co2 emissions and Climate Risk, by country",
      titleStyle: { fontSize: 13, fontWeight: "bold" },
      subtitleStyle: { fontStyle: "italic", fontSize: 10 }
    })
    .editTitle({
      subtitle: "CRI score (x), and Co2 Per Capita in (tons per year) (y)\nSources: Global Carbon Project and Germanwatch\n",
      offset: -12.57,
      gap: 1
    })
    .editTitle({ alongOffset: -33.12 });
}