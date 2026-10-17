import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-b257fb08998617a5, doc-76573a465e2b6a33, doc-333a87e52954985d
export function buildChart() {
  return chart()
    .createCanvas({
      width: 600,
      height: 344,
      margin: { left: 53, top: 10, right: 5, bottom: 84 }
    })
    .editCanvas({ background: "#F1F4F4" })
    .createData({ values: data })
    .filterData({ id: "valid", field: "Value", predicate: { op: "neq", value: null } })
    .createBarPlot({
      x: { field: "DECL", fieldType: "nominal" },
      y: { field: "Value", fieldType: "quantitative" },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({
      domain: ["Austria","Belgium","Bulgaria","Croatia","Cyprus","Czechia","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Italy","Lithuania","Luxemburg","Malta","Netherlands","Poland","Romania","Slovakia","Spain","Sweden","United Kingdom"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 500000000], zero: true })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          ticks: {},
          labels: {
            fontSize: 10,
            offset: 7,
            rotation: { value: -90, unit: "degrees" }
          }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 100000000, 200000000, 300000000, 400000000, 500000000],
          ticks: {},
          labels: {
            fontSize: 10,
            offset: 7,
            format: "auto",
            labelMap: [
              { value: 0, label: "0M" },
              { value: 100000000, label: "100M" },
              { value: 200000000, label: "200M" },
              { value: 300000000, label: "300M" },
              { value: 400000000, label: "400M" },
              { value: 500000000, label: "500M" }
            ]
          }
        },
        title: {
          text: "Ice-cream production (Liter)",
          fontSize: 11,
          fontWeight: 700,
          fontFamily: "sans-serif",
          offset: 44
        }
      }
    })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisLabels({ fontFamily: "sans-serif" });
}
