// DOCS: doc-cc4024999766e88b, doc-7182bd642b5c2e5e, doc-9a0f2eeed4bc9b31
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 330, height: 435, margin: { left: 40, top: 35, right: 40, bottom: 50 } })
    .createData({ id: "data", values: data })
    .createSortedData({ id: "sorted", source: "data", sortBy: [{ field: "order" }] })
    .createTitle({ text: "Pyramid", titleStyle: { fontSize: 13, fontWeight: "bold", color: "black" }, offset: -12 })
    .createPiePlot({ category: "category", value: "value", guides: false })
    .editCoordinate({ target: "polar", polarFrame: { radius: { unit: "px", value: 160 }, overflow: "allow" } })
    .encodeColor({ field: "category", fieldType: "nominal" })
    .editColorScale({
      domain: ["Sky", "Shady", "Sunny"],
      range: ["RGB(0, 0, 150)", "RGB(180, 180, 0)", "RGB(249, 240, 0)"]
    })
    .editThetaScale({ range: [134.9999999614, 494.9999999511] })
    .editArcMark({ stroke: false })
    .createLegend({ channels: ["color"], position: "bottom", title: "Segments" })
    .editTitle({ subtitle: "An example from the Vega Lite site", subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "black" } })
    .editTitle({ align: "left" });
}
