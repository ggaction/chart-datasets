// DOCS: doc-e790db38fc2a278a (createScatterPlot facade + semantic layers; doc-2e6240c00cb297cc)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 692,
      height: 765,
      margin: { top: 49, right: 143, bottom: 216, left: 49 }
    })
    .editCanvas({ background: "#f9f9f9" })
    .createData({ id: "source", values: data })
    .createComputedData({
      id: "numX",
      as: "gx",
      expression: { op: "toNumber", operand: { field: "g79X" } }
    })
    .createComputedData({
      id: "numXY",
      as: "gy",
      expression: { op: "toNumber", operand: { field: "g79Y" } }
    })
    .createScatterPlot({
      x: { field: "gx", fieldType: "quantitative", scale: { domain: [0, 6], nice: false } },
      y: { field: "gy", fieldType: "quantitative", scale: { domain: [0, 6], nice: false, reverse: true } },
      guides: false
    })
    .encodeColor({
      field: "regionName",
      fieldType: "nominal",
      scale: {
        palette: "tableau20",
        domain: [
          "Aberdeen City", "Aberdeenshire", "Angus", "Argyll and Bute",
          "City of Edinburgh", "Clackmannanshire", "Dumfries and Galloway",
          "Dundee City", "East Ayrshire", "East Dunbartonshire", "East Lothian",
          "East Renfrewshire", "Falkirk", "Fife", "Glasgow City", "Highland",
          "Inverclyde", "Midlothian", "Moray", "Na h-Eileanan Siar",
          "North Ayrshire", "North Lanarkshire", "Orkney Islands",
          "Perth and Kinross", "Renfrewshire", "Scottish Borders",
          "Shetland Islands", "South Ayrshire", "South Lanarkshire",
          "Stirling", "West Dunbartonshire", "West Lothian"
        ]
      }
    })
    .encodePointRadius({ value: Math.sqrt(6944.444444444444 / Math.PI) })
    .editPointMark({ shape: "square", stroke: "white", strokeWidth: 2 })
    .createTextMark({ data: "numXY", fontSize: 7.5, align: "center" })
    .editTextMark({ baseline: "middle", fill: "black" })
    .encodeText({ field: "regionName" })
    .encodeX({ field: "gx", fieldType: "quantitative" })
    .encodeY({ field: "gy", fieldType: "quantitative" })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            ticks: {},
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".1f", flush: true }
          },
          title: { text: "g79X", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            ticks: {},
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".1f" }
          },
          title: { text: "g79Y", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: {
        title: "regionName",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        symbol: { stroke: "white", strokeWidth: 1.5 }
      }
    })
    .editLegend({ overflow: { maxItems: 29, summary: "ellipsis-count" } });
}