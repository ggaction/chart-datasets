// DOCS: doc-6c2c08869091f6a0 (createBarPlot)
// DOCS: doc-fc11e9fb291905d1 (createBarPlot basic usage)
import { chart, hconcat } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const child0 = chart()
    // DOCS: doc-6c2c08869091f6a0 — bar facade owns x/y and inferred guides
    .createCanvas({
      width: 186,
      height: 409,
      margin: { top: 28, right: 6, bottom: 81, left: 40 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "day", fieldType: "ordinal" },
      y: { field: "VIOLATIONS_r" },
      guides: false
    })
    .editXScale({
      domain: ["Friday", "Monday", "Saturday", "Sunday", "Thursday", "Tuesday", "Wednesday"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 70], nice: false })
    .createTitle({
      text: "red light violations",
      offset: -9.953125,
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: "bold", color: "#000" } })
    .createGrid({
      horizontal: { lineWidth: 1, values: [0, 10, 20, 30, 40, 50, 60, 70] },
      vertical: false
    })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        ticks: { lineWidth: 1, length: 5 },
        labels: { rotation: { value: -90, unit: "degrees" }, offset: 7, fontSize: 10, fontFamily: "sans-serif" }
      },
      title: {
        text: "day",
        offset: 70.20997314453125,
        fontSize: 11,
        fontFamily: "sans-serif"
      }
    })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70],
        ticks: { lineWidth: 1, length: 5 },
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" }
      },
      title: {
        text: "VIOLATIONS_r",
        offset: 26.544921875,
        fontSize: 11,
        fontFamily: "sans-serif"
      }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#000" } }, title: { color: "#000", fontWeight: "bold" } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#000" } }, title: { color: "#000", fontWeight: "bold" } })
    .editBarMark({ fill: "red", stroke: false })
    .encodeBarWidth({ pixels: 18 });

  const child1 = chart()
    .createCanvas({
      width: 186,
      height: 409,
      margin: { top: 28, right: 6, bottom: 81, left: 40 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "day", fieldType: "ordinal" },
      y: { field: "VIOLATION_s" },
      guides: false
    })
    .editXScale({
      domain: ["Friday", "Monday", "Saturday", "Sunday", "Thursday", "Tuesday", "Wednesday"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 350], nice: false })
    .createTitle({
      text: "Speed violation",
      offset: -9.953125,
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: "bold", color: "#000" } })
    .createGrid({
      horizontal: { lineWidth: 1, values: [0, 50, 100, 150, 200, 250, 300, 350] },
      vertical: false
    })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        ticks: { lineWidth: 1, length: 5 },
        labels: { rotation: { value: -90, unit: "degrees" }, offset: 7, fontSize: 10, fontFamily: "sans-serif" }
      },
      title: {
        text: "day",
        offset: 70.20997314453125,
        fontSize: 11,
        fontFamily: "sans-serif"
      }
    })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250, 300, 350],
        ticks: { lineWidth: 1, length: 5 },
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" }
      },
      title: {
        text: "VIOLATION_s",
        offset: 32.1064453125,
        fontSize: 11,
        fontFamily: "sans-serif"
      }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#000" } }, title: { color: "#000", fontWeight: "bold" } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#000" } }, title: { color: "#000", fontWeight: "bold" } })
    .editBarMark({ fill: "orange", stroke: false })
    .encodeBarWidth({ pixels: 18 });

  // DOCS: doc-6c2c08869091f6a0 — parent composition preserves each sibling program
  return hconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 15,
    align: "start"
  });
}