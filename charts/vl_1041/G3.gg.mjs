// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-76573a465e2b6a33, doc-2ba6dfbdbb611825
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 501, height: 456, margin: { left: 39, top: 40, right: 162, bottom: 116 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "Education", fieldType: "nominal" },
      y: { field: "value", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({
      domain: ["High School", "Middle School", "Post-Graduate", "University", "Vocation/ Technical College"],
      paddingInner: 0.2,
      paddingOuter: 0.2
    })
    .editYScale({ domain: [0, 40] })
    .encodeColor({
      field: "Education",
      fieldType: "nominal",
      scale: {
        type: "ordinal",
        domain: ["High School", "Middle School", "Post-Graduate", "University", "Vocation/ Technical College"],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b"]
      }
    })
    .layoutSeries({ mode: "stack" })
    .encodeBarWidth({ pixels: 46.15384615384616 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 0 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            color: "black",
            offset: 7,
            rotation: { value: 45, unit: "degrees" }
          }
        },
        title: { text: "Education Level", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", color: "black", offset: 110 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5 },
          values: [0, 5, 10, 15, 20, 25, 30, 35, 40],
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            color: "black",
            offset: 7
          }
        },
        title: { text: "Percentage %", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", color: "black", offset: 33 }
      }
    })
    .createGrid({
      horizontal: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40] , color: '#ddd'},
      vertical: false
    })
    .createGuides({
      axes: false,
      legend: {
        title: "Education",
        position: "right",
        offset: 16,
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11, fontWeight: "bold" }
      }
    })
    .createTitle({
      text: "Cryptocurrency Ownership by Education Level",
      titleStyle: { fontSize: 13, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      subtitle: "Percentage of Ownership",
      align: "left",
      offset: -9
    })
  .editYAxis({ title: { offset: 26.544921875 } })
;
}