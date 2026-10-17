// DOCS: doc-6c2c08869091f6a0, doc-333a87e52954985d, doc-b257fb08998617a5, doc-fc11e9fb291905d1
// Grouped bar chart: category on band x, value on linear y, grouped by "group" with tableau colors.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 337,
      height: 240,
      margin: { left: 41, top: 5, right: 56.00000000000003, bottom: 35 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "category", fieldType: "nominal" },
      y: { field: "value", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({
      field: "group",
      layout: "group",
      scale: { palette: "tableau10" }
    })
    .encodeXOffset({
      field: "group",
      paddingInner: 0,
      paddingOuter: 0
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({
      domain: ["A", "B", "C"],
      paddingInner: 0.2,
      paddingOuter: 0.2
    })
    .editYScale({ domain: [0, 1.1] })
    .createAxes({
      x: {
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            offset: 7,
            rotation: 3 * Math.PI / 2
          }
        },
        title: {
          text: "category",
          fontSize: 11,
          fontWeight: "bold",
          offset: 27
        }
      },
      y: {
        ticksAndLabels: {
          values: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: {
          text: "value",
          fontSize: 11,
          fontWeight: "bold",
          offset: 28
        }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false })
    .createLegend({ position: "right", title: "group" });
}