// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-7184b02978bdf5d1, doc-7f2c254224fc4908, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 331,
      height: 389,
      margin: { left: 26, top: 67, right: 5, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "d_xgd",
      as: "XGD",
      expression: { op: "toNumber", operand: { field: "Expected Goal Difference per Game" } }
    })
    .createComputedData({
      id: "d_pts",
      as: "Points",
      expression: { op: "toNumber", operand: { field: "Points per Game" } }
    })
    .createScatterPlot({
      x: { field: "XGD", fieldType: "quantitative", scale: { domain: [-1, 1.6], nice: false } },
      y: { field: "Points", fieldType: "quantitative", scale: { domain: [0.5, 2.6], nice: false, zero: false } },
      guides: false
    })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editPointMark({ fill: "#5b92e5", opacity: 0.7 })
    .createAxes({
      x: {
        title: false,
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, flush: true }
        }
      },
      y: {
        title: false,
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        }
      }
    })
    .createTitle({
      text: "Teams points and expected goal difference\nin the 2021-22 Premier League",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -20.9
    })
    .editTitle({
      subtitle: "Expected Goal Difference (x), Points (y).\nData from Fbref, all stats normalised per game.",
      offset: -13,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    });
}