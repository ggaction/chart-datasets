// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 794,
      height: 376,
      margin: { left: 44, top: 33, right: 100, bottom: 43 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "tactile_paving type",
        fieldType: "nominal",
        scale: { domain: ["?", "no", "yes"], paddingInner: 0.1, paddingOuter: 0.05 }
      },
      y: { field: "length(km)", scale: { domain: [0, 260], zero: true } },
      guides: false
    })
    .encodeColor({
      field: "feature count",
      fieldType: "quantitative",
      aggregate: "mean"
    })
    .editColorScale({
      domain: [11, 6682],
      palette: "blues",
      interpolate: "hcl"
    })
    .encodeBarWidth({ band: 1 })
    .createTitle({
      text: "Sidewalks Width Values",
      offset: -11,
      titleStyle: { fontSize: 24, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: ["?", "no", "yes"],
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              rotation: { value: -90, unit: "degrees" }
            }
          },
          title: { text: "tactile_paving type", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: [0, 50, 100, 150, 200, 250],
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: { text: "length(km)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 35 }
        }
      },
      grid: { horizontal: { color: "#ddd", lineWidth: 1 } },
      legend: {
        channels: ["color"],
        position: "right",
        title: "feature count",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        gradient: { length: 200 },
        labels: { fontSize: 10, fontFamily: "sans-serif" }
      }
    });
}