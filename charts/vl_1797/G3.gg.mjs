import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-fb3b01cca895bdad doc-5a9a28857a8808b8 doc-981572c1fb9ac63f
export function buildChart() {
  return chart()
    .createCanvas({ width: 290, height: 254, margin: { left: 33, top: 22, right: 157, bottom: 32 } })
    .createData({ values: data })
    .createSortedData({
      id: "sorted",
      sortBy: [{ field: "Intercept", order: "ascending" }]
    })
    .createWindowData({
      id: "ranked",
      source: "sorted",
      operations: [{ op: "rowNumber", as: "qurro_x" }]
    })
    .createBarPlot({
      guides: false,
      x: { field: "qurro_x", fieldType: "ordinal" },
      y: { field: "Intercept", fieldType: "quantitative" }
    })
    .encodeColor({
      layout: "overlay",
      field: "qurro_classification"
    })
    .editColorScale({ domain: ["None", "Numerator", "Denominator", "Both"], range: ["#e0e0e0", "#f00", "#00f", "#949"] })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [1, 2, 3, 4, 5], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 9] })
    .createAxes({
        x: {
          line: { color: "#888" },
          ticksAndLabels: { ticks: { length: 0 }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } },
          title: { text: "Feature Rankings", fontSize: 11, fontWeight: 700, offset: 26 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [2, 4, 6, 8],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: { text: "Intercept", fontSize: 11, fontWeight: 700, offset: 21, rotation: { value: -90, unit: "degrees" } }
        }
    })
    .createGrid({
      horizontal: { color: "#f2f2f2", values: [2, 4, 6, 8] }
    })
    .createLegend({
        position: "right",
        title: "Log-Ratio Classification",
        labels: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .createTitle({
      text: "Features",
      offset: -9,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }
    });
}
