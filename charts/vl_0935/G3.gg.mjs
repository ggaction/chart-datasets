import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-aff0694302d3fc9f

export function buildChart() {
  return chart()
    .createCanvas({
      width: 444,
      height: 327,
      margin: { left: 39, top: 40, right: 105, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({ id: "rd1", as: "rd1", expression: { op: "toNumber", operand: { field: "Reduced Dimension 1" } } })
    .createComputedData({ id: "rd2", as: "rd2", expression: { op: "toNumber", operand: { field: "Reduced Dimension 2" } } })
    .createScatterPlot({
      guides: false,
      x: { field: "rd1", fieldType: "quantitative" },
      y: { field: "rd2", fieldType: "quantitative" }
    })
    .editXScale({ domain: [-4, 5] })
    .editYScale({ domain: [-2, 3] })
    .encodeColor({ field: "Continent", fieldType: "ordinal" })
    .editColorScale({ target: "scatterPlot", domain: ["Africa", "Asia", "Europe", "North America", "Oceania", "South America"], palette: "set1" })
    .encodePointRadius({ value: Math.sqrt(30)/2 })
    .editPointMark({ opacity: 0.7 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          ticks: {},
          labels: {
            fontSize: 10,
            offset: 7,
            flush: true,
            fontFamily: "sans-serif",
            labelMap: [
              { value: -4, label: "\u22124" },
              { value: -3, label: "\u22123" },
              { value: -2, label: "\u22122" },
              { value: -1, label: "\u22121" },
              { value: 0, label: "0" },
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" },
              { value: 4, label: "4" },
              { value: 5, label: "5" }
            ]
          }
        },
        title: { text: "Reduced Dimension 1", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", offset: 27 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          ticks: {},
          labels: {
            fontSize: 10,
            offset: 7,
            fontFamily: "sans-serif",
            labelMap: [
              { value: -2, label: "\u22122" },
              { value: -1, label: "\u22121" },
              { value: 0, label: "0" },
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" }
            ]
          }
        },
        title: { text: "Reduced Dimnesion 2", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", offset: 24 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({ title: false, labels: { fontSize: 10, fontFamily: "sans-serif" } })
    .editLegendSymbols({ target: "scatterPlot", symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] } })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } })
    .createTitle({
      text: "Dimensionality Reduction for Indicators of Development",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      offset: -13
    })
    .editTitle({ alongOffset: -33.12 })
    .editTitle({
      subtitle: "Grouping countries based on Development. Source: Gapminder",
      gap: 1,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    });
}