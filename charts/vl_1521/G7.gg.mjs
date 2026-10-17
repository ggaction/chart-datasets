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
        fieldType: "ordinal"
      },
      y: {
        field: "SNP1",
        fieldType: "ordinal"
      },
      guides: false
    })
    .editXScale({
      domain: [55, 56, 84, 90, 111, 428, 519, 624, 656, 741],
      paddingInner: 0,
      paddingOuter: 0
    })
    .editYScale({
      domain: [55, 56, 84, 90, 111, 428, 519, 624, 656, 741],
      paddingInner: 0,
      paddingOuter: 0
    })
    .encodeColor({
      field: "PcentRef",
      fieldType: "quantitative"
    })
    .editColorScale({
      domain: [0, 100],
      range: { palette: "yelloworangered" }
    })
    .createGrid({
      horizontal: { bandPosition: "boundary", zIndex: 1 },
      vertical: { bandPosition: "boundary", zIndex: 1 }
    })
    .editGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [55, 56, 84, 90, 111, 428, 519, 624, 656, 741],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: -Math.PI / 2
        }
      },
      title: { text: "Variant site", fontSize: 10, offset: 34 }
    })
    .editXAxisLine({ color: "#888" })
      .editXAxisTicks({
        color: "#888"
      })
      .editXAxisLabels({
        color: "#000",
        fontFamily: "Helvetica Neue",
        fontWeight: 300
      })
      .editXAxisTitle({ color: "#000", fontFamily: "Helvetica Neue", fontWeight: 400 })
    .createYAxis({
      ticksAndLabels: {
        values: [55, 56, 84, 90, 111, 428, 519, 624, 656, 741],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7
        }
      },
      title: { text: "Variant site", fontSize: 10, offset: 34 }
    })
    .editYAxisLine({ color: "#888" })
      .editYAxisTicks({
        color: "#888"
      })
      .editYAxisLabels({
        color: "#000",
        fontFamily: "Helvetica Neue",
        fontWeight: 300
      })
      .editYAxisTitle({ color: "#000", fontFamily: "Helvetica Neue", fontWeight: 400 })
    .createLegend({
      labels: { fontSize: 8, fontWeight: 300, color: "#000" },
      titleStyle: { fontSize: 10, fontWeight: 300, color: "#000" }
    });
}