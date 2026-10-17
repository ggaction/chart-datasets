// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 473,
      height: 357,
      margin: { left: 53, top: 40, right: 120, bottom: 17 }
    })
    .createData({ values: data })
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
    .editYScale({ domain: [0, 1100] })
    .editLineMark({ strokeWidth: 2 })
    .encodeColor({ field: "Entity", fieldType: "nominal" })
    .editColorScale({
      domain: ["Europe (BP)", "United States", "World"],
      range: ["#4c78a8", "#f58518", "#e45756"]
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [
              -157766400000, 157766400000, 473385600000, 788918400000,
              1104537600000, 1420070400000
            ],
            ticks: { length: 0, color: "#888" },
            labels: {
              fontSize: 10,
              offset: 0.5,
              fontFamily: "sans-serif",
              color: "black",
              flush: true
            }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", color: "black", format: ",.0f" }
          },
          title: {
            text: "Electricity from solar (TWh)",
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "sans-serif",
            color: "black",
            offset: 40.5
          }
        }
      },
      grid: false,
      legend: {
        channels: ["color"],
        position: "right",
        title: "Entity",
        titleStyle: {
          fontSize: 11,
          fontWeight: 700,
          color: "black",
          fontFamily: "sans-serif"
        },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          color: "black"
        }
      }
    })
    .createTitle({
      text: "Solar energy generation",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -12
    })
    .editTitle({
      align: "left",
      alongOffset: -47.0244140625,
      gap: 4
    })
    .editTitle({
      subtitle: "Electricity generation from solar, measured in terawatt-hours (TWh) per year, Source: Our World in Data.",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    });
}