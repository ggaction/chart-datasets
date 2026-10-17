// DOCS: doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 268,
      height: 325,
      margin: { top: 5, right: 5, bottom: 120, left: 83 }
    })
    .createData({ id: "raw", values: data })
    .filterData({
      id: "filtered",
      field: "amount",
      predicate: { op: "gte", value: 10000000 }
    })
    .createSummaryData({
      id: "summed",
      groupBy: ["recip"],
      aggregates: [{ op: "sum", field: "amount", as: "sum_amount" }]
    })
    .createSortedData({
      id: "sorted",
      sortBy: [{ field: "sum_amount", order: "descending" }]
    })
    .createBarPlot({
      x: { field: "recip", fieldType: "ordinal" },
      y: { field: "sum_amount" },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8" })
    .editXScale({
      domain: [
        "Bilateral, unspecified",
        "Indonesia",
        "Georgia",
        "Malawi",
        "Mayotte",
        "India",
        "Sri Lanka",
        "South Africa",
        "Viet Nam"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 180000000] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "Recipient Countries", fontSize: 11, offset: 103 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        values: [0, 50000000, 100000000, 150000000],
        labels: { fontSize: 10, offset: 7, format: "," }
      },
      title: { text: "Total Amount Received (million)", fontSize: 11, offset: 76 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: false });
}
