// DOCS: doc-9a0f2eeed4bc9b31
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 400,
      height: 381,
      margin: { left: 5, top: 47, right: 105, bottom: 34 }
    })
    .createData({ id: "data", values: data })
    .createComputedData({
      id: "dataNum",
      as: "issueAmountNum",
      expression: { op: "toNumber", operand: { field: "issueAmount" } }
    })
    .createSortedData({ id: "giltOrdered", sortBy: [{ field: "giltType", order: "ascending" }] })
    .createPiePlot({ category: "id", value: "issueAmountNum", guides: false })
    .encodeColor({ field: "giltType", fieldType: "nominal" })
    .editColorScale({ target: "piePlot", domain: ["Treasury Gilt", "Index Linked", "Treasury Stock", "Green Gilt"], range: ["red", "purple", "orange", "green"] })
    .editCoordinate({ target: "polar", polarFrame: { radius: { unit: "px", value: 145 } } })
    .editArcMark({ innerRadius: { unit: "px", value: 100 }, stroke: false })
    .createLegend({ title: false, labels: { fontSize: 10, color: "black" }, symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] } })
    .createTitle({ text: "UK debt - by type", titleStyle: { fontSize: 13, fontWeight: "bold", color: "black" }, offset: -13 })
    .editTitle({ subtitle: "Source: DMO", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, gap: 3 })
    .editLegendLayout({ position: "bottom", direction: "horizontal", layout: "legacy-bottom" })
    .editCanvas({ width: 350, height: 400, margin: { right: 55, left: 5, top: 47, bottom: 53 } });
}