import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-3aa1112632d25a50 (npm/knowledge/action-cards.json, /cards/268, "createRugPlot")
export function buildChart() {
  return chart()
    // 2618 original CSV rows preserved verbatim from ./data.json; never sampled or replaced.
    .createCanvas({
      plot: { width: 200, height: 125 },
      margin: { left: 69, top: 22, right: 60, bottom: 43 },
      plotBorder: { underlay: true }
    })
    .createData({ values: data })
    .filterData({ id: "year2017", field: "year", oneOf: ["2017"] })
    .filterData({ id: "finiteLife", field: "lifeExp", noneOf: ["NA"] })
    .createComputedData({
      id: "numericLife",
      as: "lifeExpNumber",
      expression: { op: "toNumber", operand: { field: "lifeExp" } }
    })
    .createRugPlot({
      x: { field: "lifeExpNumber" },
      edge: "bottom",
      guides: false
    })
    .editXScale({ domain: [35, 85] })
    .editTickMark({ length: 23.4375, strokeWidth: 1, opacity: 0.7 })
    .encodeY({
      field: "region",
      fieldType: "nominal",
      scale: {
        id: "regions",
        type: "band",
        domain: ["Africa", "Americas", "Asia", "Europe"],
        paddingInner: 0.25,
        paddingOuter: 0.125
      }
    })
    .encodeColor({
      field: "lifeExpNumber",
      fieldType: "quantitative",
      scale: { domain: [35, 85], palette: "viridis" }
    })
    .createGuides({
      axes: {
        x: {
          underlay: true,
          ticksAndLabels: {
            values: [40, 50, 60, 70, 80],
            ticks: { length: 5, alongOffset: 0.5 },
            labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5 }
          },
          title: {
            text: "Age (years)",
            fontSize: 11,
            fontWeight: 700,
            color: "black",
            offset: 33.578125,
            alongOffset: 0.5
          }
        },
        y: {
          underlay: true,
          ticksAndLabels: {
            values: ["Africa", "Americas", "Asia", "Europe"],
            ticks: { length: 5, alongOffset: 0.5 },
            labels: { fontSize: 10, offset: 6.5, alongOffset: 0.390625 }
          },
          title: {
            text: "region",
            fontSize: 11,
            fontWeight: 700,
            color: "black",
            offset: 57.0966796875,
            alongOffset: 0.5,
            rotation: -1.5707963267948966
          }
        }
      },
      legend: {
        title: "lifeExp",
        values: [40, 60, 80],
        offset: 18,
        labels: { fontSize: 10, color: "black", offset: 2 },
        gradient: { length: 125, thickness: 16, opacity: 0.7 },
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        titlePadding: 5
      },
      grid: false
    })
    .editXAxis({
      ticksAndLabels: { labels: { color: "black" } }
    })
    .editXAxisLine({ color: "none" })
    .editXAxisTicks({ color: "#888" })
    .editYAxis({
      ticksAndLabels: { labels: { color: "black" } }
    })
    .editYAxisLine({ color: "none" })
    .editYAxisTicks({ color: "#888" })
    .createTitle({
      text: "Life expectancy by continent, 2017",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -12.046875
    })
    .editTitle({ align: "center" });
}