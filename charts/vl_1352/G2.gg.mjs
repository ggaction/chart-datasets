import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // DOCS: doc-4caf8f5e4552a6b2 — child canvas before facet
    .createCanvas({
      plot: { width: 300, height: 40 },
      margin: { left: 62, top: 37, right: 66, bottom: 38 },
      plotBorder: {}
    })
    .createData({ values: data })
    // DOCS: doc-9b8ffb4e65fb646c — computed field via public toNumber
    .createComputedData({
      id: "typed",
      as: "numericValue",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "numericValue", scale: { domain: [-5, 6] } },
      guides: false
    })
    .encodeColor({
      field: "type",
      scale: {
        domain: ["england_error", "london_error", "northwest_error", "southwest_error", "westmidlands_error"]
      }
    })
    .createAxes({
      x: {
        offset: 3,
        line: { color: "#888" },
        ticksAndLabels: {
          values: [1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000, 1640995200000],
          ticks: { color: "#888", length: 5 },
          labels: { format: "%Y", fontSize: 10, color: "black", offset: 3.5, alongOffset: 0.5, flush: true }
        },
        title: { text: "Time", fontSize: 11, fontWeight: 700, color: "black", offset: 25.578125, alongOffset: 0.5 }
      },
      y: {
        offset: 3,
        line: { color: "#888" },
        ticksAndLabels: {
          values: [-5, 0, 5],
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625, labelMap: [{ value: -5, label: "−5" }] }
        },
        title: { text: "Index", fontSize: 11, fontWeight: 700, color: "black", offset: 26.8232421875, alongOffset: 0.5 }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd" }
    })
    // DOCS: doc-4caf8f5e4552a6b2 — facet birth with row header column side/offset/rotation
    .facet({
      field: "area",
      values: ["England", "London", "Northwest", "Southwest", "Westmidlands"],
      headers: {
        fontSize: 10,
        fontWeight: 400,
        color: "black",
        column: { side: "left", offset: 46.0107421875, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .editFacetGuides({ axes: "outer" })
    // DOCS: doc-9b8ffb4e65fb646c — composition layout columns/spacing/gap
    .editCompositionLayout({ columns: 1, spacing: "plot", gap: 23 })
    .editCompositionLayout({ topLane: "shared" })
    // DOCS: doc-9be42ac1ab803c31 — center title creation
    .createTitle({
      text: "Error value for Experimental Index of Private Housing Rental Prices",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      align: "center"
    })
    .editTitle({
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      gap: 3.34375,
      offset: -2.316761016845703
    })
    .editTitle({
      align: "left",
      alongOffset: -56.4013671875,
      subtitle: "Index level (January 2015 = 100), Source: Own calculations"
    });
}