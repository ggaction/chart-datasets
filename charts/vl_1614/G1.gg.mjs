// DOCS: Retrieved documentation id doc-2e423c7211daf88a — "Error Band Chart Tutorial" (docs/tutorials/error-band.md)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 200, height: 200 },
      margin: { left: 39, top: 5, right: 7, bottom: 37 },
      plotBorder: { underlay: true }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1614-source-flush-edge-fonts",
        measurements: [
          { text: "1970", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1982", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }
        ]
      }
    })
    .createData({ values: data })
    .createTimeUnitData({ id: "years", field: "Year", unit: "year" })
    .createSummaryData({
      id: "intervals",
      groupBy: "Year_year",
      aggregates: [
        { op: "mean", field: "Miles_per_Gallon", as: "mean" },
        { op: { op: "ciLower", method: { type: "bootstrap", seed: 1 } }, field: "Miles_per_Gallon", as: "lower" },
        { op: { op: "ciUpper", method: { type: "bootstrap", seed: 1 } }, field: "Miles_per_Gallon", as: "upper" }
      ]
    })
    .createErrorBand({
      x: { field: "Year_year", fieldType: "temporal" },
      y: { center: "mean", lower: "lower", upper: "upper", scale: { domain: [14, 38] } },
      curve: "monotone"
    })
    .editErrorBand({
      fill: "#4c78a8",
      opacity: 0.3,
      boundaries: { stroke: "#4c78a8", strokeWidth: 2 }
    })
    .createGuides({
      axes: {
        x: {
          underlay: true,
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 63072000000, 126230400000, 189302400000, 252460800000, 315532800000, 378691200000],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: {
              fontSize: 10,
              color: "black",
              offset: 5.5,
              alongOffset: 0.5,
              flush: true,
              labelMap: [
                { value: 63072000000, label: "" },
                { value: 189302400000, label: "" },
                { value: 315532800000, label: "" }
              ]
            }
          },
          title: { text: "Year (year)", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 }
        },
        y: {
          underlay: true,
          line: { color: "#888" },
          ticksAndLabels: {
            values: [15, 20, 25, 30, 35],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625 }
          },
          title: { text: "Miles per Gallon (95% CI)", fontSize: 11, fontWeight: 700, color: "black", offset: 26.544921875, alongOffset: 0.5, rotation: -1.5707963267948966 }
        }
      },
      grid: {
        vertical: { values: [0, 63072000000, 126230400000, 189302400000, 252460800000, 315532800000, 378691200000], color: "#ddd" },
        horizontal: { values: [15, 20, 25, 30, 35], color: "#ddd" }
      }
    });
}