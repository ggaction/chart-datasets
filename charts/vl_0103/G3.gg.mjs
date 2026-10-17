import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-9e1fe774c8def920
export function buildChart() {
  return chart()
    .createCanvas({ width: 277, height: 214, margin: { left: 0, top: 0, right: 77, bottom: 14 } })
    .createData({ values: data })
    .createPiePlot({ category: "category", value: "value", guides: false })
  .editArcMark({ stroke: "none" })
    .editThetaScale({ target: "piePlot", range: [73.62507667431078, 433.614459355007] })
    .encodeColor({ field: "category", fieldType: "nominal" })
    .editColorScale({
      target: "piePlot",
      domain: ["Mountains", "Grass", "Road", "Sidewalk", "Beach", "Ocean", "Sky"],
      range: ["#1F7744", "#439145", "#4D4D4B", "#ABAAAE", "#E7C641", "#2A518A", "#6499F9"]
    })
    .applyTheme({ theme: { base: "light", tokens: { fontFamily: "Roboto" } } })
    .createLegend({ target: "piePlot", labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 } })
    .editLegendLabels({ target: "piePlot", color: "#44475a" })
    .editLegendTitle({ target: "piePlot", color: "#44475a" });
}
