import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-82e309a0b6ac0052, doc-3558b809b504c100, doc-0408a7975bd52e06

const CATEGORIES = [17, 161, 427, 497, 507, 772, 822, 870];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 427,
      height: 353,
      margin: { left: 43, top: 10, right: 84, bottom: 43 }
    })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "SNP2", fieldType: "ordinal" },
      y: { field: "SNP1", fieldType: "ordinal" },
      guides: false
    })
    .encodeColor({ field: "PcentRef", fieldType: "quantitative" })
    .editColorScale({ domain: [0, 100], palette: "yelloworangered" })
    .editXScale({ domain: CATEGORIES, paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain: CATEGORIES, paddingInner: 0, paddingOuter: 0 })
    .createXAxis({
        line: {},
        ticksAndLabels: { labels: { fontSize: 10, rotation: -Math.PI / 2 } },
        title: { text: "Variant site", fontSize: 10, offset: 2 }
      })
    .editXAxis({
      ticksAndLabels: {
        labels: { fontFamily: "Helvetica Neue", fontWeight: 300 }
      },
      title: { fontFamily: "Helvetica Neue", fontWeight: 400 }
    })
    .createYAxis({
        line: {},
        ticksAndLabels: { labels: { fontSize: 10 } },
        title: { text: "Variant site", fontSize: 10 }
    })
    .editYAxis({
      ticksAndLabels: {
        labels: { fontFamily: "Helvetica Neue", fontWeight: 300 }
      },
      title: { fontFamily: "Helvetica Neue", fontWeight: 400 }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createLegend({
      title: "PcentRef",
      labels: { fontSize: 8 },
      titleStyle: { fontSize: 10 }
    })
    .editLegend({ gradient: { length: 200 } })
    .editLegendLabels({ fontWeight: 300 })
    .editLegendTitle({ fontWeight: 300 })
  .editXAxis({ ticksAndLabels: { labels: { offset: 7.5 } }, title: { offset: 33.60186767578125 } })
  .editYAxis({ ticksAndLabels: { labels: { offset: 6.5 } }, title: { offset: 31.75811767578125 } });
}
