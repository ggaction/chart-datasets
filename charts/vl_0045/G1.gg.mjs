// DOCS: doc-cc4024999766e88b, doc-6947deb65f00e732, doc-7182bd642b5c2e5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 288, height: 200, margin: { left: 0, top: 0, right: 88, bottom: 0 } })
    .applyTheme({ theme: { base: "light", tokens: { fontFamily: "Roboto" } }, scope: "descendants" })
    .createData({ values: data })
    .createPiePlot({ category: "category", value: "value", guides: false })
    .editThetaScale({ range: [117.51364378133185, 477.50302646202806] })
    .encodeColor({ field: "category", fieldType: "nominal", scale: { type: "ordinal", domain: ["Pac-Man", "Not Pac-Man"], range: ["#f2af29", "#44475a"] } })
    .editArcMark({ opacity: 1, stroke: "none" })
    .createLegend({ channels: ["color"], labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 } })
    .editLegend({ labels: { color: "#44475a" }, titleStyle: { color: "#44475a" } });
}
