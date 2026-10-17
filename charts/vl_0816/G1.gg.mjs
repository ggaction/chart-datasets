// DOCS: doc-f84a6354ad5070da, doc-0085e034df0302e4, doc-8270cd43de503558
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 351, height: 1058, margin: { left: 44, top: 74, right: 107, bottom: 684 } })
    .createData({ values: data })
    .createComputedData({ id: "typedX", as: "fitX", expression: { op: "toNumber", operand: { field: "weeklywage_000s" } } })
    .createComputedData({ id: "typedY", as: "fitY", expression: { op: "toNumber", operand: { field: "Market_Value_GBPMILLIONS" } } })
    .createScatterPlot({ x: "fitX", y: "fitY", guides: false })
    
    .encodeColor({ field: "club", fieldType: "nominal", scale: { domain: ["Arsenal FC", "Aston Villa", "Bournemouth", "Brentford FC", "Brighton & Hove Albion", "Chelsea FC", "Crystal Palace", "Everton FC", "Fulham FC", "Leeds United", "Leicester City", "Liverpool FC", "Manchester City", "Manchester United", "Newcastle United", "Nottingham Forest", "Southampton FC", "Tottenham Hotspur", "West Ham United", "Wolverhampton Wanderers"], range: ["rgb(69, 52, 147)", "rgb(74, 83, 215)", "rgb(64, 116, 245)", "rgb(50, 149, 247)", "rgb(40, 179, 233)", "rgb(37, 205, 207)", "rgb(45, 227, 178)", "rgb(63, 243, 147)", "rgb(90, 252, 119)", "rgb(124, 253, 94)", "rgb(161, 248, 75)", "rgb(197, 236, 60)", "rgb(228, 217, 49)", "rgb(250, 192, 41)", "rgb(255, 162, 35)", "rgb(255, 130, 29)", "rgb(247, 97, 24)", "rgb(223, 65, 17)", "rgb(192, 38, 10)", "rgb(163, 19, 2)"] } })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: false, opacity: 1 })
    .createGuides({ axes: false, grid: false, legend: { position: "bottom", columns: 1, direction: "horizontal", title: "Club", border: { background: "#FFFFFF" }, target: "scatterPlot", channels: ["color"], labels: { fontSize: 10, color: "black" }, titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }, symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] } } })
    .createRegressionData({ id: "lineFit", x: "fitX", y: "fitY" })
    .editRegressionData({ target: "lineFit", predict: { domain: [0, 550], steps: 2 } })
    .createLinePlot({ x: "fitX", y: "fitY", guides: false })
    .editLineMark({ stroke: "firebrick", strokeWidth: 2 })
    .createRegressionData({ id: "annotationFit", source: "typedY", x: "fitX", y: "fitY" })
    .editRegressionData({ target: "annotationFit", predict: { domain: [0.58, 95], steps: 2 } })
    .createComputedData({ id: "annotationDisplay", as: "sourceDisplay", expression: { constant: "R²: NaN" } })
    .createTextMark({ fontSize: 11, fill: "firebrick", align: "right" })
    .editTextMark({ baseline: "middle" })
    .encodeText({ field: "sourceDisplay" })
    .encodeX({ datum: 275 })
    .encodeY({ datum: 80 })
    .editXScale({ domain: [0, 550] })
    .editYScale({ domain: [0, 160] })
    .createGrid({ horizontal: { color: "#ddd", values: [0, 20, 40, 60, 80, 100, 120, 140, 160] }, vertical: { color: "#ddd", values: [0, 100, 200, 300, 400, 500] } })
    .createXAxis({ line: { color: "#888" }, ticksAndLabels: { values: [0, 100, 200, 300, 400, 500], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black", flush: true } }, title: { text: "Weekly Wage (£ 000's)", fontSize: 11, fontWeight: 700, color: "black" } })
    .createYAxis({ line: { color: "#888" }, ticksAndLabels: { values: [0, 20, 40, 60, 80, 100, 120, 140, 160], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black" } }, title: { text: "Market Value (£ Millions)", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" } } })
    .createTitle({ text: "Market Value vs Weekly Wage", titleStyle: { fontSize: 18, fontWeight: 700, color: "rgb(0, 0, 0)" }, alongOffset: -38.6845703125 })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({ subtitle: "Figure 3: Click on the icons in the legend to focus in on one club\nSeason: 22/23\nSources: Capology + Transfermarkt", subtitleStyle: { fontSize: 12, fontStyle: "italic", color: "rgb(0, 0, 0)" } });
}