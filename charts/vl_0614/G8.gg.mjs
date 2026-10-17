// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 390, height: 444, margin: { left: 84, top: 57, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "labourForceNum",
      as: "labourForceNum",
      expression: { op: "toNumber", operand: { field: "Labour Force (000s)" } }
    })
    .createComputedData({
      id: "outputNum",
      as: "outputNum",
      expression: { op: "toNumber", operand: { field: "Output per worker ($)" } }
    })
    .filterData({
      id: "filtered",
      field: "labourForceNum",
      predicate: { op: "gt", value: 5000 }
    })
    .createTitle({
      text: "Output per worker",
      titleStyle: { fontSize: 12, fontFamily: "sans-serif" },
      offset: -11
    })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .editTitle({
      subtitle: "GDP:  PPP (constant 2015 $), source: World Bank 2021\nLabour force (active population), source: OECD",
      subtitleStyle: { fontSize: 9, fontStyle: "italic", fontFamily: "sans-serif" },
      alongOffset: -78
    })
    .createBarPlot({
      x: { field: "outputNum", fieldType: "quantitative" },
      y: { field: "Country", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 160000] })
    .editYScale({
      domain: ["United States", "Belgium", "Australia", "France", "Netherlands", "Germany", "Sweden", "Italy", "Canada", "United Kingdom", "Czech Republic", "South Korea", "Poland", "Spain", "T\u00fcrkiye", "Japan", "Portugal", "Chile", "Mexico", "Colombia"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editBarMark({ fill: "rgb(128,0,0)" })
    .encodeBarWidth({ band: 1 })
    .createGrid({ horizontal: false, vertical: { count: 8 } })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20000, 40000, 60000, 80000, 100000, 120000, 140000, 160000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true, labelMap: [ { value: 20000, label: "" }, { value: 60000, label: "" }, { value: 100000, label: "" }, { value: 140000, label: "" } ] }
      },
      title: { text: "Output per worker ($)", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .editXAxisLabels({ fontFamily: "sans-serif", format: ",.0f" })
    .editYAxisLabels({ fontFamily: "sans-serif" });
}