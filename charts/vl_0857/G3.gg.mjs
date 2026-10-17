// DOCS: doc-fc11e9fb291905d1, doc-bedf05337affd6f4, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 313, height: 422, margin: { top: 40, right: 5, bottom: 132, left: 58 } })
    .createData({ id: "stores", values: data })
    .createComputedData({ id: "num", as: "NetChange", expression: { op: "toNumber", operand: { field: "Net Change" } } })
    .filterData({ id: "year2022", field: "Year", oneOf: ["2022"] })
    .createBarPlot({
      x: { field: "Name", fieldType: "nominal" },
      y: { field: "NetChange", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["East Midlands", "East of England", "London", "North East", "North West", "South East", "South West", "West Midlands", "Yorkshire and The Humber"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [-1200, 200] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#557A95" })
    .createTitle({
      text: "Store Closures",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ subtitle: "Net Changes in Store opening and closures", offset: -13, alongOffset: -53 })
    .createGrid({ horizontal: { color: "#ddd" } })
    .createXAxis({
      line: {},
      ticksAndLabels: { labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } } },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { labels: { fontSize: 10, offset: 7, format: ",.0f" } },
      title: { text: "Net Change", fontSize: 11, offset: 50 }
    })
    .editXAxis({ ticksAndLabels: { labels: { fontFamily: "sans-serif" } } })
    .editYAxis({ ticksAndLabels: { labels: { fontFamily: "sans-serif" } }, title: { fontWeight: 700, fontFamily: "sans-serif" } });
}
