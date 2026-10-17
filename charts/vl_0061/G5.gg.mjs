// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 694,
      height: 347,
      margin: { left: 50, top: 10, right: 144, bottom: 37 }
    })
    .createData({ id: "worldData", values: data })
    .createComputedData({
      id: "incomeNum",
      as: "income_n",
      expression: { op: "toNumber", operand: { field: "income" } }
    })
    .createComputedData({
      id: "healthNum",
      as: "health_n",
      expression: { op: "toNumber", operand: { field: "health" } }
    })
    .createComputedData({
      id: "populationNum",
      as: "population_n",
      expression: { op: "toNumber", operand: { field: "population" } }
    })
    .createScatterPlot({
      x: {
        field: "income_n",
        fieldType: "quantitative"
      },
      y: {
        field: "health_n",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ type: "log", domain: [100, 1000000], nice: false })
    .editYScale({ domain: [45, 85], zero: false, nice: false })
    .encodeSize({
      field: "population_n",
      fieldType: "quantitative"
    })
    .editSizeScale({ domain: [0, 1376048943], range: [3.141592653589793, 283.5287369864788] })
    .editPointMark({ opacity: 0.7 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [100, 200, 1000, 2000, 10000, 20000, 100000, 200000, 1000000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "income", fontSize: 11, fontWeight: 700 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [45, 50, 55, 60, 65, 70, 75, 80, 85],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "health", fontSize: 11, fontWeight: 700 }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createLegend({
      title: "population",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "size",
      values: [0, 200000000, 400000000, 600000000, 800000000, 1000000000, 1200000000]
    })
  .editYAxis({
    title: {
      offset: 38.421875
    }
  })
  .editLegendLabels({ format: ",.0f" });
}