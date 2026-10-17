// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-bc26da5598d35bae, doc-847cb1497a53c317
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 339,
      height: 362,
      margin: { left: 38, top: 40, right: 6, bottom: 22 }
    })
    .editCanvas({ background: "#122b39" })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "withChange",
      as: "change",
      expression: { op: "divide", left: { op: "toNumber", operand: { op: "replaceLiteral", operand: { field: "Change" }, search: "%", replacement: "" } }, right: { constant: 100 } }
    })
    .filterData({ id: "inRange", field: "change", range: { min: -0.3, max: 0.3 } })
    .filterData({ id: "validVolume", field: "Volume", noneOf: ["#VALUE!"] })
    .createComputedData({
      id: "plot",
      as: "xVol",
      expression: { op: "toNumber", operand: { field: "Volume" } }
    })
    .createScatterPlot({
      x: { field: "xVol", fieldType: "quantitative", scale: { domain: [0, 80000], nice: false } },
      y: { field: "change", fieldType: "quantitative", scale: { domain: [-0.3, 0.3], nice: false } },
      guides: false
    })
    .editPointMark({ fill: "hotpink", opacity: 0.5 })
    .encodePointRadius({ value: 2.7386 })
    .createAxes({
      x: {
        line: { color: "dimgrey" },
        ticksAndLabels: {
          values: [0, 20000, 40000, 60000, 80000],
          ticks: { color: "pink", length: 5 },
          labels: { fontSize: 10, color: "#00a767", offset: 7, format: ",.0f", flush: true }
        },
        title: false
      },
      y: {
        line: { color: "dimgrey" },
        ticksAndLabels: {
          values: [-0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3],
          ticks: { color: "pink", length: 5 },
          labels: {
            fontSize: 10,
            color: "#00a767",
            offset: 7,
            labelMap: [
              { value: -0.3, label: "\u221230%" },
              { value: -0.2, label: "\u221220%" },
              { value: -0.1, label: "\u221210%" },
              { value: 0, label: "0%" },
              { value: 0.1, label: "10%" },
              { value: 0.2, label: "20%" },
              { value: 0.3, label: "30%" }
            ]
          }
        },
        title: false
      }
    })
    .createTitle({
      text: "Ether",
      titleStyle: { color: "#179fdb", fontSize: 13, fontWeight: 700 },
      subtitleStyle: { color: "#179fdb", fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -32.8544921875 })
    .editTitle({ subtitle: "Daily volume (x), vs Price change (y)" });
}