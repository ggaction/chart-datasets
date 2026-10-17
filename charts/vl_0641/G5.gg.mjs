// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 411, height: 352, margin: { left: 5, top: 47, right: 106, bottom: 5 } })
    .createData({ id: "source", values: data })
    .createComputedData({ id: "valueNum", as: "ValueN", expression: { op: "toNumber", operand: { field: "Value" } } })
    .filterData({ id: "pieData", field: "Line", oneOf: ["3", "6", "7", "9", "21"] })
.createSortedData({ id: "pieSorted", source: "pieData", sortBy: [{ field: "pieNumber", order: "ascending" }] })
    .createTitle({ text: "US GDP - income", titleStyle: { fontSize: 13 } })
    .editTitle({ offset: -13, gap: 3, titleStyle: { fontWeight: 700, fontFamily: "sans-serif", color: "black" } })
    .editTitle({ subtitle: "2022 Q3, GNI summary. Source: BEA", subtitleStyle: { fontStyle: "italic", fontSize: 10 } })
    .createPiePlot({ category: "shortName", value: "ValueN", guides: false })
    .encodeColor({ field: "shortName" })
    .editColorScale({
      type: "ordinal",
      domain: ["Wages", "Bonuses", "Profits", "Depreciation", "Production Tax"],
      range: ["rgb(128,0,0)", "rgb(200,70,70)", "rgb(214,214,206)", "rgb(0,47,167)", "rgb(160,160,240)"]
    })
    .editArcMark({ innerRadius: { unit: "px", value: 60 }, padAngle: 1.1459155902616465, stroke: false })
    .editCoordinate({ target: "polar", polarFrame: { radius: { unit: "px", value: 120 } } })
    .createLegend({ channels: ["color"], title: false, labels: { fontSize: 10 } })
    .editLegendLabels({ fontFamily: "sans-serif", color: "black" });
}