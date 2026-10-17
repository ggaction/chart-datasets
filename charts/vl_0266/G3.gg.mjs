// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d, doc-7a5eff3c73a7e7f9
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 409,
      height: 247,
      margin: { left: 44, top: 10, right: 5, bottom: 37 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "index",
        fieldType: "nominal"
      },
      y: { field: "value" },
      guides: false
    })
    .editXScale({
      domain: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 100] })
    .encodeBarWidth({ band: 1 })
    .createAxes({
      x: {
        ticksAndLabels: {
          labels: { fontSize: 10, offset: 7, rotation: 0 }
        },
        title: { text: "index", fontSize: 11, fontWeight: "bold", offset: 28 }
      },
      y: {
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100],
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "value", fontSize: 11, fontWeight: "bold", offset: 35 }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", count: 6 },
      vertical: false
    });
}
