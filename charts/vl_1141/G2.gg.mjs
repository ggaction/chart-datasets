// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-2fcdfbdfb290e440, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 370,
      height: 416,
      margin: { left: 24, top: 54, right: 6, bottom: 22 }
    })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "expenditureNum",
      as: "expNum",
      expression: { op: "toNumber", operand: { field: "Expenditure" } }
    })
    .createComputedData({
      id: "posNum",
      as: "posNum",
      expression: { op: "toNumber", operand: { field: "League position" } }
    })
    .createScatterPlot({
      x: { field: "expNum" },
      y: { field: "posNum" },
      guides: false
    })
    .editXScale({ domain: [0, 300] })
    .editYScale({ domain: [0, 20] })
    .encodePointRadius({ value: 6.123724356957945 })
    .editPointMark({
      fill: "rgb(0,67,167)",
      opacity: 0.6
    })
    .createTitle({
      text: "Premier League clubs expenditure and league position",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -18.123046875
    })
    .editTitle({ offset: -12.123725891113281, gap: 1 })
    .editTitle({
      subtitle: "2022 Expenditure in millions (x) and and Current league position  (y)",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .createAxes({
      x: {
        title: false,
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200, 250, 300],
          labels: { fontSize: 10, offset: 7, flush: true }
        }
      },
      y: {
        title: false,
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
          labels: { fontSize: 10, offset: 7 }
        }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}
