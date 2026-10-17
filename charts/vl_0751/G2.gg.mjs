// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 426,
      height: 361,
      margin: { left: 29, top: 39, right: 97, bottom: 22 }
    })
    .createData({ id: "rows", values: data })
    .createComputedData({
      id: "rowsYear",
      as: "yearMs",
      expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" }
    })
    .createSortedData({
      id: "sourceStackOrder",
      sortBy: [{ field: "Country Name", order: "descending" }]
    })
    .createStackData({
      category: "yearMs",
      group: "Country Name",
      value: "Gross savings (% of GDP)"
    })
    .createBarPlot({
      x: {
        field: "yearMs",
        fieldType: "temporal"
      },
      y: {
        lower: "Gross savings (% of GDP)_start",
        upper: "Gross savings (% of GDP)_end",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({
      domain: [-27749296551, 1637208496551],
      range: [29, 329],
      nice: false
    })
    .editYScale({
      domain: [0, 120]
    })
    .encodeColor({
      field: "Country Name",
      fieldType: "nominal",
      layout: "overlay"
    })
    .editColorScale({
      domain: ["Canada", "Saudi Arabia", "Senegal"],
      range: ["#03f7b8", "#899fdb", "#422b39"]
    })
    .encodeBarWidth({ pixels: 5 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [
            0, 157766400000, 315532800000, 473385600000, 631152000000,
            788918400000, 946684800000, 1104537600000, 1262304000000,
            1420070400000, 1577836800000
          ],
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100, 120],
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createLegend({
      position: "right",
      title: false,
      labels: { fontSize: 10 }
    })
    .createTitle({
      text: "Gross Savings (% of GDP)",
      offset: -12,
      titleStyle: { fontSize: 13, fontWeight: 700 }
    })
    .editTitle({
      subtitle: "in Canada, Saudi Arabia and Senegal",
      gap: 2,
      subtitleStyle: { fontStyle: "italic", fontSize: 9 }
    })
    .editTitle({
      alongOffset: -23.6845703125
    });
}