import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-dfae58344d5a524e, doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-0cbb124f0c04d6d9

export function buildChart() {
  return chart()
    .createCanvas({
      width: 380,
      height: 357,
      margin: { left: 68, top: 35, right: 12, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "yearMs",
      as: "YearMs",
      expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" }
    })
    .createTitle({
      text: "Urban Population in Argentina, US and UAE",
      titleStyle: { fontSize: 13, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "From 1960-2022. Source: World Bank",
      offset: -12,
      align: "left"
    })
    .createLinePlot({
      x: { field: "YearMs", fieldType: "temporal" },
      y: { field: "Urban Population" },
      guides: false
    })
    .editXScale({ domain: [-315619200000, 1609459200000] })
    .editYScale({ domain: [0, 280000000], zero: true })
    .encodeColor({ field: "Country Name", fieldType: "nominal" })
    .editColorScale({ target: "linePlot", domain: ["Argentina", "United Arab Emirates", "United States"], range: ["#e41a1c", "#377eb8", "#4daf4a"] })
    .encodeGroup({ field: "Country Name" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          -315619200000,
          0,
          315532800000,
          631152000000,
          946684800000,
          1262304000000,
          1577836800000
        ],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50000000, 100000000, 150000000, 200000000, 250000000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 0, label: "0" },
            { value: 50000000, label: "50,000,000" },
            { value: 100000000, label: "100,000,000" },
            { value: 150000000, label: "150,000,000" },
            { value: 200000000, label: "200,000,000" },
            { value: 250000000, label: "250,000,000" }
          ]
        }
      },
      title: false
    })
    .createLegend({ position: "top-left", title: false, channels: ["color"] });
}
