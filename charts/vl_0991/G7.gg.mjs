// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-f84a6354ad5070da
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 420, height: 362, margin: { left: 32, top: 40, right: 88, bottom: 22 } })
    .createData({ id: "rows", values: data })
    .createComputedData({ id: "v1x", as: "xnum", expression: { op: "toNumber", operand: { field: "Value 1" } } })
    .createComputedData({ id: "v2y", as: "ynum", expression: { op: "toNumber", operand: { field: "Value 2" } } })
    .createScatterPlot({ x: "xnum", y: "ynum", guides: false })
    .editXScale({ domain: [-1, 12] })
    .editYScale({ domain: [-2, 3.5] })
    .encodeColor({ field: "Type", palette: { name: "darkmulti", count: 2 } })
    .editColorScale({ domain: ["Carbon tax", "ETS"], range: ["rgb(25, 125, 140)", "rgb(149, 206, 63)"] })
    .encodePointRadius({ value: Math.sqrt(80) / 2 })
    .encodeOpacity({ value: 0.7, target: "scatterPlot" })
    .editPointMark({ stroke: "none" })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .createYAxis({
      ticksAndLabels: {
        values: [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black", format: ".1f" })
    .createLegend({ title: false })
    .editLegendLabels({ fontSize: 10 })
    .editLegendSymbols({ symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "auto", stroke: "none", strokeWidth: 1.5 }] } })
    .createTitle({
      text: "Principle Component Analysis: Carbon Pricing Systems",
      titleStyle: { fontSize: 13 },
      alongOffset: -26.7412109375
    })
    .editTitle({ subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, offset: -13, gap: 1 })
    .editTitle({ subtitle: "Value 1 (x), Value 2 (y). Source: WorldBank Carbon Pricing Dashboard ", titleStyle: { fontWeight: 700, color: "black" } });
}