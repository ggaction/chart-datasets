// DOCS: doc-e790db38fc2a278a doc-2e6240c00cb297cc doc-2fcdfbdfb290e440
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 338, height: 435, margin: { left: 32, top: 52, right: 6, bottom: 83 } })
    .createData({ values: data })
    .createComputedData({ id: "medIncomeN", as: "medIncomeN", expression: { op: "toNumber", operand: { field: "medIncome" } } })
    .createComputedData({ id: "FirearmDeathsN", as: "FirearmDeathsN", expression: { op: "toNumber", operand: { field: "FirearmDeaths" } } })
    .createScatterPlot({
      x: { field: "medIncomeN", scale: { domain: [40000, 80000] } },
      y: { field: "FirearmDeathsN", scale: { domain: [0, 0.24] } },
      guides: false
    })
    .encodeColor({ field: "GeographicDivision", palette: "set1", scale: { domain: ["Midwest", "Northeast", "South", "West"] } })
    
    .encodePointRadius({ value: 6.123724356957945 })
    .editPointMark({ opacity: 0.6, stroke: false })
    .createTitle({
      text: "Gun deaths and income - US states",
      titleStyle: { fontSize: 13, fontWeight: 700, fontStyle: "normal", color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }
    })
    .editTitle({ subtitle: "Median income (x), and firearm deaths per 100k population (y)", offset: -13, alongOffset: -26.46 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000],
          ticks: { color: "#888" },
          labels: { fontSize: 10, offset: 7, format: ",", flush: true, labelMap: [ { value: 45000, label: "" }, { value: 55000, label: "" }, { value: 65000, label: "" }, { value: 75000, label: "" } ] }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24],
          ticks: { color: "#888" },
          labels: { fontSize: 10, offset: 7, format: ".2f" }
        },
        title: false
      }
    })
    .createGrid({ horizontal: { scale: "y", color: "#ddd", lineWidth: 1 }, vertical: { scale: "x", color: "#ddd", lineWidth: 1 } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "bottom",
        layout: "legacy-bottom",
        title: false,
        labels: { fontSize: 10 }
      }
    });
}