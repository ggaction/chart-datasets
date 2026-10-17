// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc
import { chart } from "ggaction";
import data from "./data.json";

const xTicks = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const yTicks = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];


export function buildChart() {
  return chart()
    .createCanvas({ width: 874, height: 622, margin: { left: 87, top: 55, right: 87, bottom: 67 } })
    .createData({ values: data })
    .createComputedData({ id: "comp1Num", as: "Component1Num", expression: { op: "toNumber", operand: { field: "Component 1" } } })
    .createComputedData({ id: "comp2Num", as: "Component2Num", expression: { op: "toNumber", operand: { field: "Component 2" } } })
    .createScatterPlot({ x: { field: "Component1Num", fieldType: "quantitative" }, y: { field: "Component2Num", fieldType: "quantitative" }, guides: false })
    .editXScale({ target: "scatterPlot", domain: [-5, 9] })
    .editYScale({ target: "scatterPlot", domain: [-6, 8] })
    .encodeColor({ field: "RegionName" })
    .editColorScale({ target: "scatterPlot", palette: "set1", domain: ["East Midlands", "East of England", "London", "North East", "North West", "South East", "South West", "West Midlands", "Yorkshire and The Humber"] })
    .encodePointRadius({ value: 2.7386127875 })
    .editPointMark({ opacity: 0.7 })
    .createTitle({ text: "Component Analysis on House Price and Affordability Data\nBy Constituency", titleStyle: { fontSize: 13, fontWeight: 700 }, offset: -4 })
    .editTitle({ subtitle: "Component 1 (x), Component 2 (y). Source:ONS", subtitleStyle: { fontSize: 10, fontStyle: "italic" }, gap: 1 })
    .editTitle({ alongOffset: -18 })
    .createAxes({
      x: { title: false, ticksAndLabels: { values: xTicks, ticks: {}, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, labelMap: [{ value: -5, label: "−5" }, { value: -4, label: "−4" }, { value: -3, label: "−3" }, { value: -2, label: "−2" }, { value: -1, label: "−1" }] } } },
      y: { title: false, ticksAndLabels: { values: yTicks, ticks: {}, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, labelMap: [{ value: -6, label: "−6" }, { value: -5, label: "−5" }, { value: -4, label: "−4" }, { value: -3, label: "−3" }, { value: -2, label: "−2" }, { value: -1, label: "−1" }] } } }
    })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-legend-glyphs", measurements: [{ text: "East Midlands", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 62.8125 }, { text: "East of England", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 70.609375 }, { text: "London", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "North East", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.25 }, { text: "North West", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 49.84375 }, { text: "South East", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 48.921875 }, { text: "South West", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.515625 }, { text: "West Midlands", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 65.40625 }, { text: "Yorkshire and The Humber", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 118.96875 }, { text: "Region", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 37.28125 }] } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "bottom",
        direction: "horizontal",
        title: "Region",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } });
}