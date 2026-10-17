// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-7182bd642b5c2e5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 416, height: 352, margin: { left: 5, top: 47, right: 111, bottom: 5 } })
    .createData({ values: data })
    .createComputedData({
      id: "pieData",
      as: "Number_num",
      expression: { op: "toNumber", operand: { field: "Number" } }
    })
    .createTitle({
      text: "Non-immigrants in the US - by country",
      titleStyle: {
        fontSize: 13
      }
    })
    .createPiePlot({ category: "Country", value: "Number_num", guides: false })
    .editArcMark({ innerRadius: { value: 60, unit: "px" }, stroke: false })
    .editCoordinate({ target: "polar", polarFrame: { radius: { unit: "px", value: 120 } } })
    .editThetaScale({ domain: ["Spain", "Italy", "Canada", "United Kingdom", "India", "France", "Germany", "Mexico", "Other", "Colombia", "Brazil"], range: [0, 360] })
    .editColorScale({
      domain: ["Spain", "Italy", "Canada", "United Kingdom", "India", "France", "Germany", "Mexico", "Other", "Colombia", "Brazil"],
      range: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5"]
    })
    .createLegend({ position: "right", title: false })
    .editLegendLabels({ fontSize: 10 })
    .editTitle({ subtitle: "Legal entry by country of citizenship. FY 2022. Source: DHS", subtitleStyle: { fontStyle: "italic", fontSize: 10 }, titleStyle: { fontWeight: 700 } });
}
