// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-7182bd642b5c2e5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 576, height: 310, margin: { left: 5, top: 5, right: 71, bottom: 5 } })
    .createData({ values: data })
    .createPiePlot({ category: "category", value: "value", guides: false })
    .editArcMark({ innerRadius: { unit: "px", value: 80 }, stroke: false })
    .encodeColor({
      field: "category"
    })
    .editColorScale({
      domain: [1, 2, 3, 4, 5, 6],
      range: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]
    })
    .createLegend({
      title: "Category",
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "rgb(0, 0, 0)" },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "rgb(0, 0, 0)" }
    })
    .editLegendSymbols({ symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] } });;
}
