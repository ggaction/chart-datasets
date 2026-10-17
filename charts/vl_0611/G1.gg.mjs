// DOCS: doc-e790db38fc2a278a createScatterPlot; doc-2fcdfbdfb290e440 log scale + axis values workflow
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 575, height: 397, margin: { left: 69, top: 60, right: 6, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "aliceblue" } })
    .createData({ values: data })
    .createComputedData({
      id: "rateNum",
      as: "rate",
      expression: { op: "toNumber", operand: { field: "Application Rate" } }
    })
    .createComputedData({
      id: "gdpNum",
      as: "gdp",
      expression: { op: "toNumber", operand: { field: "GDP per capita" } }
    })
    .createScatterPlot({
      x: { field: "rate", scale: { type: "log", domain: [1, 10000] } },
      y: { field: "gdp", scale: { type: "log", domain: [2000, 120000] } },
      guides: false
    })
    .encodePointRadius({ value: 6.1237 })
    .editPointMark({ shape: "circle", fill: "rgb(128,0,0)", opacity: 0.7 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10, fontFamily: "sans-serif", offset: 7,
            flush: true,
            labelMap: [
              { value: 1, label: "1" }, { value: 2, label: "2" },
              { value: 3, label: "" }, { value: 4, label: "" }, { value: 5, label: "" },
              { value: 6, label: "" }, { value: 7, label: "" }, { value: 8, label: "" },
              { value: 9, label: "" },
              { value: 10, label: "10" }, { value: 20, label: "20" },
              { value: 30, label: "" }, { value: 40, label: "" }, { value: 50, label: "" },
              { value: 60, label: "" }, { value: 70, label: "" }, { value: 80, label: "" },
              { value: 90, label: "" },
              { value: 100, label: "100" }, { value: 200, label: "200" },
              { value: 300, label: "" }, { value: 400, label: "" }, { value: 500, label: "" },
              { value: 600, label: "" }, { value: 700, label: "" }, { value: 800, label: "" },
              { value: 900, label: "" },
              { value: 1000, label: "1,000" }, { value: 2000, label: "2,000" },
              { value: 3000, label: "" }, { value: 4000, label: "" }, { value: 5000, label: "" },
              { value: 6000, label: "" }, { value: 7000, label: "" }, { value: 8000, label: "" },
              { value: 9000, label: "" },
              { value: 10000, label: "10,000" }
            ]
          }
        },
        title: { text: "Application Rate (log scale)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 27 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [2000, 5000, 10000, 20000, 40000, 100000],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10, fontFamily: "sans-serif", offset: 7,
            labelMap: [
              { value: 2000, label: "$2,000" },
              { value: 5000, label: "$5,000" },
              { value: 10000, label: "$10,000" },
              { value: 20000, label: "$20,000" },
              { value: 40000, label: "$40,000" },
              { value: 100000, label: "$100,000" }
            ]
          }
        },
        title: { text: "GDP (log scale)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" }, offset: 51 }
      }
    })
    .createGrid({
      horizontal: {
        values: [2000, 5000, 10000, 20000, 40000, 100000],
        color: "rgba(221,221,221,0.3)"
      },
      vertical: false
    })
    .createTitle({
      text: "Patents vs GDP",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 9, fontStyle: "italic", fontWeight: 400, fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -63.7, gap: 2 })
    .editTitle({
      subtitle: "Equivalent applications by origin (per 1m inhabitants), source: WIPO\nGDP: per capita PPP (international $), source: World Bank"
    });
}