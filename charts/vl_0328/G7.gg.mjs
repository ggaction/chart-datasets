// DOCS: doc-e790db38fc2a278a doc-2e6240c00cb297cc doc-2bd5de4bd99e314a doc-48c72317a1a99e17 doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Outer 562x377, margins fixed from contract.canvas.margin (legend room on right).
    .createCanvas({
      width: 586,
      height: 377,
      margin: { left: 53, top: 40, right: 133, bottom: 37 }
    })
    // Raw numeric fields are numeric strings; derive typed numbers first.
    .createData({ values: data })
    .createComputedData({
      id: "fbNum",
      as: "foreignBorn",
      expression: { op: "toNumber", operand: { field: "foreign born (mns)" } }
    })
    .createComputedData({
      id: "gdpNum",
      as: "gdpBns",
      expression: { op: "toNumber", operand: { field: "GDP(bns)" } }
    })
    .createComputedData({
      id: "popNum",
      as: "population_num",
      expression: { op: "toNumber", operand: { field: "population" } }
    })
    // Integrated high-level declaration: x/y together, guides off for explicit guide tree.
    .createScatterPlot({
      x: { field: "foreignBorn", fieldType: "quantitative" },
      y: { field: "gdpBns", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 14] })
    .editYScale({ target: "scatterPlot", domain: [0, 4000], zero: true })
    // Bubble size channel with source-resolved area scale.
    .encodeSize({ field: "population_num", fieldType: "quantitative" })
    .editSizeScale({ target: "scatterPlot", domain: [0, 82657002], range: [3.141592653589793, 283.5287362364788] })
    // Constant source color, opacity and symbol stroke width.
    .editPointMark({ fill: "#6DE18E", opacity: 0.7 })
    // Axes: source grid:false on both; line #888, labels 10px, titles 11px bold.
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Foreign born population (mns)", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "GDP(bns)", fontSize: 11, offset: 45 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    // Size legend on the reserved right margin.
    .createLegend({
      channels: ["size"],
      title: "Total Population",
      position: "right"
    })
    .editLegendBlock({ target: "scatterPlot", channel: "size", values: [0, 20000000, 40000000, 60000000, 80000000] })
    .editLegendTitle({ fontSize: 11, fontWeight: 700 })
    .editLegendLabels({ format: ",.0f", fontSize: 10 })
    // Source title: 13px bold left-anchored, negative offset for the tight top margin.
    .createTitle({
      text: "GDP & Immigration",
      titleStyle: { fontSize: 13 },
      alongOffset: -47
    })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .editTitle({
      offset: -13,
      subtitle: "GDP (USD, constant prices), Source:OECD, World Bank",
      subtitleStyle: { fontStyle: "italic", fontSize: 10 }
    });
}
