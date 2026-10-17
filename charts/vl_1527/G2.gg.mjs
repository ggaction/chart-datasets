// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-2bd5de4bd99e314a
// NOTE: createTitle requires offset -13 (source title top 3 minus library title block top 16) at creation; eager 13px/700 typography would overflow the tight 27px top margin if offset were deferred. Later editTitle only sets align center.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 799,
      height: 449,
      margin: { left: 39, top: 27, right: 10, bottom: 22 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "dt", fieldType: "temporal" },
      y: { field: "All creditcard amounts 1", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [788918400000, 1648771200000], nice: false })
    .editYScale({ domain: [0, 18], nice: false })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createGrid({
      horizontal: { values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18], color: "#ddd", lineWidth: 1 },
      vertical: { scale: "x", count: 14, color: "#ddd", lineWidth: 1 },
    })
    .createXAxis({
      title: false,
      ticksAndLabels: {
        values: [
          820454400000, 883612800000, 946684800000, 1009862400000,
          1073001600000, 1136073600000, 1199145600000, 1262304000000,
          1325376000000, 1388534400000, 1451606400000, 1514764800000,
          1577836800000, 1640995200000
        ],
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7, format: "%Y" }
      },
      line: { color: "#888" }
    })
    .createYAxis({
      title: {
        text: "Interest Rate [%]",
        fontSize: 11,
        fontWeight: 700,
        offset: 27
      },
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      line: { color: "#888" }
    })
    .createTitle({
      text: "Average Consumer Credit Card Rate",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -13
    })
    .editTitle({ align: "center" });
}