// DOCS: doc-8a4f6f06e0d37d5e, doc-b11b4627b143730d, doc-9bb354f4e2d46693
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 348, height: 259, margin: { left: 44, top: 22, right: 104, bottom: 37 } })
    .createData({ id: "inflation", values: data })
    .createComputedData({ id: "inflationP", as: "priceN", expression: { op: "toNumber", operand: { field: "local_price" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", scale: { domain: [954547200000, 1578960000000] } },
      y: { field: "priceN", fieldType: "quantitative", scale: { domain: [0, 180] } },
      guides: false
    })
    .encodeGroup({ field: "currency_code" })
    .encodeColor({ field: "currency_code", fieldType: "nominal", scale: { domain: ["ARS", "EUR"], range: ["#4c78a8", "#f58518"] } })
    .createTitle({ text: "schemaone", titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }, offset: -9 })
    .editTitle({ align: "center" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-axis-glyphs",
        measurements: [
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }
        ]
      }
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
        },
        title: { text: "date", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 30 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 50, 100, 150],
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "local_price", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 35, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({
      position: "right",
      title: "currency_code",
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .editLegend({
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
      symbol: { length: 10, lineWidth: 1.5 }
    });
}