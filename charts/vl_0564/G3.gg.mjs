// DOCS: doc-cc4024999766e88b, doc-7182bd642b5c2e5e, doc-9a0f2eeed4bc9b31, doc-9bc8ef967ae283b9
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 472, height: 352, margin: { left: 5, top: 47, right: 167, bottom: 5 } })
    .createData({ id: "entry", values: data })
    .filterData({ id: "entryPie", field: "Type", noneOf: ["Non-immigrant"] })
    .createComputedData({
      id: "entryNum",
      as: "Number_num",
      expression: { op: "toNumber", operand: { field: "Number" } }
    })
    .createTitle({
      text: "Foreign entry to the US",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10 }
    })
    .editTitle({
      subtitle: "FY 2022. Source: DHS",
      align: "left",
      offset: -13
    })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "black" },
      subtitleStyle: { fontStyle: "italic", color: "black" }
    })
    .createPiePlot({ category: "Type", value: "Number_num", guides: false })
    .encodeColor({ field: "Type", fieldType: "nominal" })
    .editColorScale({ target: "piePlot", palette: "set3", domain: ["Lawful Permanent Residents", "Naturlisations", "Refugees"] })
    .editArcMark({ innerRadius: { unit: "px", value: 60 }, stroke: false })
    .editCoordinate({ target: "polar", polarFrame: { radius: { unit: "px", value: 120 } } })
    .editThetaScale({ target: "piePlot", type: "band", domain: ["Lawful Permanent Residents", "Naturlisations", "Refugees"] })
    .createLegend({
      title: false,
      labels: { fontSize: 10 },
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
    });
}