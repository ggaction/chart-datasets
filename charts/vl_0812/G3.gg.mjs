// DOCS: doc-071c93dff3a5ea2e, doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

const YEARS = ["02/03","03/04","04/05","05/06","06/07","07/08","08/09","09/10","10/11","11/12","12/13","13/14","14/15","15/16","16/17","17/18","18/19","19/20","20/21","21/22"];
const TEAMS = ["Arsenal","Chelsea","Liverpool","Man City","Man United","Tottenham"];
const COLORS = ["#EF0107","#034694","#00B2A9","#4fc3f7","#FBE122","black"];
const Y_TICKS = [0,10,20,30,40,50,60,70,80,90,100,110];

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 625, margin: { left: 44, top: 52, right: 5, bottom: 273 } })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "Year", fieldType: "nominal" },
      y: { field: "Goals Scored", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ target: "linePlot", field: "Team" })
    .editLineMark({ strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "Year", fieldType: "nominal" },
      y: { field: "Goals Scored", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ target: "scatterPlot", field: "Team" })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .editPointMark({ target: "scatterPlot", opacity: 1 })
    .editXScale({ domain: YEARS })
    .editYScale({ domain: [0, 110] })
    .editColorScale({ domain: TEAMS, range: COLORS })
    .createTitle({
      text: "Total Goals Scored by Top 6 EPL Clubs",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -38.685, gap: 3 })
    .editTitle({ subtitle: "Goals scored (season) by Top 6 EPL Teams from 2002-2022.\nSource: Wikipedia" })
    .createAxes({
      x: {
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black", rotation: { value: 45, unit: "degrees" } }
          },
          title: { text: "Year", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 42 }
      },
      y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: Y_TICKS,
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
          },
          title: { text: "Goals Scored", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 33, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGrid({ horizontal: { values: Y_TICKS, color: "#ddd", lineWidth: 1 } })
    .createGuides({
        axes: false,
        grid: false,
        legend: {
            target: "scatterPlot",
            channels: ["color"],
            title: "Team",
            columns: 1,
            direction: "horizontal",
            position: "bottom",
            symbol: { layers: [{ type: "point", shape: "circle", size: 5, strokeWidth: 1.5 }] },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
            titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
            border: { background: "white" }
        }
    });
}