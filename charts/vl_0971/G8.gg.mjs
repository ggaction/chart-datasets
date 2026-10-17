// DOCS: doc-76573a465e2b6a33, doc-dfae58344d5a524e, doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 212,
      height: 244,
      margin: { left: 30, top: 47, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "value2Num",
      as: "Value2Num",
      expression: { op: "toNumber", operand: { field: "Value 2" } }
    })
    .createLinePlot({
      x: {
        field: "Year",
        fieldType: "temporal",
        temporalUnit: "year",
      },
      // x scale policy moved to editXScale below
      y: {
        field: "Value2Num",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [631152000000, 1514764800000], nice: false })
    .editYScale({ domain: [-40, 5] })
    .encodeColor({
      field: "Country",
    })
    .editColorScale({
      domain: ["Brazil", "Indonesia", "North Korea", "Paraguay", "Tanzania"],
      range: [
        "rgb(199, 233, 181)",
        "rgb(134, 208, 187)",
        "rgb(69, 180, 194)",
        "rgb(37, 139, 187)",
        "rgb(34, 90, 165)"
      ]
    })
    .encodeStrokeWidth({ value: 1.5 })
    .createTitle({
      text: "Forest area - by country",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ gap: 1, offset: -9, alongOffset: -24 })
    .editTitle({
      subtitle: "% change square km (Base year = 1990)\nSource: World Bank",
      titleStyle: { fontWeight: 700, color: "black" },
      subtitleStyle: { color: "black" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [631152000000, 946684800000, 1262304000000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxisLabels({ format: "%Y" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-40, -30, -20, -10, 0],
        ticks: {},
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7
        }
      },
      title: false
    })
    .editYAxisLabels({
      labelMap: [
        { value: -40, label: "\u221240" },
        { value: -30, label: "\u221230" },
        { value: -20, label: "\u221220" },
        { value: -10, label: "\u221210" },
        { value: 0, label: "0" }
      ]
    })
    .createLegend({
      position: "bottom-left",
      direction: "vertical",
      title: false
    })
    .editLegendSymbols({
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    })
    .editLegendLabels({
      fontSize: 10,
      fontFamily: "sans-serif"
    });
}