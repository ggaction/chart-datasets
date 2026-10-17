// DOCS: doc-dfae58344d5a524e, doc-fc11e9fb291905d1, doc-333a87e52954985d, doc-7a5eff3c73a7e7f9
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 349, height: 377, margin: { left: 44, top: 40, right: 5, bottom: 37 } })
    .createData({ id: "emissions", values: data })
    .createComputedData({ id: "num", as: "Value_num", expression: { op: "toNumber", operand: { field: "Value" } } })
    .filterData({ id: "filtered", field: "Sector", oneOf: ["Agriculture", "Business", "Energy Supply", "Residential", "Transport", "Waste management"] })
    .createSortedData({ id: "sectorOrder", sortBy: [{ field: "Sector", order: "descending" }] })
    .createStackData({ category: "Year", group: "Sector", value: "Value_num" })
    .createTitle({
      text: "UK CO2 emissions \u2013 by sector",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
.editTitle({ titleStyle: { fontWeight: 700 } })
    .createBarPlot({
      guides: false,
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { lower: "Value_num_start", upper: "Value_num_end", fieldType: "quantitative" }
    })
    .editXScale({ domain: [615373572413, 1562079227586], nice: false, range: [44, 344] })
    .editYScale({ domain: [0, 800] })
    .encodeColor({
      field: "Sector",
      layout: "overlay",
    })
    .editColorScale({ domain: ["Agriculture", "Business", "Energy Supply", "Residential", "Transport", "Waste management"], range: ["rgb(206, 236, 180)", "rgb(154, 215, 184)", "rgb(95, 192, 191)", "rgb(51, 164, 193)", "rgb(33, 126, 182)", "rgb(34, 83, 162)"] })
    .encodeBarWidth({ pixels: 5 })
    .editTitle({ subtitle: "Millon tonnes. 1990-2019. Source: Gov.uk (BEIS)", offset: -11, alongOffset: -38.7 })
    .createXAxis({
      ticksAndLabels: {
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: "%Y" }
      },
      title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500, 600, 700, 800],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Value", fontSize: 11, fontWeight: 700, offset: 35 }
    })
    .createLegend({ position: "top-right", columns: 2, title: "Sector" })
    .editLegendTitle({ fontSize: 11 })
    .editLegendLabels({ fontSize: 10 });
}