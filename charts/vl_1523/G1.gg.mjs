// DOCS: doc-3558b809b504c100 (createHeatmap), doc-60b61133ba03bf60 (heatmap guides/legend), doc-82e309a0b6ac0052 (heatmap recipe)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 433,
      height: 353,
      margin: { top: 10, right: 90, bottom: 43, left: 43 }
    })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "SNP2", fieldType: "ordinal" },
      y: { field: "SNP1", fieldType: "ordinal" },
      guides: false
    })
    .encodeColor({
      field: "PcentAlt",
      fieldType: "quantitative",
      scale: { domain: [0, 100], palette: "yelloworangered" }
    })
    .editXScale({ domain: [17, 161, 427, 497, 507, 772, 822, 870], paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain: [17, 161, 427, 497, 507, 772, 822, 870], paddingInner: 0, paddingOuter: 0 })
    .createGrid({
      horizontal: { bandPosition: "boundary", zIndex: 1, color: "#ddd" },
      vertical: { bandPosition: "boundary", zIndex: 1, color: "#ddd" }
    })
    .createGuides({
      grid: false,
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { length: 5, color: "#888" },
            labels: {
              fontSize: 10,
              fontFamily: "Helvetica Neue",
              fontWeight: 300,
              offset: 7,
              rotation: { value: 270, unit: "degrees" }
            }
          },
          title: { text: "Variant site", fontSize: 10, fontWeight: 400, fontFamily: "Helvetica Neue", offset: 35 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "Helvetica Neue", fontWeight: 300, offset: 7 }
          },
          title: { text: "Variant site", fontSize: 10, fontWeight: 400, fontFamily: "Helvetica Neue", offset: 35 }
        }
      },
      legend: {
        title: "PcentAlt",
        position: "right",
        gradient: { length: 200 },
        titleStyle: { fontSize: 10, fontWeight: 300, fontFamily: "sans-serif" },
        labels: { fontSize: 8, fontWeight: 300, fontFamily: "sans-serif" }
      }
    })
    .editRectMark({ stroke: false });
}
