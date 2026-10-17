// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 490, height: 381, margin: { left: 84, top: 59, right: 6, bottom: 22 } })
    .createTitle({
      text: "US: top trade partners - goods",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: 700 }
    })
    .editTitle({ alongOffset: -78.15234375, titleStyle: { color: "black" } })
    .editTitle({
      gap: 3,
      subtitle: "Total trade (imports plus exports). Annual to 2023. Million USD.\nSource: Census Bureau",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .createData({ values: data })
    .createComputedData({ id: "tradeTotalN", as: "tradeTotalN", expression: { op: "toNumber", operand: { field: "tradeTotal" } } })
    .createComputedData({ id: "partnerN", as: "partnerN", expression: { op: "toNumber", operand: { field: "tradePartner" } } })
    .filterData({ id: "top20", field: "partnerN", predicate: { op: "lt", value: 21 } })
    .createSortedData({ id: "sorted", source: "top20", sortBy: [{ field: "tradeTotalN", order: "descending" }] })
    .createBarPlot({
      x: "tradeTotalN",
      y: "Country",
      guides: false
    })
    .editBarMark({ fill: "rgb(128,0,0)" })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 130000] })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000],
        labels: { fontSize: 10, offset: 7, format: ".0f", color: "black", overlap: "allow", flush: true, labelMap: [
  { value: 10000, label: "" },
  { value: 30000, label: "" },
  { value: 50000, label: "" },
  { value: 70000, label: "" },
  { value: 90000, label: "" },
  { value: 110000, label: "" },
  { value: 130000, label: "" }
] }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { labels: { fontSize: 10, offset: 7, color: "black" } },
      title: false
    })
    .createGrid({
      horizontal: false,
      vertical: {
        values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000]
      }
    })
    .editVerticalGrid({ color: "white", lineWidth: 0.5, zIndex: 1 });
}
