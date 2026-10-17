// DOCS: doc-fc11e9fb291905d1, doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 988, height: 696, margin: { left: 382, top: 5, right: 6, bottom: 91 } })
    .createData({ id: "raw", values: data })
    .filterData({ id: "filtered", field: "count", predicate: { op: "lt", value: 50 } })
    .createBarPlot({
      x: { field: "count", fieldType: "quantitative" },
      y: { field: "field", fieldType: "nominal" },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 6] })
    .editYScale({
      domain: ["Seat comfort", "Departure/Arrival time convenient", "Food and drink", "Gate location", "Inflight wifi service", "Inflight entertainment", "Online support", "Ease of Online booking", "On-board service", "Leg room service", "Checkin service", "Cleanliness", "Online boarding", "Baggage handling", "Class", "satisfaction_v2", "Gender", "Customer Type", "Type of Travel"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .createGrid({ horizontal: false, vertical: {} })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 24, offset: 22.9, labelMap: [{ value: "Departure/Arrival time convenient", label: "Departure/Arrival time conveni…" }] } },
      title: { text: "field", fontSize: 36, offset: 257, rotation: { value: -90, unit: "degrees" } }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6],
        ticks: {},
        labels: { fontSize: 24, offset: 4.5, flush: true, labelMap: [{ value: 0.5, label: "" }, { value: 1.5, label: "" }, { value: 2.5, label: "" }, { value: 3.5, label: "" }, { value: 4.5, label: "" }, { value: 5.5, label: "" }] }
      },
      title: { text: "count", fontSize: 36, offset: 69 }
    })
    .editYAxis({ title: { fontWeight: 700 } })
    .editXAxis({ labels: { format: ".1f" }, title: { fontWeight: 700 } });
}