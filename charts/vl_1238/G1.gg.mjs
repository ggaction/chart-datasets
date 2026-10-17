import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-ef5a28c0c3f3c920, doc-fb3b01cca895bdad, doc-fb01dc309afec904

export function buildChart() {
  return chart()
    .createCanvas({ width: 304, height: 335, margin: { left: 29, top: 35, right: 5, bottom: 30 } })
    .createData({ values: data })
    .filterData({ id: "validYears", field: "Year", noneOf: ["", null] })
    .createComputedData({
      id: "totalNum",
      as: "Total_billion_num",
      expression: { op: "toNumber", operand: { field: "Total_billion" } }
    })
    .createComputedData({
      id: "yearTs",
      as: "Year_ts",
      expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" }
    })
    .createBarPlot({
      x: {
        field: "Year_ts",
        fieldType: "temporal",
        scale: { type: "time", domain: [418701046153, 1664057353846], nice: false, range: [29, 299] }
      },
      y: {
        field: "Total_billion_num",
        fieldType: "quantitative",
        scale: { domain: [0, 110], zero: true }
      },
      guides: false
    })
    .editBarMark({ fill: "rgb(0,47,167)" })
    .encodeBarWidth({ pixels: 5 })
    .createTitle({
      text: "IMF Lending Outstanding ",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .editTitle({
      alongOffset: -23.6845703125
    })
    .editTitle({
      subtitle: "Credit outstanding to all members, SDRs (billions), Source: IMF",
      gap: 3,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          ticks: { length: 0 },
          values: [
            473385600000, 631152000000, 788918400000, 946684800000,
            1104537600000, 1262304000000, 1420070400000, 1577836800000
          ],
          labels: {
            fontSize: 10,
            offset: 5,
            rotation: { value: 45, unit: "degrees" }
          }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100],
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      }
    });
}
