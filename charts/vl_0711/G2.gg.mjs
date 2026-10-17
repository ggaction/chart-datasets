// DOCS: doc-b11b4627b143730d createLinePlot; doc-76573a465e2b6a33 basic-charts; doc-9bb354f4e2d46693 line-chart tutorial
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 369, height: 277, margin: { left: 41, top: 40, right: 128, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "giniNum", as: "GiniNum", expression: { op: "toNumber", operand: { field: "Gini" } } })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "auto" },
      y: { field: "GiniNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [315532800000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 0.8] })
    .encodeGroup({ field: "Country" })
    .encodeColor({ field: "Country" })
    .editColorScale({ domain: ["Argentina", "Brazil", "Chile", "China", "Russian Federation", "USA", "United Kingdom"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2"] })
    .createTitle({
      text: "Gini Coefficient, 1980-2021",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -35.9
    })
    .editTitle({ subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }, gap: 3 })
    .editTitle({ subtitle: "Source: WID", offset: -4 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-axis-glyphs",
        measurements: [
          { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 }
        ]
      }
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y" }
          },
          title: { text: "Year", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 28 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 0.2, 0.4, 0.6, 0.8],
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".1f" }
          },
          title: { text: "Gini", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 32 }
        }
      },
      grid: {
        horizontal: { color: "#ddd", lineWidth: 1, values: [0, 0.2, 0.4, 0.6, 0.8] },
        vertical: { color: "#ddd", lineWidth: 1, values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000] }
      },
      legend: {
        channels: ["color"],
        title: "Country",
        symbol: { length: 10, lineWidth: 1.5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
      }
    });
}