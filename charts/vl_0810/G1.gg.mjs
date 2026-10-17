// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 1042, margin: { left: 39, top: 58, right: 7, bottom: 684 } })
    .createData({ values: data })
    .createComputedData({ id: "typedX", as: "xGN", expression: { op: "if", condition: { op: "eq", left: { field: "xG" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "xG" } } } })
    .createComputedData({ id: "typedY", as: "GoalsN", expression: { op: "toNumber", operand: { field: "Goals" } } })
    .createScatterPlot({ x: "xGN", y: "GoalsN", guides: false })
    .editXScale({ domain: [0, 24] })
    .editYScale({ domain: [-2, 24] })
    .encodeColor({ field: "Team", fieldType: "nominal" })
    .editColorScale({ domain: ["Arsenal", "Aston Villa", "Brentford", "Brighton", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Leeds United", "Leicester City", "Liverpool", "Manchester City", "Manchester Utd", "Newcastle Utd", "Norwich City", "Southampton", "Tottenham", "Watford", "West Ham", "Wolves"], range: ["#EF0107", "#034694", "#00B2A9", "#4fc3f7", "#FBE122", "orange", "purple", "pink", "black"] })
    .editPointMark({ target: "scatterPlot", opacity: 0.7, stroke: false })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .createRegressionData({ id: "regression", x: "xGN", y: "GoalsN" })
    .editRegressionData({ target: "regression", predict: { domain: [0, 24], steps: 2 } })
    .createLinePlot({ x: "xGN", y: "GoalsN", guides: false })
    .editLineMark({ target: "linePlot", stroke: "firebrick", strokeWidth: 2 })
    .createSummaryData({ id: "regStats", source: "typedY", aggregates: [{ op: "count", as: "N" }] })
    .createComputedData({ id: "sourceDisplay", as: "R2", expression: { constant: "R²: 0.87" } })
    .createTextMark({ data: "sourceDisplay", fill: "firebrick", fontSize: 11 })
    .encodeText({ target: "text", field: "R2" })
    .editTextMark({ target: "text", align: "right", baseline: "middle" })
    .encodeX({ target: "text", datum: 24 })
    .encodeY({ target: "text", datum: 24.433333333333334 })
    .createGrid({ vertical: { color: "#ddd", values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] }, horizontal: { color: "#ddd", values: [0, 5, 10, 15, 20] } })
    .createAxes({
      x: { line: { color: "#888" }, ticksAndLabels: { values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black", flush: true } }, title: { text: "xG", fontSize: 11, fontWeight: 700, color: "black" } },
      y: { line: { color: "#888" }, ticksAndLabels: { values: [0, 5, 10, 15, 20], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black" } }, title: { text: "Goals", fontSize: 11, fontWeight: 700, color: "black" } }
    })
    .editYAxisTitle({ rotation: { value: -90, unit: "degrees" } })
    .createGuides({ axes: false, grid: false, legend: { target: "scatterPlot", position: "bottom", align: "left", columns: 1, direction: "horizontal", title: "Team", titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }, labels: { fontSize: 10, color: "black" }, border: { background: "#FfFfFf" }, symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] } } })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } })
    .createTitle({ text: "Goals Scored vs xG", titleStyle: { fontSize: 13, fontWeight: 700, color: "rgb(0, 0, 0)" }, alongOffset: -33.123046875 })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({ subtitle: "Premier League Players Goals Scored vs Expected Goals\n2021/22 season. Source: Fbref", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "rgb(0, 0, 0)" } });
}