// DOCS: doc-b11b4627b143730d, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 446,
      height: 347,
      margin: { left: 39, top: 10, right: 7, bottom: 37 }
    })
    .createData({ values: data })
.createWindowData({
  id: "studyCumulative",
  operations: [{ op: "cumulativeSum", field: "study_count", as: "sourceStudyCumulative" }]
})
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
      },
      y: {
        field: "sourceStudyCumulative"
      },
      guides: false
    })
    .editXScale({ type: "time", domain: [1557187200000, 1579910400000], nice: false })
    .editYScale({ domain: [0, 90] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1559347200000, 1564617600000, 1569888000000, 1575158400000, 1577836800000],
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 1559347200000, label: "June" },
            { value: 1564617600000, label: "August" },
            { value: 1569888000000, label: "October" },
            { value: 1575158400000, label: "December" },
            { value: 1577836800000, label: "2020" }
          ]
        }
      },
      title: { text: "Date", fontSize: 11, offset: 30 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "PK-DB Studies", fontSize: 11, offset: 32 }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } })
    .editXAxis({ ticksAndLabels: { labels: { fontFamily: "sans-serif" } }, title: { fontWeight: "bold" } })
    .editYAxis({ ticksAndLabels: { labels: { fontFamily: "sans-serif" } }, title: { fontWeight: "bold" } });
}
