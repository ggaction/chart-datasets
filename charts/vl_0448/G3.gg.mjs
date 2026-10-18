// DOCS: doc-4e183c1ba7f7e20b, doc-b1afedddb1ebef69, doc-e8f87cc635604afc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 426, height: 379, margin: { left: 39, top: 42, right: 87, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0448-original-source-font-widths",
        measurements: [
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "newDate", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 45.25 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "Sum of p", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 47.0625 },
          { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "6,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "8,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "price", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 26.296875 },
          { text: "Price distributions - pick an item", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 200.828125 },
          { text: "Prices (£), colours set by decile for the 10th to 90th deciles", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 259.578125 }
        ]
      }
    })
    .createData({ values: data })
    .filterData({ id: "priceOneOf", field: "price", oneOf: ["10", "1020", "2030", "3040", "4050", "5060", "6070", "7080", "8090"] })
    .createComputedData({ id: "dateN", as: "dateN", expression: { op: "parseTime", operand: { field: "newDate" }, format: "auto" } })
    .createComputedData({ id: "pN", as: "pN", expression: { op: "toNumber", operand: { field: "p" } } })
    .createComputedData({ id: "priceN", as: "priceN", expression: { op: "toNumber", operand: { field: "price" } } })
    .createSummaryData({ id: "decileSums", groupBy: ["dateN", "price", "priceN"], aggregates: [{ field: "pN", op: "sum", as: "sumP" }] })
    .createAreaPlot({ x: { field: "dateN", fieldType: "temporal" }, y: { field: "sumP" }, guides: false })
    .editXScale({ nice: false })
    .editYScale({ domain: [0, 40] })
    .encodeGroup({ fields: ["price"] })
    .encodeColor({ field: "priceN", fieldType: "quantitative", scale: { range: ["#D9D9F3", "#00BFFF", "#0276FD", "#000080", "#000080", "#0276FD", "#00BFFF", "#D9D9F3"], interpolate: "hcl", whitePoint: "d50" } })
    .layoutSeries({ mode: "stack" })
    .editAreaMark({ opacity: 0.7 })
    .createAxes({
      x: {
        scale: "x",
        position: "bottom",
        line: { color: "#888" },
        ticksAndLabels: {
          values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 5, color: "#888", alongOffset: 0.5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 5.5, alongOffset: 0.5, format: "%Y", flush: false }
        },
        title: { text: "newDate", offset: 27.578125, alongOffset: 0.5, fontSize: 11, fontWeight: 700, color: "black", fontFamily: "sans-serif" }
      },
      y: {
        scale: "y",
        position: "left",
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20, 25, 30, 35, 40],
          ticks: { length: 5, color: "#888", alongOffset: -0.5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 6.5, alongOffset: 0.890625 }
        },
        title: { text: "Sum of p", offset: 26.544921875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontWeight: 700, color: "black", fontFamily: "sans-serif" }
      }
    })
    .createGrid({
      vertical: { scale: "x", values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], color: "#ddd" },
      horizontal: { scale: "y", values: [0, 5, 10, 15, 20, 25, 30, 35, 40], color: "#ddd" }
    })
    .createLegend({
      title: "price",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black" }
    })
    .editLegend({
      gradient: { length: 200, thickness: 16, opacity: 0.7 }
    })
    .createTitle({ text: "Price distributions - pick an item", titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" }, subtitleStyle: { fontSize: 10, color: "black", fontFamily: "sans-serif", fontStyle: "italic" } })
    .editTitle({ alongOffset: -33.123046875, offset: -10.953125 })
    .editTitle({ subtitle: "Prices (£), colours set by decile for the 10th to 90th deciles", gap: 5.34375 });
}