// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 458, height: 377, margin: { left: 53, top: 27, right: 5, bottom: 50 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1369",
        measurements: [
          { text: "Yearly Terrorist Attacks in Iraq", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 187.15625 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "iyear_num",
      as: "yearNum",
      expression: { op: "toNumber", operand: { field: "iyear" } }
    })
    .createSummaryData({
      id: "yearly",
      groupBy: ["yearNum"],
      aggregates: [{ field: "Attack Count", op: "sum", as: "sum_Attack Count" }]
    })
    
    .createAreaPlot({ x: { field: "yearNum", fieldType: "nominal" }, y: { field: "sum_Attack Count" }, guides: false })
    .editAreaMark({ fill: "#80b1d3", opacity: 0.7, stroke: false })
    .createLinePlot({ x: { field: "yearNum", fieldType: "nominal" }, y: { field: "sum_Attack Count" }, guides: false })
    .encodeStroke({ target: "linePlot", value: "#4c78a8" })
    .encodeStrokeWidth({ value: 2, target: "linePlot" })
    .createScatterPlot({ x: { field: "yearNum", fieldType: "nominal" }, y: { field: "sum_Attack Count" }, guides: false })
    .editPointMark({ fill: "#4c78a8", opacity: 1 })
    .encodePointRadius({ value: Math.sqrt(30) / 2, target: "scatterPlot" })
    .editXScale({ type: "point", padding: 0.5, domain: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015] })
    .editYScale({ domain: [0, 4000] })
    .createGrid({ horizontal: {} })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
        ticks: {},
        labels: { fontSize: 10, offset: 2, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "Year", fontSize: 11, offset: 38.74609375 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000],
        ticks: {},
        labels: { fontSize: 10, offset: 2 }
      },
      title: { text: "Sum of Attack Count", fontSize: 11, offset: 41.5244140625 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    .editYAxisLabels({ format: ",.0f" })
    .createTitle({ text: "Yearly Terrorist Attacks in Iraq", titleStyle: { fontSize: 13, fontFamily: "sans-serif" }, offset: -10.953125 })
  .editTitle({ align: "center", titleStyle: { fontWeight: 700 } });
}