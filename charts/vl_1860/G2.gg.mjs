import { chart } from "ggaction";
import flows from "./data.json";
import names from "./data-lookup-0.json";

export function buildChart() {
  return chart()
    // createLookupData copies reference fields without changing row order (doc-6c9fb1939704b675)
    .createCanvas({ plot: { width: 400, height: 400 }, margin: { left: 131, top: 29, right: 88, bottom: 131 }, plotBorder: {} })
    .editCanvas({ background: "#f9f9fc" })
    .createTitle({ text: "otherClosed", titleStyle: { fontSize: 18, fontWeight: 700, color: "black" }, offset: -10.21875 })
    .editTitle({ align: "center" })
    .createData({ id: "names", values: names })
    .createData({ id: "flows", values: flows })
    .createLookupData({ id: "origins", field: "source", lookup: { data: "names", key: "lad17cd", fields: ["lad17nm"], as: ["srcName"] } })
    .createLookupData({ id: "destinations", field: "dest", lookup: { data: "names", key: "lad17cd", fields: ["lad17nm"], as: ["dstName"] } })
    .createComputedData({ id: "numeric", as: "numericValue", expression: { op: "toNumber", operand: { field: "otherClosed" } } })
    .createHeatmap({
      x: { field: "srcName", scale: { domain: ["Aberdeen City", "Aberdeenshire", "Angus", "Argyll and Bute", "City of Edinburgh", "Clackmannanshire", "Dumfries and Galloway", "Dundee City", "East Ayrshire", "East Dunbartonshire", "East Lothian", "East Renfrewshire", "Falkirk", "Fife", "Glasgow City", "Highland", "Inverclyde", "Midlothian", "Moray", "Na h-Eileanan Siar", "North Ayrshire", "North Lanarkshire", "Orkney Islands", "Perth and Kinross", "Renfrewshire", "Scottish Borders", "Shetland Islands", "South Ayrshire", "South Lanarkshire", "Stirling", "West Dunbartonshire", "West Lothian"] } },
      y: { field: "dstName", scale: { domain: ["Aberdeen City", "Aberdeenshire", "Angus", "Argyll and Bute", "City of Edinburgh", "Clackmannanshire", "Dumfries and Galloway", "Dundee City", "East Ayrshire", "East Dunbartonshire", "East Lothian", "East Renfrewshire", "Falkirk", "Fife", "Glasgow City", "Highland", "Inverclyde", "Midlothian", "Moray", "Na h-Eileanan Siar", "North Ayrshire", "North Lanarkshire", "Orkney Islands", "Perth and Kinross", "Renfrewshire", "Scottish Borders", "Shetland Islands", "South Ayrshire", "South Lanarkshire", "Stirling", "West Dunbartonshire", "West Lothian"] } },
      guides: false
    })
    .encodeColor({ field: "numericValue", fieldType: "quantitative", scale: { type: "symlog", domain: [0, 60000], range: { palette: "yelloworangebrown" } } })
    .editRectMark({ stroke: "white", strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: { ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, color: "black", offset: 7.5, alongOffset: 0.390625, rotation: { value: -90, unit: "degrees" }, align: "right" } },
        title: { fontSize: 11, fontWeight: 700, color: "black", text: "Origin", offset: 120.9521484375, alongOffset: 0.5 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: { ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.390625 } },
        title: { fontSize: 11, fontWeight: 700, color: "black", text: "Destination", offset: 118.7958984375, alongOffset: 0.5 }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "otherClosed",
        values: [0, 10000, 20000, 30000, 40000],
        gradient: { length: 400, thickness: 16 },
        offset: 18,
        labels: { fontSize: 10, color: "black", offset: 2, format: ",.0f" },
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        titlePadding: 3
      }
    });
}