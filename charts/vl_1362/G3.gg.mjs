import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-9bb354f4e2d46693

const years = [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];
const yTicks = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

export function buildChart() {
  return chart()
    .createCanvas({ width: 619, height: 477, margin: { left: 53, top: 27, right: 166, bottom: 50 } })
    .createData({ values: data })
    .createComputedData({
      id: "numericYears",
      as: "yearNumber",
      expression: { op: "toNumber", operand: { field: "iyear" } }
    })
    .createSummaryData({
      id: "attacks",
      groupBy: ["yearNumber", "weaptype1_txt"],
      aggregates: [{ field: "Attack Count", op: "sum", as: "sum_Attack Count" }]
    })
    .createLinePlot({
      x: { field: "yearNumber", fieldType: "nominal" },
      y: { field: "sum_Attack Count" },
      guides: false
    })
    .encodeColor({
      field: "weaptype1_txt",
      fieldType: "nominal"
    })
    
    .encodeGroup({ field: "weaptype1_txt" })
    .editLineMark({ strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "yearNumber", fieldType: "nominal" },
      y: { field: "sum_Attack Count" },
      guides: false
    })
    .encodeColor({
      target: "scatterPlot",
      field: "weaptype1_txt"
    })
    .editColorScale({
      domain: ["Explosives/Bombs/Dynamite", "Firearms", "Incendiary", "Melee", "Unknown"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .encodePointRadius({ target: "scatterPlot", value: Math.sqrt(30) / 2 })
    .editPointMark({ target: "scatterPlot", opacity: 1 })
    .editXScale({ domain: years })
    .editYScale({ domain: [0, 1000] })
    .createXAxis({
      ticksAndLabels: {
        values: years,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 39.82421875 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: yTicks,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: ",.0f" }
      },
      title: { text: "Sum of Attack Count", fontSize: 11, fontWeight: 700, offset: 34 }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false })
    .createLegend({
      target: "scatterPlot",
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif", offset: 8 }
    })
    .editLegend({
      target: "scatterPlot",
      title: "Weapon Type",
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
    })
    .createTitle({
      text: "Yearly Terrorist Attacks in Baghdad by Weapon",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -13
    })
    .editTitle({ align: "center" });
}