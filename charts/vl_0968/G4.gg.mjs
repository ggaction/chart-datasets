// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-f30bfed200b50a98, doc-e8d8c6aef74192f0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 241,
      height: 235,
      margin: { left: 53, top: 43, right: 13, bottom: 17 }
    })
    .createData({ values: data })
  .applyTextMetrics({ profile: { schemaVersion: 1, id: "v7-vl0968-source-header", measurements: [
      { text: "Solar energy generation", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 148.828125 },
      { text: "Electricity generation from solar, measured in terawatt-hours", fontFamily: "sans-serif", fontSize: 8, fontWeight: 400, fontStyle: "italic", width: 213.4375 },
      { text: "(TWh) per year, Source: Our World in Data.", fontFamily: "sans-serif", fontSize: 8, fontWeight: 400, fontStyle: "italic", width: 153.6875 }
    ] } })
    .createTitle({
      text: "Solar energy generation",
      titleStyle: { fontFamily: "sans-serif", fontWeight: 700, fontSize: 13, color: "#000" },
      subtitleStyle: { fontFamily: "sans-serif", fontWeight: 400, fontSize: 8, fontStyle: "italic", color: "#000" }
    })
    .editTitle({
      subtitle:
        "Electricity generation from solar, measured in terawatt-hours\n(TWh) per year, Source: Our World in Data.",
      offset: -13,
      alongOffset: -47.0244140625
    })
    .createLinePlot({
      x: {
        field: "Year",
        fieldType: "temporal"
      },
      y: {
        field: "Electricity from solar (TWh)",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [-157766400000, 1609459200000] })
    .editYScale({ domain: [0, 1100], zero: true })
    .encodeColor({
      field: "Entity",
      fieldType: "nominal"
    })
    .editColorScale({
      domain: ["Europe (BP)", "United States", "World"],
      range: [
        "#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b",
        "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"
      ]
    })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 0, color: "#888" },
        labels: { fontSize: 10, offset: 0.5, color: "#000" },
        values: [0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000]
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "#000" },
        values: [0, 200, 400, 600, 800, 1000]
      },
      title: {
        text: "Electricity from solar (TWh)",
        fontSize: 11,
        color: "#000",
        fontWeight: "bold",
        offset: 44
      }
    })
    .createLegend({
      position: "top-left",
      title: false,
      labels: { fontSize: 10, color: "#000" }
    });
}