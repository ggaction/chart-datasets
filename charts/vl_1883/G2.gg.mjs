import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
export function buildChart() {
  return chart()
    .createCanvas({
      width: 398,
      height: 248,
      margin: { left: 85, top: 5, right: 113, bottom: 43 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        lower: "Start difficulty",
        upper: "End difficulty",
        fieldType: "quantitative"
      },
      y: {
        field: "Test",
        fieldType: "ordinal",
      },
      guides: false
    })
    .editXScale({ domain: [0, 10] })
    .encodeColor({
      field: "Level",
      fieldType: "nominal"
    })
    .editColorScale({
      domain: ["Introductory", "Intermediate", "Olympiad"],
      range: ["#f58518", "#4c78a8", "#e45756"]
    })
    .editYScale({
      domain: ["AMC 8", "AMC 10", "AMC 12", "AHSME", "AIME", "USAJMO", "USAMO", "IMO"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .encodeBarWidth({ band: 1 })
    .createGrid({ horizontal: false, vertical: { scale: "x", color: "#ddd" } })
    .createGuides({
      grid: false,
      axes: {
        x: {
          ticksAndLabels: {
            values: [0, 2, 4, 6, 8, 10],
            labels: {
              fontSize: 13,
              fontFamily: "'Latin Modern Sans', sans-serif",
              offset: 4
            }
          },
          title: {
            text: "Difficulty",
            fontSize: 14,
            fontWeight: "bold",
            fontFamily: "'Latin Modern Sans', sans-serif",
            offset: 31
          }
        },
        y: {
          ticksAndLabels: {
            labels: {
              fontSize: 13,
              fontFamily: "'Latin Modern Sans', sans-serif",
              offset: 7
            }
          },
          title: {
            text: "Test",
            fontSize: 14,
            fontWeight: "bold",
            fontFamily: "'Latin Modern Sans', sans-serif",
            offset: 65
          }
        }
      },
      legend: {
        title: "Level",
        titleStyle: { fontSize: 14, fontFamily: "'Latin Modern Sans', sans-serif" },
        labels: { fontSize: 13, fontFamily: "'Latin Modern Sans', sans-serif" }
      }
    });
}