import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-e790db38fc2a278a

export function buildChart() {
  return chart()
    .createCanvas({ width: 410, height: 262, margin: { left: 105, top: 25, right: 105, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "rows2017", field: "year", oneOf: ["2017"] })
    .filterData({ id: "africaRows", field: "region", oneOf: ["Africa"] })
    .createComputedData({ id: "numLife", as: "lifeExpN", expression: { op: "toNumber", operand: { field: "lifeExp" } } })
    .createComputedData({ id: "numGdp", as: "gdpN", expression: { op: "toNumber", operand: { field: "gdpPercap" } } })
    .createScatterPlot({
      x: { field: "gdpN", fieldType: "quantitative" },
      y: { field: "lifeExpN", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ type: "log", domain: [100, 100000] })
    .editYScale({ domain: [50, 78], zero: false, nice: false })
    .encodePointRadius({ value: 2.7386127875625 })
    .encodeOpacity({ value: 0.7 })
    .encodeStroke({ value: "#4c78a8" })
    .editPointMark({ fill: "none", strokeWidth: 2 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-axis-labels", measurements: [{ text: "$100", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, width: 20 }, { text: "$300", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, width: 20 }, { text: "$1,000", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, width: 27.5 }, { text: "$3,000", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, width: 27.5 }, { text: "$10,000", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, width: 32.5 }, { text: "$100,000", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, width: 37.5 }, { text: "Relationship between life expectancy and income in Africa, 2017", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, width: 397.609375 }, { text: "50", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, width: 10 }, { text: "55", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, width: 10 }, { text: "60", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, width: 10 }, { text: "65", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, width: 10 }, { text: "70", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, width: 10 }, { text: "75", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, width: 10 }] } })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000],
          ticks: {},
          labels: {
            fontSize: 10, fontFamily: "Roboto", fontWeight: 400, offset: 7, flush: true,
            labelMap: [
              { value: 100, label: "$100" }, { value: 200, label: "" }, { value: 300, label: "$300" },
              { value: 400, label: "" }, { value: 500, label: "" }, { value: 600, label: "" },
              { value: 700, label: "" }, { value: 800, label: "" }, { value: 900, label: "" },
              { value: 1000, label: "$1,000" }, { value: 2000, label: "" }, { value: 3000, label: "$3,000" },
              { value: 4000, label: "" }, { value: 5000, label: "" }, { value: 6000, label: "" },
              { value: 7000, label: "" }, { value: 8000, label: "" }, { value: 9000, label: "" },
              { value: 10000, label: "$10,000" }, { value: 20000, label: "" }, { value: 30000, label: "" },
              { value: 40000, label: "" }, { value: 50000, label: "" }, { value: 60000, label: "" },
              { value: 70000, label: "" }, { value: 80000, label: "" }, { value: 90000, label: "" },
              { value: 100000, label: "$100,000" }
            ]
          }
        },
        title: { text: "Income per person", fontSize: 11, fontWeight: 700, offset: 27 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [50, 55, 60, 65, 70, 75],
          ticks: {},
          labels: { fontSize: 10, fontFamily: "Roboto", fontWeight: 400, offset: 7 }
        },
        title: { text: "Life expectancy", fontSize: 11, fontWeight: 700, offset: 26, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createTitle({ text: "Relationship between life expectancy and income in Africa, 2017", align: "center", titleStyle: { fontSize: 13, fontWeight: 700 }, offset: -6 });
}
