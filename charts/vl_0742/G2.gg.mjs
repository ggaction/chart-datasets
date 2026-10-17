// DOCS: doc-eb6e59db232dc6c0, doc-3558b809b504c100, doc-82e309a0b6ac0052
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Frozen source canvas: contract width/height and contract margin.
    .createCanvas({
      width: 165,
      height: 165,
      margin: { left: 20, top: 5, right: 5, bottom: 20 }
    })
    // Raw data in ./data.json is complete and immutable; no schema invented.
    .createData({ values: data })
    // G1 integrated declaration: heatmap facade with x,y,guides:false exactly.
    // Mark appearance (flat cells, no stroke) is the source default; the color
    // channel and axis titles are declared right after the facade so the final
    // design is complete in this single stage.
    .createHeatmap({
      x: {
        field: "High GDP per capita \u2192",
        fieldType: "nominal"
      },
      y: {
        field: "High Giving Index \u2192",
        fieldType: "nominal"
      },
      guides: false
    })
    .editXScale({
      domain: ["A", "B", "C"],
      paddingInner: 0,
      paddingOuter: 0
    })
    .editYScale({
      domain: ["A", "B", "C"],
      paddingInner: 0,
      paddingOuter: 0
    })
    // Ordinal color: source field "color" with the exact source domain and range.
    .encodeColor({
      field: "color",
      fieldType: "nominal",
      scale: {
        type: "ordinal",
        domain: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        range: [
          "#F7FCFD", "#E5F5F9", "#CCECE6", "#99D8C9", "#66C2A4",
          "#41AE76", "#238B45", "#006D2C", "#00441B"
        ]
      }
    })
    // Source axes: domain transparent, labels:false, ticks:false (grid:false,
    // no legend). Complete Cartesian axes with title-only guides; bold black
    // titles with tight offsets matching the fixed 20px margins.
    .createAxes({
      x: {
        line: { color: "transparent" },
        ticksAndLabels: false,
        title: {
          text: "High GDP per capita \u2192",
          fontWeight: "bold",
          color: "black",
          fontSize: 11,
          offset: 12
        }
      },
      y: {
        line: { color: "transparent" },
        ticksAndLabels: false,
        title: {
          text: "High Giving Index \u2192",
          fontWeight: "bold",
          color: "black",
          fontSize: 11,
          offset: 12
        }
      }
    });
}
