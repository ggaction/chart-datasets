// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot),
// doc-ba092ec842bafcc1 (basic types), doc-b257fb08998617a5 (grouped-bar trace),
// doc-5f9c35fbf79658cc (action reference)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Canvas: contract outer size and margins (source plot 350x200 preserved)
    .createCanvas({
      width: 591,
      height: 248,
      margin: { left: 51, top: 10, right: 190, bottom: 38 }
    })
    // Immutable raw data
    .createData({
      values: data
    })
    // transform[0]/[1]: signed_percentage from confidenceDegree
    .createComputedData({
      id: "signed",
      as: "signed_percentage",
      expression: {
        op: "if",
        condition: {
          op: "or",
          operands: [
            { op: "eq", left: { field: "confidenceDegree" }, right: { constant: "Disagree" } },
            { op: "eq", left: { field: "confidenceDegree" }, right: { constant: "Strongly disagree" } }
          ]
        },
        then: { field: "percentage" },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "confidenceDegree" }, right: { constant: "Not agree and not disagree" } },
          then: { op: "divide", left: { field: "percentage" }, right: { constant: 2 } },
          else: { constant: 0 }
        }
      }
    })
    // transform[2]: stack percentage by choice (row order preserves category order)
    .createStackData({
      category: "choice",
      group: "confidenceDegree",
      value: "percentage"
    })
    // transform[3]: joinaggregate sum of signed_percentage per choice
    .createWindowData({
      id: "offset",
      partitionBy: ["choice"],
      operations: [{ op: "movingSum", field: "signed_percentage", as: "offset", frame: { preceding: 4, following: 4 } }]
    })
    // transform[4]/[5]: centered stacked bounds ny/ny2
    .createComputedData({
      id: "centered",
      as: "ny",
      expression: {
        op: "subtract",
        left: { field: "percentage_start" },
        right: { field: "offset" }
      }
    })
    .createComputedData({
      id: "final",
      as: "ny2",
      expression: {
        op: "subtract",
        left: { field: "percentage_end" },
        right: { field: "offset" }
      }
    })
    // Diverging stacked bar: quantitative range on y, nominal choice on x
    .createBarPlot({
      x: "choice",
      y: { lower: "ny", upper: "ny2" },
      guides: false
    })
    // Color channel: exact source ordinal scale
    .encodeColor({
      field: "confidenceDegree",
      fieldType: "nominal",
      scale: {
        domain: ["Strongly disagree", "Disagree", "Not agree and not disagree", "Agree", "Strongly agree"],
        range: ["#1770ab", "#94c6da", "#cccccc", "#f3a583", "#c30d24"]
      }
    })
    // Source bar width 43px
    .encodeBarWidth({ pixels: 43 })
    // Pin resolved x band scale
    .editXScale({
      domain: ["1", "2", "3", "4"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    // Pin resolved y linear domain
    .editYScale({
      domain: [-0.5, 0.8]
    })
    // X axis: no domain line, no ticks, bolder labels with conditional color for "2"
    .createXAxis({
      line: false,
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: {
          offset: 5,
          fontSize: 12,
          fontWeight: "bolder",
          color: "#b03060",
          colorMap: [{ value: "2", color: "#016936" }]
        }
      },
      title: { text: "Choice", fontSize: 11, fontWeight: "bold", offset: 28 }
    })
    // Y axis: default line/ticks, percent labels at resolved tick values
    .createYAxis({
      ticksAndLabels: {
        values: [-0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8],
        labels: { offset: 7, fontSize: 10, format: ".0%" }
      },
      title: { text: "percentage of voters", fontSize: 11, fontWeight: "bold", offset: 40 }
    })
    // Grid-only horizontal grid at y tick positions (#ddd), no vertical grid
    .createGrid({
      vertical: false,
      horizontal: {
        values: [-0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8],
        color: "#ddd"
      }
    })
    // Legend: Confidence degree, outside right with default offset
    .createLegend({
      channels: ["color"],
      title: "Confidence degree"
    });
}