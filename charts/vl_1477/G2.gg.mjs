// DOCS: doc-6c2c08869091f6a0 createBarPlot; doc-fc11e9fb291905d1 basic-charts createBarPlot; doc-b257fb08998617a5 grouped-bar action trace (encodeBarWidth before createGuides)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 794, height: 389, margin: { left: 44, top: 38, right: 100, bottom: 51 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "incline type", fieldType: "nominal" },
      y: { field: "length(km)", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["?", "down", "up", "yes"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 300] })
    .encodeColor({ field: "feature count", fieldType: "quantitative", aggregate: "mean" })
    .editColorScale({ palette: "blues" })
    .encodeBarWidth({ band: 1 })
    .createGuides({
      axes: {
        x: {
          ticksAndLabels: { labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } } },
          title: { text: "incline type", fontSize: 11, fontWeight: 700, offset: 40 }
        },
        y: {
          ticksAndLabels: { values: [0, 50, 100, 150, 200, 250, 300], labels: { fontSize: 10, offset: 7 } },
          title: { text: "length(km)", fontSize: 11, fontWeight: 700, offset: 35 }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: false },
      legend: { position: "right", title: "feature count", gradient: { length: 200 }, labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 } }
    })
    .createTitle({ text: "Sidewalks Incline Values", titleStyle: { fontSize: 24, fontWeight: 700 }, offset: -6 });
}
