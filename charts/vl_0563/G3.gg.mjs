// DOCS: doc-cc4024999766e88b, doc-7182bd642b5c2e5e, doc-9a0f2eeed4bc9b31, doc-18627fd264d621fc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 472,
      height: 352,
      margin: { left: 5, top: 47, right: 167, bottom: 5 }
    })
    .createData({ id: "rows", values: data })
    .createSortedData({ id: "sorted", source: "rows", sortBy: [{ field: "Type" }] })
    .createComputedData({
      id: "pieData",
      as: "Number_num",
      expression: { op: "toNumber", operand: { field: "Number" } }
    })
    .createPiePlot({
      category: "Type",
      value: "Number_num",
      guides: false
    })
    .encodeColor({ field: "Type" })
    .editColorScale({ target: "piePlot", palette: "set3" })
    .editArcMark({ innerRadius: { value: 60, unit: "px" }, stroke: false })
    .editCoordinate({ target: "polar", polarFrame: { radius: { unit: "px", value: 120 } } })
    .createTitle({
      text: "Foreign entry to the US",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .editTitle({ subtitle: "FY 2022. Source: DHS", offset: -13, gap: 3 })
    .createLegend({
      title: false,
      position: "right",
      labels: { fontSize: 10 }
    });
}