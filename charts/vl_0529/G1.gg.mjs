// DOCS: doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 352, height: 369, margin: { left: 186, top: 47, right: 6, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "dVenueName", as: "venue_name", expression: { op: "getPath", operand: { field: "venue" }, path: ["name"] } })
    .createComputedData({ id: "dVenueCap", as: "venue_capacity", expression: { op: "getPath", operand: { field: "venue" }, path: ["capacity"] } })
    .filterData({ id: "vNamed", field: "venue_name", noneOf: [null] })
    .createSummaryData({ id: "venues", groupBy: ["venue_name"], aggregates: [{ field: "venue_capacity", op: "mean", as: "capacity" }] })
    .createSortedData({ id: "venuesSorted", sortBy: [{ field: "venue_name", order: "ascending" }] })
    .createBarPlot({ x: "capacity", y: "venue_name", guides: false })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 80000] })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ fill: "rgba(0,67,167,1)", opacity: 1, stroke: "none" })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-venue-axis-glyphs", measurements: [{ text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "60,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "80,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "American Express Community Stadium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 173.953125 }, { text: "Anfield", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.578125 }, { text: "Bramall Lane", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 58.921875 }, { text: "Craven Cottage", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 70.046875 }, { text: "Elland Road", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 54.484375 }, { text: "Emirates Stadium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 78.921875 }, { text: "Etihad Stadium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 67.828125 }, { text: "Goodison Park", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 66.15625 }, { text: "King Power Stadium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 90.609375 }, { text: "London Stadium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 72.84375 }, { text: "Molineux Stadium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 79.484375 }, { text: "Old Trafford", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 52.640625 }, { text: "Selhurst Park", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 60.03125 }, { text: "Stamford Bridge", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 72.265625 }, { text: "The Hawthorns", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 67.8125 }, { text: "Tottenham Hotspur Stadium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 123.953125 }, { text: "Turf Moor", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 42.984375 }, { text: "Villa Park", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 42.0625 }] } })
    .createAxes({
      x: {
        title: false,
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 20000, 40000, 60000, 80000],
          ticks: { color: "#888" },
          labels: {
            fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f", flush: true,
            labelMap: [{ value: 20000, label: "" }, { value: 60000, label: "" }]
          }
        }
      },
      y: {
        title: false,
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        }
      }
    })
    .createGrid({ horizontal: false, vertical: { color: "#ddd", lineWidth: 1 } })
    .createTitle({
      text: "Premiership - venues",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ gap: 1, offset: -13, alongOffset: -181 })
    .editTitle({ subtitle: "Stadium capacity, 20/21 season\n" });
}