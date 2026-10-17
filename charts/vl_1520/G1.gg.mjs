// DOCS: doc-3558b809b504c100, doc-0408a7975bd52e06, doc-3b660fabf78cdd08
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 443,
      height: 353,
      margin: { left: 43, top: 10, right: 100, bottom: 43 }
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
      scale: {
        type: "sequential",
        domain: [0, 100],
        palette: "yelloworangered"
      }
    })
    .editXScale({ domain: [55, 56, 84, 90, 111, 428, 519, 624, 656, 741], paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain: [55, 56, 84, 90, 111, 428, 519, 624, 656, 741], paddingInner: 0, paddingOuter: 0 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { color: "#888", length: 5 },
            labels: {
              fontFamily: "Helvetica Neue",
              fontSize: 10,
              fontWeight: 300,
              offset: 7,
              color: "#000",
              rotation: -Math.PI / 2
            }
          },
          title: { text: "Variant site", fontSize: 10, fontWeight: 400, fontFamily: "Helvetica Neue", offset: 32, color: "#000" }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { color: "#888", length: 5 },
            labels: { fontFamily: "Helvetica Neue", fontSize: 10, fontWeight: 300, offset: 7, color: "#000" }
          },
          title: { text: "Variant site", fontSize: 10, fontWeight: 400, fontFamily: "Helvetica Neue", offset: 32, color: "#000" }
        }
      },
      grid: {
        horizontal: { bandPosition: "boundary", zIndex: 1, color: "#ddd" },
        vertical: { bandPosition: "boundary", zIndex: 1, color: "#ddd" }
      },
      legend: {
        title: "PcentAlt",
        gradient: { length: 200 },
        labels: { fontFamily: "sans-serif", fontSize: 8, fontWeight: 300, color: "#000" },
        titleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 300, color: "#000" }
      }
    });
}