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
    // Axes first, then horizontal grid (#ddd, no vertical), then the outside legend.
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: {
          format: "%Y",
          rotation: { value: 45, unit: "degrees" },
          fontSize: 10,
          offset: 5
        }
      },
      title: false
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisLabels({ color: "black", fontFamily: "sans-serif" })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({
      color: "#888",
      lineWidth: 1
    })
    .editYAxisLabels({
      color: "black",
      fontFamily: "sans-serif"
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false })
    .createLegend({
      title: "Country",
      titleStyle: { fontSize: 11, fontWeight: "bold" },
      labels: { fontSize: 10 }
    });
}