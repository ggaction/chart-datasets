import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-071c93dff3a5ea2e; doc-4caf8f5e4552a6b2; doc-d8d22d3671e96045
export function buildChart() {
  return chart()
    .createCanvas({ plot: { width: 200, height: 200 }, margin: { left: 30, top: 76, right: 21, bottom: 40 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .createData({ values: data })
    .createComputedData({ id: "typedWeek", as: "sourceWeek", expression: { op: "parseTime", operand: { field: "Week" }, format: "%m/%d/%Y" } })
    .createComputedData({ id: "typedValue", as: "sourceValue", expression: { op: "toNumber", operand: { field: "Value" } } })
    .filterData({ id: "visibleDates", field: "sourceWeek", noneOf: [null] }).createLinePlot({
      x: { field: "sourceWeek", fieldType: "temporal", scale: { type: "time", domain: [1515024000000, 1672531200000] } },
      y: { field: "sourceValue", scale: { zero: true, domain: [0, 100] } },
      guides: false
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [1546300800000, 1577836800000, 1609459200000, 1640995200000, 1672531200000],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", rotation: { value: 60, unit: "degrees" }, offset: 11.1953125, alongOffset: 0.16171073399532 }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 20, 40, 60, 80, 100],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: ",.0f", offset: 6.5, alongOffset: 0.890625 }
          },
          title: false
        }
      },
      grid: { horizontal: { values: [0, 20, 40, 60, 80, 100], color: "#ddd", lineWidth: 1, alongOffset: 0.5 } },
      legend: false
    })
    .editLineMark({ strokeWidth: 2, opacity: 1, curve: "linear" })
    .encodeColor({ field: "Trend", fieldType: "nominal", scale: { domain: ["Housing Bubble", "Housing Crash", "Property Market Crash"], range: ["purple", "darkred", "orange"] } })
    .facet({ field: "Trend", values: ["Housing Bubble", "Housing Crash", "Property Market Crash"], guides: { axes: "each", legend: false } })
    .editFacetScales({ y: "independent" })
    .editFacetHeaders({ fontSize: 10, fontWeight: 400, color: "black" })
    .editFacetHeaders({ offset: 14.609375 })
    .editCompositionLayout({ spacing: "plot", gap: 48, topLane: "shared" })
    .editFacetHeaders({ role: "column", title: { text: "h", fontFamily: "sans-serif", fontSize: 5, fontWeight: 700, color: "white", offset: 35.828125, alongOffset: -11 } })
    .createTitle({ text: " Can Google Trends tell us anything?", align: "left", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" } })
    .editTitle({ offset: -2.953125, alongOffset: -24.6845703125, gap: 3.34375 })
    .editTitle({ subtitle: "Values scaled between 0 and 100 where 100 represents highest peak of interest over time period. Source: Scraped from Google Trends API", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, maxWidth: 737 });
}
