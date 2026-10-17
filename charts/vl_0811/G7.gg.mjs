// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

const YEARS = ["1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"];

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 505, margin: { left: 39, top: 74, right: 5, bottom: 131 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-title-glyphs",
        measurements: [
          { text: "Transfer Price Index (TPI) vs CPI", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 277.125 },
          { text: "Figure 5: 1992-2022", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "italic", width: 109.03125 },
          { text: "Average Transfer Fees (£) in the PL vs UK Inflation", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "italic", width: 271.08984375 },
          { text: "Source: Tomkins Times + Bank of England", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "italic", width: 226.62890625 }
        ]
      }
    })
    .createTitle({
      text: "Transfer Price Index (TPI) vs CPI",
      titleStyle: { fontSize: 18, fontFamily: "sans-serif" },
      alongOffset: -33.123046875
    })
    .editTitle({
      offset: -10.78125,
      gap: 2.640625,
      titleStyle: { fontWeight: 700, color: "#000" }
    })
    .editTitle({
      subtitle: "Figure 5: 1992-2022\nAverage Transfer Fees (£) in the PL vs UK Inflation\nSource: Tomkins Times + Bank of England",
      subtitleStyle: { fontSize: 12, fontWeight: 400, fontFamily: "sans-serif", fontStyle: "italic", color: "#000" }
    })
    .createLinePlot({
      x: { field: "Year", fieldType: "nominal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "Index", fieldType: "nominal" })
    .encodeGroup({ field: "Index" })
    .editLineMark({ strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "Year", fieldType: "nominal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ target: "scatterPlot", field: "Index" })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .editPointMark({ target: "scatterPlot", opacity: 1 })
    .editXScale({ type: "point", domain: YEARS })
    .editYScale({ domain: [0, 35] })
    .editColorScale({ domain: ["CPI ", "TPI"], range: ["orange", "#00ff85"] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, rotation: { value: 90, unit: "degrees" } }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        values: [0, 5, 10, 15, 20, 25, 30, 35],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Index, Base Year 1992", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "linePlot",
        channels: ["color"],
        position: "bottom",
        columns: 1,
        direction: "horizontal",
        title: "Index",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, strokeWidth: 1.5 }] },
        border: { background: "#FfFfFf" }
      }
    })
    .editLegendBlock({
      target: "linePlot",
      channel: "color",
      labelMap: [{ value: "CPI ", label: "CPI" }, { value: "TPI", label: "TPI" }]
    });
}