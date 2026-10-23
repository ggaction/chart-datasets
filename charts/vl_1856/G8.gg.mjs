import { chart } from "ggaction";
import flows from "./data.json";
import names from "./data-lookup-0.json";

// createLookupData copies reference fields without changing row order or count
// (see docs/reference/actions/statistics.md `createLookupData`, DOCS ID doc-ba31c0f4386b037c).
// names is created before flows so the first lookup chains primary origins, then destinations.

export function buildChart() {
  return chart()
    // Exactly 603x560 outer with 400x400 plot and original margins 131/29/72/131.
    .createCanvas({
      plot: { width: 400, height: 400 },
      margin: { left: 131, top: 29, right: 72, bottom: 131 },
      plotBorder: {}
    })
    // Separate editCanvas background, matching the original Vega-Lite background.
    .editCanvas({ background: "#f9f9fc" })
    // Chart title "total": fontsize 18, weight 700, black, with source offset.
    .createTitle({
      text: "total",
      titleStyle: { fontSize: 18, fontWeight: 700, color: "black" },
      offset: -10.21875
    })
    .editTitle({ align: "center" })
    // Reference names first, then primary flows, so lookups infer the flows source.
    .createData({ id: "names", values: names })
    .createData({ id: "flows", values: flows })
    // First lookup: source => lad17cd copies lad17nm AS srcName.
    .createLookupData({
      id: "origins",
      field: "source",
      lookup: { data: "names", key: "lad17cd", fields: ["lad17nm"], as: ["srcName"] }
    })
    // Second lookup: dest => lad17cd copies lad17nm AS dstName.
    .createLookupData({
      id: "destinations",
      field: "dest",
      lookup: { data: "names", key: "lad17cd", fields: ["lad17nm"], as: ["dstName"] }
    })
    // Original total stays STRING; add SEPARATE numericTotal via toNumber.
    .createComputedData({
      id: "numeric",
      as: "numericTotal",
      expression: { op: "toNumber", operand: { field: "total" } }
    })
    // Heatmap with explicit alphabetic X/Y category domains; native categorical Y
    // maps top-to-bottom already, so no reverse:true. Default band widths/spacing
    // produce exact 12.5px cells. guides:false defers guides to createGuides.
    .createHeatmap({
      x: {
        field: "srcName",
        scale: {
          domain: [
            "Aberdeen City", "Aberdeenshire", "Angus", "Argyll and Bute",
            "City of Edinburgh", "Clackmannanshire", "Dumfries and Galloway",
            "Dundee City", "East Ayrshire", "East Dunbartonshire", "East Lothian",
            "East Renfrewshire", "Falkirk", "Fife", "Glasgow City", "Highland",
            "Inverclyde", "Midlothian", "Moray", "Na h-Eileanan Siar",
            "North Ayrshire", "North Lanarkshire", "Orkney Islands",
            "Perth and Kinross", "Renfrewshire", "Scottish Borders",
            "Shetland Islands", "South Ayrshire", "South Lanarkshire", "Stirling",
            "West Dunbartonshire", "West Lothian"
          ]
        }
      },
      y: {
        field: "dstName",
        scale: {
          domain: [
            "Aberdeen City", "Aberdeenshire", "Angus", "Argyll and Bute",
            "City of Edinburgh", "Clackmannanshire", "Dumfries and Galloway",
            "Dundee City", "East Ayrshire", "East Dunbartonshire", "East Lothian",
            "East Renfrewshire", "Falkirk", "Fife", "Glasgow City", "Highland",
            "Inverclyde", "Midlothian", "Moray", "Na h-Eileanan Siar",
            "North Ayrshire", "North Lanarkshire", "Orkney Islands",
            "Perth and Kinross", "Renfrewshire", "Scottish Borders",
            "Shetland Islands", "South Ayrshire", "South Lanarkshire", "Stirling",
            "West Dunbartonshire", "West Lothian"
          ]
        }
      },
      guides: false
    })
    // Color is numericTotal quantitative: symlog, domain [0,60000], named palette.
    .encodeColor({
      field: "numericTotal",
      fieldType: "quantitative",
      scale: {
        type: "symlog",
        domain: [0, 60000],
        range: { palette: "yelloworangebrown" }
      }
    })
    // Rect stroke white and width 2 are necessary.
    .editRectMark({ stroke: "white", strokeWidth: 2 })
    .createXAxis({
      ticksAndLabels: {
        values: [
          "Aberdeen City", "Aberdeenshire", "Angus", "Argyll and Bute",
          "City of Edinburgh", "Clackmannanshire", "Dumfries and Galloway",
          "Dundee City", "East Ayrshire", "East Dunbartonshire", "East Lothian",
          "East Renfrewshire", "Falkirk", "Fife", "Glasgow City", "Highland",
          "Inverclyde", "Midlothian", "Moray", "Na h-Eileanan Siar",
          "North Ayrshire", "North Lanarkshire", "Orkney Islands",
          "Perth and Kinross", "Renfrewshire", "Scottish Borders",
          "Shetland Islands", "South Ayrshire", "South Lanarkshire", "Stirling",
          "West Dunbartonshire", "West Lothian"
        ],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10,
          offset: 7.5,
          alongOffset: 0.390625,
          rotation: { value: -90, unit: "degrees" },
          align: "right"
        }
      },
      title: {
        fontSize: 11,
        fontWeight: 700,
        color: "black",
        text: "Origin",
        offset: 120.9521484375,
        alongOffset: 0.5
      }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [
          "Aberdeen City", "Aberdeenshire", "Angus", "Argyll and Bute",
          "City of Edinburgh", "Clackmannanshire", "Dumfries and Galloway",
          "Dundee City", "East Ayrshire", "East Dunbartonshire", "East Lothian",
          "East Renfrewshire", "Falkirk", "Fife", "Glasgow City", "Highland",
          "Inverclyde", "Midlothian", "Moray", "Na h-Eileanan Siar",
          "North Ayrshire", "North Lanarkshire", "Orkney Islands",
          "Perth and Kinross", "Renfrewshire", "Scottish Borders",
          "Shetland Islands", "South Ayrshire", "South Lanarkshire", "Stirling",
          "West Dunbartonshire", "West Lothian"
        ],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.390625 }
      },
      title: {
        fontSize: 11,
        fontWeight: 700,
        color: "black",
        text: "Destination",
        offset: 118.7958984375,
        alongOffset: 0.5
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      // Legend title is "total" (not numericTotal). Source-measured gradient
      // length 400 / thickness 16, offset 18 and label offset 2 preserve the
      // original 603px width; visible values only 0..40000 with format ",.0f".
      legend: {
        title: "total",
        values: [0, 10000, 20000, 30000, 40000],
        gradient: { length: 400, thickness: 16 },
        offset: 18,
        labels: { fontSize: 10, color: "black", offset: 2, format: ",.0f" },
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }
      }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editYAxisLabels({ color: "black" })
    .editLegend({ titlePadding: 3 });
}