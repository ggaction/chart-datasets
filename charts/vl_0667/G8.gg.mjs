import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 520,
      height: 443,
      margin: { left: 26, top: 76, right: 94, bottom: 67 }
    })
    // Docs: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-80198e379a34e5ab
    .createData({ values: data })
    .createComputedData({
      id: "odaMilNum",
      as: "ODA_mil_num",
      expression: { op: "toNumber", operand: { field: "ODA_mil" } }
    })
    .createComputedData({
      id: "gniPercNum",
      as: "GNI_perc_num",
      expression: { op: "toNumber", operand: { field: "GNI_perc" } }
    })
    .createComputedData({
      id: "gniBilNum",
      as: "GNI_bil_num",
      expression: { op: "toNumber", operand: { field: "GNI_bil" } }
    })
    .createScatterPlot({ x: "ODA_mil_num", y: "GNI_perc_num", guides: false })
    .encodeColor({ field: "UN", fieldType: "ordinal" })
    .editColorScale({ target: "scatterPlot", palette: "set1" })
    .encodeSize({ field: "GNI_bil_num", fieldType: "quantitative" })
    .editSizeScale({
      target: "scatterPlot",
      domain: [0, 21472.36],
      range: [(50 * Math.PI) / 4, (800 * Math.PI) / 4]
    })
    .encodeOpacity({ value: 0.7, target: "scatterPlot" })
    .editPointMark({ stroke: false })
    .editXScale({ domain: [0, 38000] })
    .editYScale({ domain: [0, 1.2] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: ",.0f" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black", format: ".1f" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "bottom",
        direction: "horizontal",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        channels: ["color"]
      }
    })
    .editLegend({
      title: "UN benchmark: ODA = 0.7% GNI ",
      symbol: { layers: [{ type: "point", size: 5 }] }
    })
    .createTitle({
      text: "2020: ODA, plotted against percentage Gross National Income (GNI) spent on ODA",
      titleStyle: { fontSize: 13 },
      alongOffset: -20.9013671875
    })
    .editTitle({
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      offset: -13,
      gap: 1
    })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "black" },
      subtitle:
        "ODA, millions (x), GNI (%)(y)\nSize of points based on Total GNI, billions\nsource: World Bank API, 2020\n"
    });
}