import { chart } from "ggaction"; // DOCS: doc-b9261a4b2909a353
import data from "./data.json";

export function buildChart() { // DOCS: doc-b9261a4b2909a353
  return chart()
    .createCanvas({ // DOCS: doc-b9261a4b2909a353
      plot: { width: 200, height: 300 },
      margin: { left: 22, right: 94, top: 71, bottom: 23 },
      plotBorder: { color: "#ddd", lineWidth: 1, underlay: true }
    })
    .applyTextMetrics({ // DOCS: doc-b9261a4b2909a353
      profile: {
        schemaVersion: 1,
        id: "source0588-original-flush-endpoint-fonts",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }
        ]
      }
    })
    .createData({ values: data }) // DOCS: doc-b9261a4b2909a353
    .createFoldData({ // DOCS: doc-b9261a4b2909a353
      id: "folded",
      fields: ["PV_b1", "PV_b2", "PV_b3"],
      as: { key: "asset", value: "value" }
    })
    .createComputedData({ // DOCS: doc-b9261a4b2909a353
      id: "numericYear",
      as: "sourceYear",
      expression: { op: "toNumber", operand: { field: "year" } }
    })
    .createComputedData({ // DOCS: doc-b9261a4b2909a353
      id: "numericValue",
      as: "sourceValue",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({ // DOCS: doc-b9261a4b2909a353
      x: { field: "sourceYear" },
      y: { field: "sourceValue" },
      guides: false
    })
    .editXScale({ domain: [0, 30] }) // DOCS: doc-b9261a4b2909a353
    .editYScale({ zero: true, nice: { count: 10 } }) // DOCS: doc-b9261a4b2909a353
    .createXAxis({ // DOCS: doc-b9261a4b2909a353
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30],
        ticks: { length: 5 },
        labels: { fontSize: 10, color: "black", format: ".0f", flush: true, offset: 6.5, alongOffset: 0.5 }
      },
      title: false
    })
    .createYAxis({ // DOCS: doc-b9261a4b2909a353
      offset: 4,
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        ticks: { length: 5 },
        labels: { fontSize: 10, color: "black", format: ".0f", offset: 6.5, alongOffset: 0.890625 }
      },
      title: false
    })
    .editXAxis({ line: { color: "#888" } }) // DOCS: doc-b9261a4b2909a353
    .editYAxis({ line: { color: "#888" } }) // DOCS: doc-b9261a4b2909a353
    .editXAxisTicks({ color: "#888", alongOffset: 0.5 })
    .editYAxisTicks({ color: "#888", alongOffset: 0.5 }) // DOCS: doc-b9261a4b2909a353
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .editLineMark({ strokeWidth: 1 }) // DOCS: doc-b9261a4b2909a353
    .encodeColor({ // DOCS: doc-b9261a4b2909a353
      field: "riskFreeRate",
      fieldType: "nominal",
      scale: { domain: ["0.01", "0.03", "0.1"], range: ["#4c78a8", "#f58518", "#e45756"] }
    })
    .encodeStroke({ // DOCS: doc-b9261a4b2909a353
      field: "riskFreeRate",
      fieldType: "nominal",
      scale: { domain: ["0.01", "0.03", "0.1"], range: ["#4c78a8", "#f58518", "#e45756"] }
    })
    .createLegend({ // DOCS: doc-b9261a4b2909a353
      symbol: { layers: [{ type: "point", size: 5, strokeWidth: 1.5 }] },
      titleStyle: { fontSize: 11, fontWeight: 700, color: "#000" },
      labels: { fontSize: 10, color: "#000" }
    })
    .createScatterPlot({ x: { field: "sourceYear" }, y: { field: "sourceValue" }, guides: false }) // DOCS: doc-b9261a4b2909a353
    .editPointMark({ stroke: false, opacity: 1 }) // DOCS: doc-b9261a4b2909a353
    .encodeColor({ // DOCS: doc-b9261a4b2909a353
      field: "riskFreeRate",
      fieldType: "nominal",
      scale: { domain: ["0.01", "0.03", "0.1"], range: ["#4c78a8", "#f58518", "#e45756"] }
    })
    .encodePointRadius({ value: 2.7386127875258306 }) // DOCS: doc-b9261a4b2909a353
    .facet({ field: "asset", data: "folded", values: ["PV_b1", "PV_b2", "PV_b3"] }) // DOCS: doc-b9261a4b2909a353
    .editFacetHeaders({ fontSize: 10, fontWeight: 400, color: "black" }) // DOCS: doc-b9261a4b2909a353
    .editFacetGuides({ axes: "outer", legend: "shared" }) // DOCS: doc-b9261a4b2909a353
    .editCompositionLayout({ columns: 3, gap: 28, spacing: "plot" }) // DOCS: doc-b9261a4b2909a353
    .editFacetHeaders({ offset: 9.609375, anchor: "content" }) // DOCS: doc-b9261a4b2909a353
    .editCompositionLayout({ topLane: "shared" }) // DOCS: doc-b9261a4b2909a353
    .createTitle({ // DOCS: doc-b9261a4b2909a353
      text: "Three assets: discounted payoffs",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -16.5615234375
    })
    .editTitle({ offset: -2.6917343139648438 }) // DOCS: doc-b9261a4b2909a353
    .editTitle({ // DOCS: doc-b9261a4b2909a353
      subtitle: "Valuation of future payoffs at various discount rates",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" },
      gap: 3.34375
    });
}