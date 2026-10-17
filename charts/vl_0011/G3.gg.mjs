// DOCS: doc-b11b4627b143730d, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 448,
      height: 347,
      margin: { left: 41, top: 10, right: 7, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "missingFlag",
      as: "missing",
      expression: { op: "if", condition: { op: "eq", left: { field: "SNWD" }, right: { constant: null } }, then: { constant: 1 }, else: { constant: 0 } }
    })
    .createWindowData({
      id: "segmented",
      operations: [{ op: "cumulativeSum", field: "missing", as: "segment" }]
    })
    .filterData({ id: "visibleSNWD", field: "SNWD", noneOf: [null] })
    .createLinePlot({
      x: { field: "datetime", fieldType: "temporal" },
      y: { field: "SNWD", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1388534400000, 1672531200000] })
    .editYScale({ domain: [0, 1.8] })
    .encodeGroup({ field: "segment", fieldType: "nominal" })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
.createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          1388534400000, 1420070400000, 1451606400000, 1483228800000,
          1514764800000, 1546300800000, 1577836800000, 1609459200000,
          1640995200000, 1672531200000
        ],
        ticks: {},
        labels: { format: "%Y", fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "datetime", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8],
        ticks: {},
        labels: { format: ".1f", fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "SNWD", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 32, rotation: { value: -90, unit: "degrees" } }
    });
}
