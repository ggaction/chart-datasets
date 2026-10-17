// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-80198e379a34e5ab, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 575, height: 422, margin: { left: 69, top: 85, right: 6, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "aliceblue" } })
    .createData({ values: data })
    .createComputedData({ id: "hciNum", as: "hci", expression: { op: "if", condition: { op: "eq", left: { field: "Human Capital Index" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Human Capital Index" } } } })
    .createComputedData({ id: "gdpNum", as: "gdp", expression: { op: "if", condition: { op: "eq", left: { field: "GDP per capita (PPP)" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "GDP per capita (PPP)" } } } })
    .createComputedData({ id: "popNum", as: "pop", expression: { op: "toNumber", operand: { field: "Population" } } })
    .filterData({ id: "hciPos", field: "hci", predicate: { op: "gt", value: 0 } })
    .filterData({ id: "gdpValid", field: "gdp", predicate: { op: "gt", value: 1000 } })
    .createTitle({
      text: "Human Capital Index",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 9, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ gap: 2, offset: -13, alongOffset: -64 })
    .editTitle({ subtitle: "Distance to optimal education and full health, source: World Bank\nGDP: per capita PPP (international $) source: World Bank\n" })
    .createScatterPlot({
      x: { field: "hci", fieldType: "quantitative", scale: { domain: [0.25, 0.9], nice: false } },
      y: { field: "gdp", fieldType: "quantitative", scale: { type: "log", domain: [1000, 100000] } },
      guides: false
    })
    .encodeColor({
      field: "Continent",
      fieldType: "nominal",
      scale: { domain: ["Africa", "America", "Asia", "Europe", "Oceania"], palette: "set1" }
    })
    .encodeSize({
      field: "pop",
      fieldType: "quantitative",
      scale: { domain: [0, 1411100000], range: [3 * Math.PI, 150 * Math.PI] }
    })
    .editPointMark({ opacity: 0.8 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9],
            ticks: { length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".2f", flush: true }
          },
          title: { text: "Human Capital Index", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 30 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [1000, 2000, 5000, 10000, 20000, 40000, 100000],
            ticks: { length: 5 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              labelMap: [
                { value: 1000, label: "$1,000" },
                { value: 2000, label: "$2,000" },
                { value: 5000, label: "$5,000" },
                { value: 10000, label: "$10,000" },
                { value: 20000, label: "$20,000" },
                { value: 40000, label: "$40,000" },
                { value: 100000, label: "$100,000" }
              ]
            }
          },
          title: { text: "GDP (log scale)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 58 }
        }
      },
      grid: {
        horizontal: { values: [1000, 2000, 5000, 10000, 20000, 40000, 100000], color: "rgba(221,221,221,0.3)" },
        vertical: { values: [0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9], color: "rgba(221,221,221,0.3)" }
      },
      legend: {
        channels: ["color"],
        position: "top",
        direction: "horizontal",
        title: false,
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.8 } });
}