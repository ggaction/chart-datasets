// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 504, height: 329, margin: { left: 39, top: 10, right: 5, bottom: 119 } })
    .createData({ values: data })
    .filterData({ id: "france", field: "Country", oneOf: ["France"] })
    .createComputedData({
      id: "goalsNum",
      as: "GoalsNum",
      expression: { op: "toNumber", operand: { field: "Goals" } }
    })
    .createBarPlot({
      x: { field: "Name", fieldType: "nominal" },
      y: { field: "GoalsNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeX({
      field: "Name",
      fieldType: "nominal",
      scale: {
        domain: ["Adil Rami", "André-Pierre Gignac", "Anthony Martial", "Antoine Griezmann", "Bacary Sagna", "Benoît Costil", "Blaise Matuidi", "Christophe Jallet", "Dimitri Payet", "Eliaquim Mangala", "Hugo Lloris", "Kingsley Coman", "Laurent Koscielny", "Lucas Digne", "Morgan Schneiderlin", "Moussa Sissoko", "N'Golo Kanté", "Olivier Giroud", "Patrice Evra", "Paul Pogba", "Samuel Umtiti", "Steve Mandanda", "Yohan Cabaye"],
        paddingInner: 0.1,
        paddingOuter: 0.05
      }
    })
    .encodeY({
      field: "GoalsNum",
      fieldType: "quantitative",
      scale: { domain: [0, 14] }
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8" })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 } })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: ["Adil Rami", "André-Pierre Gignac", "Anthony Martial", "Antoine Griezmann", "Bacary Sagna", "Benoît Costil", "Blaise Matuidi", "Christophe Jallet", "Dimitri Payet", "Eliaquim Mangala", "Hugo Lloris", "Kingsley Coman", "Laurent Koscielny", "Lucas Digne", "Morgan Schneiderlin", "Moussa Sissoko", "N'Golo Kanté", "Olivier Giroud", "Patrice Evra", "Paul Pogba", "Samuel Umtiti", "Steve Mandanda", "Yohan Cabaye"],
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
        },
        title: { text: "Name", fontSize: 11, fontWeight: "bold", offset: 112 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8, 10, 12, 14],
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Goals", fontSize: 11, fontWeight: "bold", offset: 24 }
      }
    });
}