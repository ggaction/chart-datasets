// DOCS: doc-fc11e9fb291905d1, doc-2de5cf8023be5a9e, doc-fa2683c1a5d46fd3
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 323, height: 385, margin: { top: 40, right: 24, bottom: 45, left: 39 } })
    .createData({ values: data })
    .createComputedData({ id: "d2", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createBarPlot({
      guides: false,
      x: { field: "Time", fieldType: "nominal", scale: { domain: ["1984", "1989", "1994", "1999", "2004", "2009", "2014", "2019"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "ValueNum", fieldType: "quantitative", scale: { domain: [0, 10], zero: true } }
    })
    .editBarMark({ fill: "#86d0bb" })
    .encodeBarWidth({ band: 1 })
    .createTitle({
      text: "Green Party representation \u2013 European Parliament ",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -33.123046875
    })
    .editTitle({ subtitle: "% of seats won by election. Source: European Parliament", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, offset: -13 })
    .createGuides({ grid: false,
      axes: {
        x: {
          line: {},
          ticksAndLabels: { ticks: { length: 0 }, labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, rotation: { value: 45, unit: "degrees" } } },
          title: { text: "Time", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 38 }
        },
        y: {
          line: {},
          ticksAndLabels: { labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 } },
          title: { text: "Value", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 28 }
        }
      }
    });
}
