// DOCS: doc-3b660fabf78cdd08, doc-0408a7975bd52e06, doc-82e309a0b6ac0052, doc-3558b809b504c100
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 416,
      height: 353,
      margin: { left: 43, top: 10, right: 73, bottom: 43 }
    })
    .createData({ values: data })
    .createHeatmap({
      x: {
        field: "SNP2",
        fieldType: "ordinal",
        scale: {
          type: "band",
          domain: [55, 56, 84, 90, 111, 428, 519, 624, 656, 741],
          paddingInner: 0,
          paddingOuter: 0
        }
      },
      y: {
        field: "SNP1",
        fieldType: "ordinal",
        scale: {
          type: "band",
          domain: [55, 56, 84, 90, 111, 428, 519, 624, 656, 741],
          paddingInner: 0,
          paddingOuter: 0
        }
      },
      guides: false
    })
    .encodeColor({
      field: "PcentRef",
      fieldType: "quantitative",
      scale: { domain: [0, 100], palette: "yelloworangered" }
    })
    .createGrid({
      horizontal: { color: "#ddd", bandPosition: "boundary", zIndex: 1 },
      vertical: { color: "#ddd", bandPosition: "boundary", zIndex: 1 }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [55, 56, 84, 90, 111, 428, 519, 624, 656, 741],
        ticks: { color: "#888", length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "Helvetica Neue",
          fontWeight: 300,
          color: "#000",
          offset: 7,
          rotation: -Math.PI / 2
        }
      },
      title: { text: "Variant site", fontSize: 10, fontWeight: 400, color: "#000", fontFamily: "Helvetica Neue", offset: 34 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [55, 56, 84, 90, 111, 428, 519, 624, 656, 741],
        ticks: { color: "#888", length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "Helvetica Neue",
          fontWeight: 300,
          color: "#000",
          offset: 7
        }
      },
      title: { text: "Variant site", fontSize: 10, fontWeight: 400, color: "#000", fontFamily: "Helvetica Neue", offset: 34 }
    })
    .createLegend({
      labels: { fontSize: 8, fontWeight: 300, color: "#000" },
      titleStyle: { fontSize: 10, fontWeight: 300, color: "#000" }
    });
}