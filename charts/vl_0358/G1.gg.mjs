import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-dfae58344d5a524e, doc-0cbb124f0c04d6d9, doc-2a31551f1566fc6b, doc-7a5eff3c73a7e7f9, doc-7cbe3406e42592ab

export function buildChart() {
  return chart()
    .createCanvas({ width: 313, height: 369, margin: { left: 26, top: 47, right: 7, bottom: 22 } })
    .editCanvas({ background: "#122b39" })
    .createData({ id: "rates", values: data })
    .createComputedData({ id: "ratesNum", as: "ValueN", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal", scale: { domain: [157852800000, 1664406000000] } },
      y: { field: "ValueN", fieldType: "quantitative", scale: { domain: [0.5, 2.5] } },
      guides: false
    })
    .editLineMark({ stroke: "rgb(230, 50, 50)", strokeWidth: 2, opacity: 1 })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: [315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
            ticks: {},
            labels: { color: "#cbc7cf", fontSize: 10, offset: 7, format: "%Y" }
          },
          title: false
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: [0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4],
            ticks: {},
            labels: { color: "#cbc7cf", fontSize: 10, offset: 7, format: ".1f" }
          },
          title: false
        }
      },
      grid: false,
      legend: false
    })
    .createTitle({
      text: "Sterling to Dollar exchange rate (1975-2022)",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "#cbc7cf" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "#cbc7cf" }
    })
    .editTitle({ gap: 1, offset: -13, alongOffset: -20.9 })
    .editTitle({ subtitle: "USD into GBP, BoE Series: XUDLUSS\n" });
}