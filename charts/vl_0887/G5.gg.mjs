// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33 — createLinePlot / createScatterPlot overlay, complete axes, grid, legend, title (initial settled "All" render).
import { chart } from "ggaction";
import data from "./data.json";

const X_DOMAIN = [63072000000, 1640995200000];
const X_TICKS = [157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000];
const Y_TICKS = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8];
const COLOR_RANGE = ["#a12800", "#ee3b00", "#551500", "#631b00", "#882200", "#a12800"];
const xBinding = { field: "Year", fieldType: "temporal", temporalUnit: "year" };
const yBinding = { field: "ValueNum", fieldType: "quantitative" };
const gridPaint = { color: "rgba(221,221,221,0.4)" };

export function buildChart() {
  return chart()
    .createCanvas({ width: 547, height: 378, margin: { left: 48, top: 41, right: 99, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "viewAll", field: "dum", oneOf: ["All"] })
    .createComputedData({ id: "lfpr", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({ x: xBinding, y: yBinding, guides: false })
    .encodeColor({ field: "Series ID" })
    .editLineMark({ strokeWidth: 2, opacity: 1 })
    .createScatterPlot({ x: xBinding, y: yBinding, guides: false })
    .encodeColor({ target: "scatterPlot", field: "Series ID" })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .editPointMark({ target: "scatterPlot", opacity: 1 })
    .editXScale({ domain: X_DOMAIN })
    .editYScale({ domain: [0, 0.8] })
    .editColorScale({ domain: ["All"], range: COLOR_RANGE })
    .createTitle({ text: "Labour Force Participation Rate 1972-2023 in the United Kingdom", titleStyle: { fontSize: 13, fontWeight: 700 }, subtitleStyle: { fontSize: 12 } })
    .editTitle({ subtitle: "Sources: ONS & the OECD", offset: -5, gap: 1 })
    .editTitle({ alongOffset: -42 })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: X_TICKS, labels: { format: "%Y", fontSize: 10, offset: 7 } },
      title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: Y_TICKS, labels: { format: ".0%", fontSize: 10, offset: 7 } },
      title: { text: "Labor Force Participation Rate", fontSize: 11, fontWeight: 700, offset: 36.0146484375 }
    })
    .createGrid({
      horizontal: { ...gridPaint, values: Y_TICKS },
      vertical: { ...gridPaint, values: X_TICKS }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "Demographic:",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, strokeWidth: 1.5 }] }
      }
    });
}