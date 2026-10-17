// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-b30469a9489ccd34, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 436,
      height: 327,
      margin: { left: 29, top: 5, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: {
        field: "Date",
        fieldType: "temporal",
        scale: { domain: [1548979200000, 1643673600000], nice: false }
      },
      y: {
        field: "Price",
        scale: { domain: [0, 280], nice: false }
      },
      guides: false
    })
    .editLineMark({ stroke: "#F4134D", strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#676A86" },
        ticksAndLabels: {
          values: [1554076800000, 1561939200000, 1569888000000, 1577836800000, 1585699200000, 1593561600000, 1601510400000, 1609459200000, 1617235200000, 1625097600000, 1633046400000, 1640995200000],
          ticks: { color: "#676A86" },
          labels: { color: "#676A86", fontSize: 10, offset: 7, flush: true, labelMap: [{ value: 1554076800000, label: "April" }, { value: 1561939200000, label: "July" }, { value: 1569888000000, label: "October" }, { value: 1577836800000, label: "2020" }, { value: 1585699200000, label: "April" }, { value: 1593561600000, label: "July" }, { value: 1601510400000, label: "October" }, { value: 1609459200000, label: "2021" }, { value: 1617235200000, label: "April" }, { value: 1625097600000, label: "July" }, { value: 1633046400000, label: "October" }, { value: 1640995200000, label: "2022" }] }
        },
        title: false
      },
      y: {
        line: { color: "#676A86" },
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200, 250],
          ticks: { color: "#676A86" },
          labels: { color: "#676A86", fontSize: 10, offset: 7 }
        },
        title: false
      }
    })
    .createGrid({
      horizontal: { color: "rgba(103, 106, 134, 0.2)" },
      vertical: false
    })
    .createAnnotation({
      text: "Gas price (pence per therm)",
      x: 1550281248000.0,
      y: 255.26666666666665
    })
    .editTextMark({ fontSize: 11, fontWeight: 700, fill: "#676A86" })
    .editTextMark({ align: "left", baseline: "alphabetic" });
}
