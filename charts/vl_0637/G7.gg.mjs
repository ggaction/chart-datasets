import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-e790db38fc2a278a doc-2e6240c00cb297cc doc-eacb474f181ce5c3 doc-7f2c254224fc4908 doc-e8d8c6aef74192f0

export function buildChart() {
  return chart()
    .createCanvas({
      width: 578,
      height: 398,
      margin: { top: 61, right: 39, bottom: 37, left: 39 }
    })
    .createData({ id: "raw", values: data })
    .editCanvas({
      plotBorder: { color: "aliceblue", lineWidth: 1 }
    })
    .filterData({
      id: "gdpValid",
      field: "GDP per capita (PPP)",
      noneOf: ["null"]
    })
    .createComputedData({
      id: "gdpNum",
      as: "gdpNum",
      expression: { op: "toNumber", operand: { field: "GDP per capita (PPP)" } }
    })
    .createComputedData({
      id: "mortNum",
      as: "mortNum",
      expression: { op: "toNumber", operand: { field: "Infant Mortality" } }
    })
    .createComputedData({
      id: "popNum",
      as: "popNum",
      expression: { op: "toNumber", operand: { field: "Population" } }
    })
    .createScatterPlot({
      x: {
        field: "gdpNum",
        fieldType: "quantitative"
      },
      y: {
        field: "mortNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ type: "log", domain: [1000, 100000] })
    .editYScale({ domain: [0, 80] })
    .encodeColor({
      field: "Continent",
      fieldType: "nominal",
    })
    .encodeSize({
      field: "popNum",
      fieldType: "quantitative"
    })
    .editColorScale({
      palette: "set1",
      domain: ["Africa", "America", "Asia", "Europe", "Oceania"]
    })
    .editSizeScale({
      domain: [0, 1425893465],
      range: [2.5 * Math.PI, 150 * Math.PI]
    })
    .editPointMark({ opacity: 0.8 })
    .createTitle({
      text: "GDP and Infant mortality",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 9, fontStyle: "italic" }
    })
    .editTitle({
      subtitle:
        "Infant Mortality: per 1,000 live births, source: UN Population prospects 2022\nGDP: per capita PPP (international $) source: World Bank\n",
      gap: 2,
      offset: -13
    })
    .editTitle({ alongOffset: -33.12 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1000, 2000, 5000, 10000, 20000, 40000, 100000],
        ticks: {},
        labels: {
          labelMap: [
            { value: 1000, label: "$1,000" },
            { value: 2000, label: "$2,000" },
            { value: 5000, label: "$5,000" },
            { value: 10000, label: "$10,000" },
            { value: 20000, label: "$20,000" },
            { value: 40000, label: "$40,000" },
            { value: 100000, label: "$100,000" },
          ],
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          flush: true
        }
      },
      title: {
        text: "GDP (log scale)",
        fontSize: 11,
        offset: 30
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "Infant Mortality",
        fontSize: 11,
        offset: 28,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black", fontWeight: 700 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black", fontWeight: 700 }
    })
    .createGrid({
      horizontal: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80]
      },
      vertical: {
        values: [1000, 2000, 5000, 10000, 20000, 40000, 100000]
      }
    })
    .editHorizontalGrid({ color: "rgba(221,221,221,0.3)" })
    .editVerticalGrid({ color: "rgba(221,221,221,0.3)" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        position: "top-right",
        title: false,
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" }
      }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "color",
      symbol: { opacity: 0.8 }
    });
}