// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-223193483293cd8c, doc-5488e292a83e78ba
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 428, margin: { left: 83, top: 35, right: 5, bottom: 133 } })
    .createData({ values: data })
    .filterData({ id: "salaries", field: "Type", oneOf: ["Estimated Total Salary"] })
    .createComputedData({ id: "salariesNum", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createTitle({
      text: "Football teams with highest total player salaries",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ subtitle: "Source: spotrac", gap: 3, offset: -9 })
    .createBarPlot({
      x: {
        field: "Team",
        fieldType: "nominal",
        scale: {
          domain: ["Manchester United F.C.", "Chelsea F.C.", "Manchester City F.C.", "Liverpool F.C.", "Tottenham Hotspur F.C.", "Arsenal F.C.", "Aston Villa F.C.", "Leicester City", "West Ham United F.C.", "Newcastle United F.C.", "Crystal Palace", "Everton F.C.", "Wolves F.C.", "Fulham F.C.", "Southampton F.C.", "AFC Bournemouth", "Nottingham Forest F.C.", "Brighton & Hove Albion", "Brentford F.C.", "Leeds United F.C."],
          paddingInner: 0.1,
          paddingOuter: 0.05
        }
      },
      y: { field: "ValueNum", fieldType: "quantitative", scale: { domain: [0, 240000000], zero: true, nice: false } },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#000f71" })
    .createGrid({
      horizontal: { color: "#ddd", values: [0, 50000000, 100000000, 150000000, 200000000] }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black", rotation: { value: -90, unit: "degrees" } }
        },
        title: { text: "Team", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 116 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 50000000, 100000000, 150000000, 200000000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black", format: "," }
        },
        title: { text: "Total Player salaries, estimated, £", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 75, rotation: { value: -90, unit: "degrees" } }
      }
    });
}