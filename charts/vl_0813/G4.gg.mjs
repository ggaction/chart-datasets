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
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888", length: 5 },
        labels: { offset: 7, rotation: { value: 45, unit: "degrees" }, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black" }
      },
      title: { text: "Year", offset: 41.2659912109375, fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888", length: 5 },
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black" }
      },
      title: { text: "Goals Scored", rotation: { value: -90, unit: "degrees" }, offset: 33.1845703125, fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
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
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black" },
        border: { background: "#FFFFFF" }
      }
    })
    .createTitle({
      text: "Total Goals Scored by Top 6 EPL Clubs",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({
      subtitle: "Goals scored (season) by Top 6 EPL Teams from 2002-2022.\nSource: Wikipedia",
      offset: -13,
      gap: 1
    })
    .editTitle({ alongOffset: -38.68 });
}