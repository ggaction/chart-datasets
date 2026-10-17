import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-af5562e03efab97d

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 618, margin: { left: 44, top: 52, right: 5, bottom: 266 } })
    .createData({ id: "goals", values: data })
    .createSortedData({
      id: "teamDesc",
      sortBy: [{ field: "Team", order: "descending" }]
    })
    .createStackData({
      category: "Year",
      group: "Team",
      value: "Goals Scored"
    })
    .createSortedData({
      id: "order",
      sortBy: [{ field: "Team", order: "ascending" }, { field: "Year", order: "ascending" }]
    })
    .createBarPlot({
      x: "Year",
      y: { lower: "Goals Scored_start", upper: "Goals Scored_end" },
      guides: false
    })
    .encodeColor({
      field: "Team",
      layout: "overlay"
    })
    .editColorScale({
      domain: ["Arsenal", "Chelsea", "Liverpool", "Man City", "Man United", "Tottenham"],
      range: ["#EF0107", "#034694", "#00B2A9", "#4fc3f7", "#FBE122", "black"]
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 500] })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { offset: 7, rotation: { value: 45, unit: "degrees" }, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400 }
      },
      title: { text: "Year", offset: 41.2659912109375, fontSize: 11, fontFamily: "sans-serif" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400 }
      },
      title: { text: "Goals Scored", rotation: { value: -90, unit: "degrees" }, offset: 33.1845703125, fontSize: 11, fontFamily: "sans-serif" }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "barPlot",
        channels: ["color"],
        position: "bottom",
        direction: "horizontal",
        columns: 1,
        title: "Team",
        titlePosition: "top",
        symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400 },
        border: { background: "#FFFFFF" }
      }
    })
    .editLegendTitle({ target: "barPlot", color: "black" })
    .editLegendLabels({ target: "barPlot", color: "black" })
    .createTitle({
      text: "Total Goals Scored by Top 6 EPL Clubs",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "Goals scored (season) by Top 6 EPL Teams from 2002-2022.\nSource: Wikipedia",
      offset: -13,
      gap: 1
    })
    .editTitle({ alongOffset: -38.68 })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "black" },
      subtitleStyle: { color: "black" }
    });
}