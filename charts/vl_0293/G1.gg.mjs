import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71, doc-8a4f6f06e0d37d5e, doc-9bb354f4e2d46693

export function buildChart() {
  return chart()
    .createCanvas({
      width: 351,
      height: 367,
      margin: { top: 40, right: 7, bottom: 37, left: 44 }
    })
    .createData({ id: "cpi", values: data })
    .createComputedData({
      id: "cpiNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        scale: { domain: [599616000000, 1667260800000], nice: false }
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative",
        scale: { domain: [-20, 60] }
      },
      guides: false
    })
    .editLineMark({ stroke: "#002199", strokeWidth: 2 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
        },
        title: { text: "Date", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "Inflation", fontSize: 11, fontWeight: 700, offset: 28 }
      }
    })
    .createTitle({
      text: "CPI 12mth: Energy (G) 2015=100",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      alongOffset: -39
    })
    .editTitle({
      subtitle: "(£million, Source: ONS)",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" },
      offset: -13
    });
}