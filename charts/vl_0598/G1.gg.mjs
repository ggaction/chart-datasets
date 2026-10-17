// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 339, height: 469, margin: { left: 33, top: 47, right: 6, bottom: 22 } })
    .createData({ values: data })
    .filterData({ id: "filtered", field: "UE Duration", oneOf: ["2-month", "2-year"] })
    .createComputedData({
      id: "rated",
      as: "Rate",
      expression: {
        op: "divide",
        left: {
          op: "toNumber",
          operand: {
            op: "replaceLiteral",
            operand: { field: "Replacement Rate" },
            search: "%",
            replacement: ""
          }
        },
        right: { constant: 100 }
      }
    })
    .createSummaryData({
      id: "pairedIntervals",
      groupBy: ["ISO3"],
      aggregates: [
        { op: "min", field: "Rate", as: "pairLo" },
        { op: "max", field: "Rate", as: "pairHi" }
      ]
    })
    .createRuleMark({ id: "sourceConnectors", stroke: "grey", strokeWidth: 2 })
    .encodeX({
      field: "pairLo",
      fieldType: "quantitative",
      scale: { domain: [0, 1], nice: false }
    })
    .encodeX2({ field: "pairHi", fieldType: "quantitative" })
    .encodeY({
      field: "ISO3",
      fieldType: "nominal",
      scale: {
        domain: ["GBR", "ROU", "MLT", "IRL", "TUR", "AUT", "FIN", "DEU", "CYP", "SVK", "EST", "CZE", "FRA", "HUN", "ITA", "SWE", "CHE", "ISL", "SVN", "BGR", "NOR", "LVA", "LTU", "DNK", "ESP", "HRV", "JPN", "LUX", "BEL"]
      }
    })
    .createScatterPlot({
      data: "rated",
      x: { field: "Rate", fieldType: "quantitative" },
      y: { field: "ISO3", fieldType: "nominal" },
      guides: false
    })
    .encodeColor({
      field: "UE Duration",
      fieldType: "ordinal",
      scale: { domain: ["2-month", "2-year"], range: ["#911a24", "#e6959c"] }
    })
    .encodePointRadius({ value: 5, target: "scatterPlot" })
    .editXScale({ domain: [0, 1] })
    .editYScale({
      domain: ["GBR", "ROU", "MLT", "IRL", "TUR", "AUT", "FIN", "DEU", "CYP", "SVK", "EST", "CZE", "FRA", "HUN", "ITA", "SWE", "CHE", "ISL", "SVN", "BGR", "NOR", "LVA", "LTU", "DNK", "ESP", "HRV", "JPN", "LUX", "BEL"]
    })
    .createTitle({
      text: "Benefit replacement rate",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -13
    })
    .editTitle({
      subtitle: "Long and short-term replacement of previous income, source: OECD\n",
      subtitleStyle: { fontStyle: "italic", fontSize: 10 },
      gap: 1
    })
    .editTitle({ alongOffset: -27.78 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [0, 0.2, 0.4, 0.6, 0.8, 1],
          ticks: { length: 5, color: "rgba(0,0,0,0.6)" },
          labels: { fontSize: 10, offset: 5, format: ".0%", flush: true }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          ticks: { length: 5, color: "rgba(0,0,0,0.6)" },
          labels: { fontSize: 10, offset: 4 }
        },
        title: false
      }
    })
    .createGrid({
      horizontal: false,
      vertical: { color: "rgba(221,221,221,0.6)", lineWidth: 1 }
    })
    .createLegend({
      position: "top-right",
      title: false,
      labels: { fontSize: 12 }
    });
}