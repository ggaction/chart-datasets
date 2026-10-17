// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-911dc898a72348eb
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 336, height: 362, margin: { left: 29, top: 40, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "v2num", as: "Value2Num", expression: { op: "toNumber", operand: { field: "Value 2" } } })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "Value2Num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [631152000000, 1514764800000], nice: false })
    .editYScale({ domain: [-40, 5] })
    .encodeStrokeWidth({ value: 2 })
    .encodeColor({ field: "Country" })
    .editColorScale({
      domain: ["Brazil", "Indonesia", "North Korea", "Paraguay", "Tanzania"],
      range: ["rgb(199, 233, 181)", "rgb(134, 208, 187)", "rgb(69, 180, 194)", "rgb(37, 139, 187)", "rgb(34, 90, 165)"]
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000],
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", flush: true }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [-40, -35, -30, -25, -20, -15, -10, -5, 0, 5],
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })

    .createLegend({ channels: ["color"], position: "bottom-left", title: false })
    .editLegend({
      title: false,
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" }
    })
    .createTitle({
      text: "Forest area - by country",
      titleStyle: { fontSize: 13, fontWeight: 700, fontStyle: "normal", color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ gap: 3, offset: -13, alongOffset: -24 })
    .editTitle({ subtitle: "% change square km (Base year = 1990). Source: World Bank" });
}