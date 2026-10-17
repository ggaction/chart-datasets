// DOCS: actual delivered doc-* IDs.
// doc-b11b4627b143730d createLinePlot; doc-76573a465e2b6a33 createScatterPlot; doc-071c93dff3a5ea2e line recipe; doc-eacb474f181ce5c3 option resolution.
// G1: compact integrated declaration (exact outer 351x287, plot 200x200, frozen margins).

import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Outer canvas and plot dimensions match the settled source exactly.
    .createCanvas({
      width: 351,
      height: 287,
      margin: { left: 75, top: 37, right: 76, bottom: 50 }
    })
    .createData({ id: "u", values: data })
    .createComputedData({
      id: "numeric",
      as: "numericValue",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    // Line plot: temporal x (year strings with documented temporalUnit), quantitative y.
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "numericValue",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editLineMark({ strokeWidth: 2 })
    .editXScale({ domain: [694224000000, 1609459200000] })
    .editYScale({ domain: [0, 4.5] })
    // Explicit guide tree: both inferred grids and complete X/Y axes with
    // source typography and rotated x labels.
    .createGrid({ horizontal: { color: '#ddd' }, vertical: { color: '#ddd' } })
    .createAxes({
      x: {
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            offset: 7,
            rotation: { value: -90, unit: "degrees" }
          }
        },
        title: { text: "date", fontSize: 11, offset: 43 }
      },
      y: {
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "value", fontSize: 11, offset: 26 }
      }
    })
    .editXAxis({ line: { color: "#888" }, title: { fontWeight: "bold" } })
    .editYAxis({ line: { color: "#888" }, title: { fontWeight: "bold" } })
    // Title first with fonts active (tight top margin), then subtitle + offset.
    .createTitle({
      text: "Unemployment Rate for 65 and over",
      titleStyle: { fontSize: 13, color: "black" },
      subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "black" }
    })
    .editTitle({
      subtitle: "Credit outstanding to all members, SDRs in billions, sources: IMF, Worldbank",
      align: "center",
      offset: -11.5
    });
}