// DOCS: doc-4caf8f5e4552a6b2 examples/facet-header-rotation/program.js (createCanvas with plot/margin/plotBorder; facet with outer axes, spacing "plot")
// DOCS: doc-9b8ffb4e65fb646c docs/_sources/action-reference.md (editCompositionLayout columns/gap/spacing; facet field repeat)
// DOCS: doc-d2335511090667be examples/facet-field-titles/program.js (editFacetGuides({axes:"outer",legend:false}), editCompositionLayout({spacing:"plot"}))
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Stage1: unit canvas — plot 200x200, margins 30/8/80/28, plot border
    .createCanvas({
      plot: { width: 200, height: 200 },
      margin: { left: 30, right: 8, top: 80, bottom: 28 },
      plotBorder: { color: "#ddd", lineWidth: 1, underlay: true }
    })
    // Stage2: raw 94-row dataset with all six CSV columns, unchanged strings
    .createData({ values: data })
    // Stage3: fold GDPA and CPI_index into var/val (188 rows)
    .createFoldData({
      id: "folded",
      fields: ["GDPA", "CPI_index"],
      as: { key: "var", value: "val" }
    })
    // Stage4: computed aliases — UTC timestamp, calendar year, numeric value
    .createComputedData({
      id: "timestamp",
      as: "sourceDate",
      expression: { op: "parseTime", operand: { field: "DATE" } }
    })
    .createComputedData({
      id: "calendar",
      as: "year",
      expression: { op: "datePart", part: "year", operand: { field: "sourceDate" }, timeZone: "UTC" }
    })
    .createComputedData({
      id: "numericValue",
      as: "sourceValue",
      expression: { op: "toNumber", operand: { field: "val" } }
    })
    // Stage5: original filter datum.year < 1945 (32 painted vertices)
    .filterData({
      id: "before1945",
      field: "year",
      predicate: { op: "lt", value: 1945 }
    })
    // Stage6: high-level line plot with complete source guides
    .createLinePlot({
      x: { field: "sourceDate", fieldType: "temporal" },
      y: { field: "sourceValue" },
      guides: false
    })
    .editXScale({ domain: [-1293840000000, -820540800000] })
    .editYScale({ zero: true, nice: { count: 10 } })
    .createGuides({
      axes: {
        x: {
          offset: 6,
          line: { color: "#888" },
          ticksAndLabels: {
            values: [-1262304000000, -1199232000000, -1136073600000, -1073001600000, -1009843200000, -946771200000, -883612800000, -820540800000],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: {
              fontSize: 10,
              color: "black",
              format: "%Y",
              flush: true,
              offset: 5.5,
              alongOffset: 0.5,
              labelMap: [
                { value: -1199232000000, label: "" },
                { value: -1073001600000, label: "" },
                { value: -946771200000, label: "" },
                { value: -820540800000, label: "" }
              ]
            }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            count: 5,
            rounding: "nearest",
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: { fontSize: 10, color: "black", format: "ticks", offset: 6.5, alongOffset: 0.890625 }
          },
          title: false
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: false },
      legend: false
    })
    // Stage7: line mark source stroke paint
    .editLineMark({ stroke: "rgb(128,0,0)" })
    // Stage8: facet by folded var with the two source values
    .facet({ field: "var", data: "folded", values: ["CPI_index", "GDPA"] })
    .editFacetHeaders({ fontSize: 10, fontWeight: 400, color: "black" })
    .editFacetHeaders({ offset: 9.609375 })
    .editFacetScales({ y: "independent" })
    .editFacetGuides({ axes: "outer", legend: false })
    .editCompositionLayout({ columns: 1, gap: 47, spacing: "plot" })
    .editCompositionLayout({ topLane: "shared" })
    // Stage9: shared parent title with two-line italic subtitle
    .createTitle({
      text: "The Great Depression",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -24.6845703125
    })
    .editTitle({ offset: -2.953125 })
    .editTitle({
      subtitle: "GDP and prices\nSource: FRED",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" },
      gap: 3.34375
    });
}