import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-2c912465a1515bd5, doc-74fc341a49e892f8, doc-fb3b01cca895bdad

export function buildChart() {
  return chart()
    .createCanvas({ width: 658, height: 377, margin: { left: 53, top: 27, right: 5, bottom: 50 } })
    .createData({ values: data })
    .createComputedData({ id: "yearNum", as: "year", expression: { op: "toNumber", operand: { field: "iyear" } } })
    .createSummaryData({ id: "yearSummary", groupBy: "year", aggregates: [{ op: "sum", field: "Attack Count", as: "sum_Attack_Count" }] })
    .createAreaPlot({
      x: { field: "year", fieldType: "nominal", scale: { type: "point", domain: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015] } },
      y: { field: "sum_Attack_Count", scale: { type: "linear", domain: [0, 1000] } },
      guides: false
    })
    .editAreaMark({ fill: "#fb8072", opacity: 1 })
    .createTitle({ text: "Yearly Terrorist Attacks in Baghdad", offset: -3, titleStyle: { fontSize: 13, fontWeight: 700 } })
    .editTitle({ align: "center", alongOffset: 24 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
        },
        title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 36 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, format: ",.0f" }
        },
        title: { text: "Sum of Attack Count", fontSize: 11, fontWeight: 700, offset: 36 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" } });
}