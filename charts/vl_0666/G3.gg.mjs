// DOCS: doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-7f2c254224fc4908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 520, height: 443, margin: { left: 26, top: 76, right: 94, bottom: 67 } })
    .createData({ id: "oda", values: data })
    .createComputedData({ id: "odaMilNum", as: "odaMil", expression: { op: "toNumber", operand: { field: "ODA_mil" } } })
    .createComputedData({ id: "gniPercNum", as: "gniPerc", expression: { op: "toNumber", operand: { field: "GNI_perc" } } })
    .createComputedData({ id: "gniBilNum", as: "gniBil", expression: { op: "toNumber", operand: { field: "GNI_bil" } } })
    .createScatterPlot({
      x: { field: "odaMil" },
      y: { field: "gniPerc" },
      guides: false
    })
    .editXScale({ domain: [0, 12000] })
    .editYScale({ domain: [0, 3] })
    .encodeColor({ field: "UN" })
    .encodeSize({ field: "gniBil" })
    .editColorScale({ palette: "set1", domain: ["0", "1"] })
    .editSizeScale({ target: "scatterPlot", domain: [0, 23617.113], range: [39.269908169872416, 628.3185307179587] })
    .editPointMark({ opacity: 0.7 })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: [0, 2000, 4000, 6000, 8000, 10000, 12000],
            ticks: {},
            labels: { fontSize: 10, offset: 7, format: "," }
          },
          title: false
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: [0, 0.5, 1, 1.5, 2, 2.5, 3],
            ticks: {},
            labels: { fontSize: 10, offset: 7, format: ".1f" }
          },
          title: false
        }
      },
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["color"],
        position: "bottom",
        direction: "horizontal",
        title: "UN benchmark: ODA = 0.7% GNI",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } })
    .createTitle({
      text: "2021: ODA, plotted against percentage Gross National Income (GNI) spent on ODA",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -13 })
    .editTitle({
      subtitle: "ODA, millions (x), GNI (%)(y)\nSize of points based on Total GNI, billions\nsource: World Bank API, 2021 and OECD for ODA data",
      gap: 3,
      alongOffset: -21
    });
}