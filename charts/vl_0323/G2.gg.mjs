// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e, doc-1740a98a3616e322, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

// G1: complete integrated first render. Frozen canvas 439x365, margins {38,35,101,30},
// plot 300x300 preserved. Raw "Year" strings already parse as Jan-1 dates in the temporal x binding.
export function buildChart() {
  return chart()
    // Source outer size with room for the right-side outside legend (contract margins).
    .createCanvas({
      width: 453,
      height: 365,
      margin: { left: 38, top: 35, right: 115, bottom: 30 }
    })
    .createData({ values: data })
    // Title block first so tight top margin (35) holds fonts before subtitle layout.
    .createTitle({
      text: "Long-term Migration in the UK",
      offset: -13,
      titleStyle: { color: "black", fontSize: 13 }
    })
    .createLinePlot({
      guides: false,
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "value", fieldType: "quantitative" },
    })
    .encodeColor({
      field: "Category",
      fieldType: "nominal",
    })
    .editXScale({ type: "time", domain: [662688000000, 1640995200000] })
    .editYScale({ domain: [-100, 1100] })
    .editColorScale({
      domain: ["Emigration", "Immigration", "Net migration"],
      range: ["#033542", "#78969d", "#AFE1AF"]
    })
    .editTitle({
      subtitle: "In thousands, source ONS",
      subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "black" },
      gap: 0
    })
    // Consolidated guides: source horizontal grid #ddd (no vertical grid),
    // both display axes, and the outside right color legend with library defaults.
    .createGuides({
      grid: { horizontal: { color: "#ddd" }, vertical: false },
      axes: {
        // X: source ticks hidden, no axis title, 45-degree rotated labels.
        x: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            ticks: { length: 0 },
            labels: {
              format: "%Y",
              rotation: { value: 45, unit: "degrees" },
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 5,
              color: "black"
            }
          },
          title: false
        },
        // Y: real display axis with labels and 5px ticks.
        y: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
          },
          title: false
        }
      },
      legend: {
        title: "Country",
        titleStyle: { fontSize: 11, fontWeight: "bold" },
        labels: { fontSize: 10 }
      }
    });
}