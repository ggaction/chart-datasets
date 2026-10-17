// DOCS: doc-fc11e9fb291905d1 (createBarPlot), doc-dfae58344d5a524e (createCanvas)
// DOCS: doc-6c2c08869091f6a0 (createBarPlot card)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 349,
      height: 413,
      margin: { left: 44, top: 10, right: 5, bottom: 103 }
    })
    .createData({ id: "players", values: data })
    .createBarPlot({
      x: {
        field: "Player",
        fieldType: "nominal",
      },
      y: {
        field: "Weeks",
        fieldType: "quantitative",
      },
      guides: false
    })
    .encodeBarWidth({ pixels: 30 })
    .editXScale({
      domain: [
        "Dustin Johnson",
        "Greg Norman",
        "Ian Woosnam",
        "Jason Day",
        "Luke Donald",
        "Nick Faldo",
        "Rory McIlroy",
        "Seve Ballesteros",
        "Tiger Woods"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 700] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: -Math.PI / 2
        }
      },
      title: {
        text: "Player",
        fontSize: 11,
        offset: 96
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888", lineWidth: 1 },
      labels: {
        fontFamily: "sans-serif",
        color: "black"
      }
    })
    .editXAxisTitle({
      fontWeight: "bold",
      fontFamily: "sans-serif",
      color: "black"
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500, 600, 700],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7
        }
      },
      title: {
        text: "Weeks",
        fontSize: 11,
        offset: 33
      }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888", lineWidth: 1 },
        labels: {
          fontFamily: "sans-serif",
          color: "black"
        }
      },
      title: {
        fontWeight: "bold",
        fontFamily: "sans-serif",
        color: "black"
      }
    })
    .createGrid({
      vertical: false,
      horizontal: { scale: "y", color: "#ddd" }
    });
}