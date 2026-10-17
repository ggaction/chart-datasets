import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d (createLinePlot wraps createGuides; complete chart facade)
// DOCS: doc-cbebf93910cdde5e (facet repeats a complete chart by field value)
export function buildChart() {
  return chart()
    // Verified STANDALONE CHILD canvas: width/height/margin only (3 keys).
    // DOCS: doc-cbebf93910cdde5e (child canvas then facet composition)
    .createCanvas({
      width: 376,
      height: 257.390625,
      margin: { top: 19.390625, right: 129, bottom: 38, left: 47 }
    })

    // Complete frozen ancestor dataset, every raw row retained.
    .createData({ values: data })

    // Fresh numeric alias: raw "value" strings -> toNumber (raw rows unchanged).
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })

    // Ordinary semantic facade; four-digit raw year strings use native temporal input.
    .createLinePlot({
      x: { field: "year", fieldType: "temporal" },
      y: "valueNum",
      guides: false
    })

    // Source positional scales installed immediately after the facade, before guides.
    .editXScale({ type: "time", domain: [852076800000, 1577836800000] })
    .editYScale({ domain: [0, 450] })

    // Categorical color channel; scale policies owned by the dedicated scale editor.
    .encodeColor({ field: "measure", fieldType: "nominal" })
    .editColorScale({
      domain: ["Basket cost", "Cost: hours worked", "Median wage"],
      range: ["green", "blue", "red"]
    })

    // Canvas paint + source plot border before facet.
    .editCanvas({
      background: "#FcFdFd",
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })

    // Complete axes at source fonts, ticks, values, offsets (bottom/left defaults omitted).
    .createXAxis({
      ticksAndLabels: {
        values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: "%Y", flush: true }
      },
      title: {
        text: "Year",
        fontSize: 11,
        offset: 27.484375
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "£ or hours worked",
        fontSize: 11,
        offset: 33.6845703125
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })

    // Source grid: both directions, exact values and paint.
    .createGrid({
      horizontal: { values: [0, 100, 200, 300, 400], lineWidth: 1 },
      vertical: {
        values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        lineWidth: 1
      }
    })

    // Grid paint family transferred to focused directional editors (both directions paired).
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })

    // Shared stroke legend at source fonts (3 keys); symbol recipe moved to whole-legend edit.
    .createLegend({
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 },
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    })

    // Single facet call: actual painted 12-column placement wins over authored columns.
    .editLegendTitle({ fontWeight: 700, color: "black" })
    .editLegendLabels({ color: "black" })

    .facet({
      field: "region",
      values: [
        "East Anglia", "East Midlands", "London", "North", "North West",
        "Northern Ireland", "Scotland", "South East", "South West",
        "Wales", "West Midlands", "Yorkshire & Humber"
      ],
      headers: { fontSize: 10, offset: 10.609375 }
    })
    .editFacetHeaders({ fontWeight: 400, color: "black" })

    // Source global guide ownership: outer axes, shared legend.
    .editFacetGuides({ axes: "outer", legend: "shared" })

    // Source after-birth composition layout policy.
    .editCompositionLayout({ spacing: "plot", gap: 26, align: "start" })

    // Parent field heading "Region" as centered title at source fonts.
    .createTitle({
      text: "Region",
      align: "center",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }
    })
    .editTitle({ offset: -2.421875 });
}