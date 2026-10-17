import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-fc11e9fb291905d1 (createBarPlot), doc-528747d87d019019 (createData/ordered-category example)

export function buildChart() {
  return chart()
    .createCanvas({
      width: 730,
      height: 420,
      margin: { left: 161, top: 83, right: 69, bottom: 37 }
    })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "num",
      as: "numValue",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createSortedData({
      id: "sorted",
      source: "num",
      sortBy: [{ field: "Type3", order: "ascending" }]
    })
    .createStackData({
      category: "Type2",
      group: "Type3",
      value: "numValue"
    })
    .createBarPlot({
      x: {
        lower: "numValue_start",
        upper: "numValue_end",
        fieldType: "quantitative"
      },
      y: {
        field: "Type2",
        fieldType: "nominal"
      },
      guides: false
    })
    .encodeColor({
      field: "Type3",
      fieldType: "nominal"
    })
    .editXScale({ domain: [0, 35000], zero: true })
    .editYScale({
      domain: [
        "Technical Barriers to Trade (TBT)",
        "Sanitary and Phytosanitary (SPS)",
        "Anti-Dumping",
        "Tariff-rate quotas",
        "Export Subsidies",
        "Special Safeguards",
        "State Trading Enterprises",
        "Countervailing",
        "Quatitative Restrictions",
        "Safeguards"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editColorScale({ domain: ["In Force", "Initiated"], range: ["#4c78a8", "#f58518"] })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 4000, 8000, 12000, 16000, 20000, 24000, 28000, 32000],
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 0, label: "0" },
            { value: 4000, label: "4,000" },
            { value: 8000, label: "8,000" },
            { value: 12000, label: "12,000" },
            { value: 16000, label: "16,000" },
            { value: 20000, label: "20,000" },
            { value: 24000, label: "24,000" },
            { value: 28000, label: "28,000" },
            { value: 32000, label: "32,000" }
          ]
        }
      },
      title: {
        text: "Number of Measures",
        fontSize: 11,
        offset: 28
      }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({ title: false, labels: { fontSize: 10 } })
    .editLegendLayout({ at: { x: -99, y: -31 } })
    .createTitle({
      text: "Measures Intitiated and In Force as of 31/12/2021",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({
      subtitle: "Source: WTO",
      subtitleStyle: { fontSize: 13, fontWeight: 400, fontFamily: "sans-serif" },
      gap: 3
    })
    .editTitle({
      alongOffset: -155.9599609375,
      titleStyle: { fontWeight: 700 }
    })
    .editLegendLayout({ columns: 13 })
    .editCanvas({ width: 666, height: 420, margin: { left: 161, top: 83, right: 5, bottom: 37 } });
}