// DOCS: doc-b11b4627b143730d (createLinePlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const decades = [
    -631152000000, -315619200000, 0, 315532800000, 631152000000,
    946684800000, 1262304000000, 1577836800000
  ];
  const tenths = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
  return chart()
    .createCanvas({
      width: 283,
      height: 374,
      margin: { left: 26, top: 52, right: 7, bottom: 22 }
    })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "yearNum",
      as: "yearNum",
      expression: { op: "toNumber", operand: { field: "Year" } }
    })
    .filterData({
      id: "filtered",
      field: "yearNum",
      predicate: { op: "gt", value: 1940 }
    })
    .createComputedData({
      id: "plot",
      as: "dollarValue",
      expression: { op: "divide", left: { constant: 1 }, right: { op: "toNumber", operand: { field: "usdGBP" } } }
    })
    .createLinePlot({
      x: {
        field: "Year",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: { field: "dollarValue" },
      guides: false
    })
    .editXScale({ domain: [-915148800000, 1672531200000], nice: false })
    .editYScale({ domain: [0, 0.9] })
    .encodeStroke({ value: "rgb(128,0,0)" })
.encodeStrokeWidth({ value: 2 })
.encodeOpacity({ value: 1 })
    .createGrid({
      horizontal: { values: tenths },
      vertical: { values: decades }
    })
    .editHorizontalGrid({ color: '#ddd', lineWidth: 1 })
    .editVerticalGrid({ color: '#ddd', lineWidth: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: decades,
        ticks: {},
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 10,
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createTitle({
      text: "Dollar value: up and up",
      titleStyle: { fontSize: 13 },
      alongOffset: -21
    })
    .editTitle({
      subtitle: "British pounds bought with $1. Source: BoE, FRED",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" },
      titleStyle: { fontWeight: 700 }
    })
    .editTitle({ offset: -13, gap: 3 });
}
