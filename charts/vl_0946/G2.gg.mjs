import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-7182bd642b5c2e5e
export function buildChart() {
  return chart()
    .createCanvas({
      width: 440,
      height: 227,
      margin: { left: 109, top: 22, right: 131, bottom: 5 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-metrics",
        measurements: [
          { text: "Reproducing http://robslink.com/SAS/democd91/pyramid_pie.htm", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, width: 406.671875 },
          { text: "Sky", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.671875 },
          { text: "Shady side of a pyramid", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 107.28125 },
          { text: "Sunny side of a pyramid", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 107.28125 }
        ]
      }
    })
    .createData({ id: "data", values: data })
    .createSortedData({
      id: "source",
      source: "data",
      sortBy: [{ field: "order", order: "ascending" }]
    })
    .createTitle({
      text: "Reproducing http://robslink.com/SAS/democd91/pyramid_pie.htm",
      offset: -13,
      alongOffset: -103.3359375,
      titleStyle: { fontSize: 13, fontWeight: "bold" }
    })
    .createPiePlot({
      category: "category",
      value: "value",
      guides: false
    })
    .encodeR({
      field: "value",
      scale: { range: [80, 80] }
    })
    .editArcMark({
      stroke: "none"
    })
    .encodeTheta({
      field: "value",
      fieldType: "quantitative",
      scale: { id: "thetaValue", type: "linear", domain: [0, 100], range: [134.99999998842203, 494.99999998842203] }
    })
    .encodeColor({ field: "category", fieldType: "nominal" })
    .editColorScale({
      domain: ["Sky", "Shady side of a pyramid", "Sunny side of a pyramid"],
      range: ["#416D9D", "#674028", "#DEAC58"]
    })
    .createLegend({ at: { x: 201, y: 79 }, labels: { fontSize: 10 }, title: false });
}