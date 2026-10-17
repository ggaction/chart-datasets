// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71, doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e, doc-2bd5de4bd99e314a, doc-dfae58344d5a524e, doc-7f2c254224fc4908, doc-81f3b4da1bfe0908, doc-2a31551f1566fc6b, doc-99b0513458edff76, doc-0cbb124f0c04d6d9
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 336,
      height: 362,
      margin: { left: 29, top: 40, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "v2num",
      as: "v2",
      expression: { op: "toNumber", operand: { field: "Value 2" } }
    })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "v2", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [631152000000, 1514764800000], nice: false })
    .editYScale({ domain: [-40, 5], nice: false })
    .encodeColor({ field: "Country" })
    .editColorScale({
      type: "ordinal",
      domain: ["Brazil", "Indonesia", "North Korea", "Paraguay", "Tanzania"],
      range: ["rgb(199,233,181)", "rgb(134,208,187)", "rgb(69,180,194)", "rgb(37,139,187)", "rgb(34,90,165)"]
    })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          631152000000, 788918400000, 946684800000,
          1104537600000, 1262304000000, 1420070400000
        ],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-40, -35, -30, -25, -20, -15, -10, -5, 0, 5],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .createLegend({
      position: "bottom-left",
      title: false,
      labels: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .editLegendSymbols({
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    })
    .createTitle({
      text: "Forest area - by country",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -24 })
    .editTitle({ subtitle: "% change square km (Base year = 1990). Source: World Bank", titleStyle: { color: "black", fontWeight: 700 }, subtitleStyle: { color: "black" } });;
}