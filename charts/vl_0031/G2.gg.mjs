// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-cf8d34fbc7d6684b
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 258,
      margin: { left: 5, top: 41, right: 5, bottom: 17 }
    })
    .createData({ values: data })
    .filterData({ id: "selCountries", field: "country", oneOf: ["Iceland", "Norway"] })
    .filterData({ id: "selYears", field: "year", oneOf: ["1952", "2017"] })
    .createComputedData({
      id: "gdpNum",
      as: "gdpNum",
      expression: { op: "toNumber", operand: { field: "gdpPercap" } }
    })
    .createTitle({
      text: "Change in income per person, 1952 - 2017",
      align: "center",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "rgb(0, 0, 0)" }
    })
    .editTitle({ offset: -12.28 })
    .createLinePlot({
      x: { field: "year", fieldType: "ordinal" },
      y: { field: "gdpNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ type: "point", domain: ["1952", "2017"] })
    .editYScale({ type: "linear", domain: [0, 65000], nice: false })
    .encodeColor({ field: "country" })
    .editColorScale({ domain: ["Iceland", "Norway"], range: ["#4c78a8", "#f58518"] })
    .editLineMark({ strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "year", fieldType: "ordinal" },
      y: { field: "gdpNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ target: "scatterPlot", field: "country" })
    .editStrokeScale({ target: "scatterPlot", domain: ["Iceland", "Norway"], range: ["#4c78a8", "#f58518"] })
    .editPointMark({ fill: "white", strokeWidth: 2, opacity: 1 })
    .encodePointRadius({ value: 2.7386, target: "scatterPlot" })
    .createGuides({
      axes: {
        y: false,
        x: {
          line: false,
          ticksAndLabels: {
            values: ["1952", "2017"],
            ticks: { length: 0 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 0.5, color: "rgb(0, 0, 0)" }
          },
          title: false
        }
      },
      grid: false,
      legend: false
    });
}