// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 461, height: 347, margin: { left: 53, top: 10, right: 8, bottom: 37 } })
    .createData({ values: data })
    .createLinePlot({
      x: {
        field: "year",
        fieldType: "temporal",
        scale: { domain: [315532800000, 1546300800000] }
      },
      y: {
        field: "MT",
        fieldType: "quantitative",
        scale: { domain: [0, 9000] }
      },
      guides: false
    })
    .createScatterPlot({
      x: { field: "year", fieldType: "temporal", scale: { domain: [315532800000, 1546300800000] } },
      y: { field: "MT", fieldType: "quantitative", scale: { domain: [0, 9000] } },
      guides: false
    })
    .editLineMark({ target: "linePlot", stroke: "dodgerblue", strokeWidth: 2 })
    .encodePointRadius({ target: "scatterPlot", value: 2.7386127876482954 })
    .editPointMark({ target: "scatterPlot", fill: "dodgerblue", opacity: 0.7 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, format: "%Y" }
        },
        title: { text: "year", fontSize: 11, fontWeight: 700, offset: 27 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, format: "," }
        },
        title: { text: "Coal Production [MT]", fontSize: 11, fontWeight: 700, offset: 41.0, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}