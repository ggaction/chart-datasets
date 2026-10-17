import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1

export function buildChart() {
  return chart()
    .createCanvas({ width: 518, height: 304, margin: { left: 53, top: 5, right: 5, bottom: 99 } })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "Country",
        fieldType: "nominal",
      },
      y: {
        field: "Gold Reserves",
        fieldType: "quantitative",
      },
      guides: false
    })
    .editXScale({ domain: ["Argentina","Australia","Brazil","China","Euro Area","France","Germany","India","Indonesia","Italy","Japan","Mexico","Netherlands","Russia","Saudi Arabia","Singapore","South Africa","South Korea","Spain","Switzerland","Turkey","United Kingdom","United States"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 9000] })
    .createGrid({
      horizontal: { color: '#ddd', lineWidth: 1 }
    })
    .createXAxis({
      title: { text: "Country", fontSize: 11, offset: 90 },
      ticksAndLabels: { labels: { rotation: { value: 270, unit: "degrees" }, fontSize: 10 } }
    })
    .createYAxis({
      title: { text: "G20 Gold Reserves", fontSize: 11, offset: 42 },
      ticksAndLabels: { labels: { fontSize: 10 } }
    })
    .encodeBarWidth({ pixels: 18 });
}
