// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-2e8ae49a2e6e5e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 314, height: 362, margin: { left: 29, top: 40, right: 5, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createTimeUnitData({ id: "Time_year", field: "Time", unit: "year" })
    .createSummaryData({
      id: "regionYearSummary",
      groupBy: ["Time_year", "Region"],
      aggregates: [{ op: "sum", field: "ValueNum", as: "sumValueNum" }]
    })
    .createSortedData({ id: "regionStackOrder", source: "regionYearSummary", sortBy: [{ field: "Region", order: "descending" }] })
    .createAreaPlot({
      x: { field: "Time_year", fieldType: "temporal" },
      y: { field: "sumValueNum" },
      guides: false
    })
    .editXScale({ domain: [-315619200000, 1451606400000], nice: false })
    .editYScale({ domain: [0, 100] })
    .encodeGroup({ target: "areaPlot", fieldType: "nominal", field: "Region" })
    .encodeColor({
      field: "Region",
      layout: "stack",
      scale: {
        domain: ["East Asia & Pacific", "Europe & Central Asia", "Latin America & Caribbean", "Middle East & N. Africa", "N. America", "South Asia", "Sub-Saharan Africa"],
        palette: { name: "yellowgreenblue", count: 7, extent: [0.125, 0.875] }
      }
    })
    .editAreaMark({ target: "areaPlot", opacity: 1 })
    .createTitle({
      text: "Fish caught - by continent",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -23.7
    })
    .editTitle({ offset: -12, gap: 1, subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .editTitle({ subtitle: "Million tonnes. Source: Our World in Data" })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [-315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000],
            ticks: { color: "#888" },
            labels: { fontSize: 10, offset: 7, format: "%Y", color: "black", flush: true }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            ticks: { color: "#888" },
            labels: { fontSize: 10, offset: 7, color: "black" }
          },
          title: false
        }
      },
      grid: false,
      legend: {
        position: "top-left",
        title: false,
        labels: { fontSize: 10, color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
      }
    });
}