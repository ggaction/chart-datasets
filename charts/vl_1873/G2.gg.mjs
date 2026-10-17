// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-47b88b4604be8ddd, doc-76573a465e2b6a33, doc-aff0694302d3fc9f, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

const XV = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 772,
      height: 661,
      margin: { left: 39, top: 24, right: 133, bottom: 37 }
    })
    .editCanvas({ background: "#f9f9f9" })
    .createData({ values: data })
    .createComputedData({
      id: "gridXNum",
      as: "gridXNum",
      expression: { op: "toNumber", operand: { field: "gridX" } }
    })
    .createComputedData({
      id: "gridYNum",
      as: "gridYNum",
      expression: { op: "toNumber", operand: { field: "gridY" } }
    })
    .createScatterPlot({
      x: { field: "gridXNum", fieldType: "quantitative" },
      y: { field: "gridYNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 18], nice: false })
    .editYScale({ domain: [0, 18], nice: false, reverse: true })
    .encodeColor({ field: "council" })
    .editColorScale({
      domain: [
        "East Dunbartonshire",
        "East Renfrewshire",
        "Glasgow City",
        "Inverclyde",
        "North Lanarkshire",
        "Renfrewshire",
        "South Lanarkshire",
        "West Dunbartonshire"
      ],
      palette: "tableau20"
    })
    .editPointMark({ shape: "square", stroke: "white", strokeWidth: 2 })
    .encodePointRadius({ value: 18.8063 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: XV,
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: { text: "gridX", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 27 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: XV,
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: { text: "gridY", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
        }
      },
      grid: {
        horizontal: { color: "#ddd", values: XV },
        vertical: { color: "#ddd", values: XV }
      },
      legend: {
        position: "right",
        title: "council",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "white", strokeWidth: 1.5 }] }
      }
    });
}