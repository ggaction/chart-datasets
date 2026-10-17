// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e — createLinePlot (Cartesian line chart) and line tutorial provenance.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 531, height: 374, margin: { left: 24, top: 52, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "dateParsed",
      as: "DateParsed",
      expression: { op: "parseTime", operand: { field: "Date" }, format: "auto" }
    })
    .filterData({ id: "dateWindow", field: "DateParsed", range: { min: -2208988800000, max: 1698796800000 } })
    .createComputedData({
      id: "capeNum",
      as: "CAPE_num",
      expression: { op: "toNumber", operand: { field: "CAPE" } }
    })
    .createLinePlot({
      x: {
        field: "DateParsed",
        fieldType: "temporal",
        temporalUnit: "auto"
      },
      y: {
        field: "CAPE_num",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [-2208988800000, 1675209600000], nice: false })
    .editYScale({ domain: [0, 45] })
    .editLineMark({ strokeWidth: 2, stroke: "rgb(0,67,127)" })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [
            -2208988800000, -1893456000000, -1577923200000, -1262304000000,
            -946771200000, -631152000000, -315619200000, 0,
            315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000
          ],
          ticks: {},
          labels: { fontSize: 10, offset: 5.5, flush: true }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45],
          ticks: {},
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      }
    })
    .createTitle({
      text: "Price to earnings ratio - long run",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "Cyclically adjusted PE (P/E10). Source: Rober Shiller\n",
      offset: -13,
      gap: 3
    })
    .editTitle({ alongOffset: -18.124 });
}