import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 278, margin: { left: 18, top: 27, right: 7, bottom: 51 } })
    .createData({ values: data })
    .filterData({ id: "filtered", field: "country", oneOf: ["Iran", "United States"] })
    .createComputedData({ id: "dated", as: "year_ts", expression: { op: "parseTime", operand: { field: "year" } } })
    .createComputedData({ id: "numbered", as: "fertility", expression: { op: "toNumber", operand: { field: "fertilityRate" } } })
    .createLinePlot({
      x: { field: "year_ts", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "fertility", fieldType: "quantitative" },
      guides: false
    })
    .encodeGroup({ field: "country" })
    .encodeColor({ field: "country" })
    .editLineMark({ strokeWidth: 2 })
    .editXScale({ domain: [-5364662400000, 1514764800000], nice: false })
    .editYScale({ domain: [0, 8] })
    .editColorScale({ target: "linePlot", range: ["#4c78a8", "#f58518"] })
    .createGrid({ horizontal: { scale: "y" } })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          -5364662400000, -5206896000000, -5049129600000, -4891363200000,
          -4733596800000, -4575744000000, -4417977600000, -4260211200000,
          -4102444800000, -3944592000000, -3786825600000, -3629059200000,
          -3471292800000, -3313440000000, -3155673600000, -2997907200000,
          -2840140800000, -2682288000000, -2524521600000, -2366755200000,
          -2208988800000, -2051222400000, -1893456000000, -1735689600000,
          -1577923200000, -1420070400000, -1262304000000, -1104537600000,
          -946771200000, -788918400000, -631152000000, -473385600000,
          -315619200000, -157766400000, 0, 157766400000,
          315532800000, 473385600000, 631152000000, 788918400000,
          946684800000, 1104537600000, 1262304000000, 1420070400000
        ],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: "%Y" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        position: "bottom",
        direction: "horizontal",
        title: false,
        symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] },
        labels: { fontSize: 10 }
      }
    })
    .createTitle({
      text: "Average babies per woman, 1800-2018",
      titleStyle: { fontSize: 13 },
      offset: -12
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700, color: "black" } });
}