// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

const countries = [
  "Austria", "Belgium", "Denmark", "Finland", "France", "Germany", "Greece",
  "Ireland", "Italy", "Luxembourg", "Netherlands", "Portugal", "Spain",
  "Sweden", "United Kingdom"
];
const ramp = [
  "rgb(11, 7, 36)", "rgb(33, 12, 74)", "rgb(60, 10, 101)", "rgb(87, 16, 109)",
  "rgb(112, 25, 110)", "rgb(137, 34, 106)", "rgb(163, 44, 97)", "rgb(187, 55, 85)",
  "rgb(209, 69, 69)", "rgb(228, 89, 51)", "rgb(241, 114, 30)", "rgb(250, 141, 11)",
  "rgb(252, 171, 16)", "rgb(249, 202, 51)", "rgb(242, 232, 101)"
];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 375,
      height: 337,
      margin: { top: 40, right: 111, bottom: 97, left: 64 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "perHead",
      as: "perHead",
      expression: { op: "toNumber", operand: { field: "Tonnes of CO2e per head" } }
    })
    .createComputedData({
      id: "totalKt",
      as: "totalKt",
      expression: { op: "toNumber", operand: { field: "Thousand tonnes of CO2e" } }
    })
    .createScatterPlot({
      x: "perHead",
      y: "totalKt",
      guides: false
    })
    .encodeStroke({ field: "Country ", fieldType: "nominal" })
    .editStrokeScale({ target: "scatterPlot", domain: countries, range: ramp })
    .editPointMark({ fill: "none", opacity: 0.7, strokeWidth: 2 })
    .encodePointRadius({ value: 2.7386 })
    .editXScale({ domain: [0, 20] })
    .editYScale({ domain: [0, 800000] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "Tonnes of CO2e per head",
        fontSize: 11,
        offset: 27
      }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" } }, title: { fontWeight: 700 } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 200000, 400000, 600000, 800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "Thousand tonnes of CO2e",
        fontSize: 11,
        offset: 57,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: "," } }, title: { fontWeight: 700 } })
    .createLegend({
      channels: ["stroke"],
      symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "none", strokeWidth: 1.5 }] },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "stroke", title: "Country" })
    .editLegendBlock({ target: "scatterPlot", channel: "stroke", text: { fontSize: 10, fontFamily: "sans-serif" } })
    .createTitle({
      text: "European CO2 emissions",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -13 })
    .editTitle({
      subtitle: "Chart showing total and per capita CO2 emissions across Europe , Source: ONS",
      gap: 3,
      alongOffset: -58.1474609375
    });
}