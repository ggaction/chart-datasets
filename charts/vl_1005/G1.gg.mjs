// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0, doc-dd4a5f585ff65fb2
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 667, height: 377, margin: { left: 53, top: 40, right: 14, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "scoreBands", field: "band", oneOf: ["760+", "<620", "620-659", "660-719", "720-759"] })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createSortedData({
      id: "sourceStackOrder",
      sortBy: [{ field: "band", order: "descending" }]
    })
    .createBarPlot({
      x: { field: "date", fieldType: "temporal", scale: { domain: [1041728461016, 1611529138983], nice: false } },
      y: { field: "valueNum", fieldType: "quantitative", scale: { domain: [0, 1200], zero: true } },
      guides: false
    })
    .encodeColor({
      field: "band",
      layout: "stack",
      scale: {
        domain: ["620-659", "660-719", "720-759", "760+", "<620"],
        range: ["rgb(199, 233, 181)", "rgb(134, 208, 187)", "rgb(69, 180, 194)", "rgb(37, 139, 187)", "rgb(34, 90, 165)"]
      }
    })
    .encodeBarWidth({ pixels: 5 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [1072915200000, 1104537600000, 1136073600000, 1167609600000, 1199145600000, 1230768000000, 1262304000000, 1293840000000, 1325376000000, 1356998400000, 1388534400000, 1420070400000, 1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 5, format: "%Y" }
          },
          title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 30 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 200, 400, 600, 800, 1000, 1200],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, format: ",.0f" }
          },
          title: { text: "Mortgage Originations ($, Billions)", fontSize: 11, fontWeight: 700, offset: 34, rotation: { value: -90, unit: "degrees" } }
        }
      },
      grid: false,
      legend: {
        position: "top-right",
        columns: 1,
        title: "band",
        symbol: { width: 10, height: 10 },
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11, fontWeight: 700 }
      }
    })
    .createTitle({
      text: " US Mortgage Originations by Credit Scores*",
      titleStyle: { fontSize: 13, fontWeight: "700", color: "black" },
      alongOffset: -47
    })
    .editTitle({ offset: -4, gap: 1, subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .editTitle({ subtitle: "Biilion Dollars. 2003-2021. Source: Federal  Reserve Bank of New York. *Credit Score is Equifax Riskscore 3.0" });
}