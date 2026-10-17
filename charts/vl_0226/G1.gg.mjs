// DOCS: doc-af5562e03efab97d, doc-fb3b01cca895bdad
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 870, height: 430, margin: { left: 24, top: 40, right: 46, bottom: 90 } })
    .createData({ values: data })
    .createComputedData({ id: "crimeRate", as: "rate", expression: { op: "toNumber", operand: { field: "Crime Rate(%)" } } })
    .createBarPlot({
      x: { field: "County", fieldType: "nominal", scale: { paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "rate", fieldType: "quantitative", scale: { domain: [0, 11], zero: true } },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#f3d24f" })
    .createTitle({
      text: "County & Major City Crime Statistics",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({
      subtitle: "%, calculated by 'Crime Rate per 1,000 Residents'. (Source: https://crimerate.co.uk/)",
      offset: -11,
      alongOffset: -18
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, rotation: { value: 45, unit: "degrees" }, overlap: "allow" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
      },
      title: false
    });
}
