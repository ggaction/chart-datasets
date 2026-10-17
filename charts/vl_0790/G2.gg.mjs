// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 355,
      height: 342,
      margin: { left: 98.5, top: 5, right: 6.5, bottom: 37 }
    })
    .createData({ id: "taxRates", values: data })
    .createBarPlot({
      x: {
        field: "Corporate Tax Rate",
        fieldType: "quantitative"
      },
      y: {
        field: "Country",
        fieldType: "ordinal",
        scale: {
          domain: [
            "Argentina", "Australia", "Brazil", "Canada", "China", "France",
            "Germany", "India", "Indonesia", "Italy", "Japan", "Mexico",
            "Netherlands", "Russia", "Saudi Arabia", "Singapore",
            "South Africa", "South Korea", "Spain", "Switzerland", "Turkey",
            "United Kingdom", "United States"
          ],
          paddingInner: 0.1,
          paddingOuter: 0.05
        }
      },
      guides: false
    })
    .editXScale({ target: "barPlot", domain: [0, 35] })
    .encodeBarWidth({ target: "barPlot", pixels: 11.739130434782608 })
    .editBarMark({
      target: "barPlot",
      fill: "#8268ca",
      opacity: 1
    })
    .createGuides({
      legend: false,
      grid: {
        horizontal: false,
        vertical: {
          scale: "x",
          values: [0, 5, 10, 15, 20, 25, 30, 35],
          color: "#ddd",
          lineWidth: 1
        }
      },
      axes: {
        x: {
          position: "bottom",
          line: {},
          ticksAndLabels: {
            values: [0, 5, 10, 15, 20, 25, 30, 35],
            ticks: { length: 5 },
            labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" }
          },
          title: {
            text: "Corporate Tax Rate",
            offset: 28,
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "sans-serif"
          }
        },
        y: {
          position: "left",
          line: {},
          ticksAndLabels: {
            ticks: { length: 5 },
            labels: { offset: 8, fontSize: 10, fontFamily: "sans-serif" }
          },
          title: {
            text: "G20 Corporate Tax Rate",
            offset: 91,
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "sans-serif"
          }
        }
      }
    });
}
