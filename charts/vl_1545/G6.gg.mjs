import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // doc-f0263a4695a024c6 / doc-b764f77a5d5c82a5 — standalone child canvas
    // doc-cbebf93910cdde5e — facet small multiples
    .createCanvas({
      width: 376,
      height: 257.390625,
      margin: { top: 19.390625, right: 129, bottom: 38, left: 47 }
    })
    .editCanvas({
      background: "#FcFdFd",
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    // doc-b764f77a5d5c82a5: createData retains every ancestor raw row
    .createData({ values: data })
    // doc-b764f77a5d5c82a5: fresh numeric alias for raw string "value"
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    // doc-cbebf93910cdde5e: ordinary semantic facade with guides:false
    .createLinePlot({
      x: { field: "year", fieldType: "temporal" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [852076800000, 1577836800000] })
    .editYScale({ domain: [0, 450] })
    .encodeColor({ field: "measure", fieldType: "nominal" })
    .editColorScale({
      domain: ["Basket cost", "Cost: hours worked", "Median wage"],
      range: ["green", "blue", "red"]
    })
    // doc-f0263a4695a024c6: source scales/axes/grid/legend BEFORE facet
    // guides decomposition: axes -> complete createXAxis/createYAxis (source fonts preserved)
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Year", fontSize: 11, offset: 27.484375 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: "%Y" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "£ or hours worked", fontSize: 11, offset: 33.6845703125 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createGrid({
      horizontal: { values: [0, 100, 200, 300, 400], lineWidth: 1 },
      vertical: {
        values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        lineWidth: 1
      }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    })
    // doc-cbebf93910cdde5e: repeat the complete child chart by region
    .facet({
      field: "region",
      values: [
        "East Anglia",
        "East Midlands",
        "London",
        "North",
        "North West",
        "Northern Ireland",
        "Scotland",
        "South East",
        "South West",
        "Wales",
        "West Midlands",
        "Yorkshire & Humber"
      ],
      headers: { fontSize: 10, fontWeight: 400, color: "black", offset: 10.609375 }
    })
    .editFacetGuides({ axes: "outer", legend: "shared" })
    .editCompositionLayout({ spacing: "plot", gap: 26, align: "start" })
    .createTitle({
      text: "Region",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      align: "center"
    })
    .editTitle({ offset: -2.421875 });
}