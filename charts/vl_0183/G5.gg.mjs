// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 249, margin: { left: 24, top: 27, right: 7, bottom: 22 } })
    .createData({ values: data })
    .filterData({ id: "validLife", field: "lifeExp", noneOf: ["NA"] })
    .createComputedData({ id: "numeric", as: "proofValue", expression: { op: "toNumber", operand: { field: "lifeExp" } } })
    .createSummaryData({ id: "means", groupBy: ["year"], aggregates: [{ op: "mean", field: "proofValue", as: "average" }] })
    .createComputedData({ id: "date", as: "timestamp", expression: { op: "parseTime", operand: { field: "year" } } })
    .createLinePlot({
      x: { field: "timestamp", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "average" },
      guides: false
    })
    .encodeStroke({ value: "#fc6721" })
    .editLineMark({ strokeWidth: 2 })
    .editXScale({ domain: [-5364662400000, 1514764800000], nice: false })
    .editYScale({ domain: [0, 80] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-5364662400000, -5206896000000, -5049129600000, -4891363200000, -4733596800000, -4575744000000, -4417977600000, -4260211200000, -4102444800000, -3944592000000, -3786825600000, -3629059200000, -3471292800000, -3313440000000, -3155673600000, -2997907200000, -2840140800000, -2682288000000, -2524521600000, -2366755200000, -2208988800000, -2051222400000, -1893456000000, -1735689600000, -1577923200000, -1420070400000, -1262304000000, -1104537600000, -946771200000, -788918400000, -631152000000, -473385600000, -315619200000, -157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black" } })
    .editYAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black" } })
    .createHorizontalGrid({ values: [0, 20, 40, 60, 80] })
    .editHorizontalGrid({ color: "#ddd" })
    .createTitle({ text: "Global average life expectancy, 1800-2018", titleStyle: { fontSize: 13 }, offset: -12 })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700, color: "black" } });
}