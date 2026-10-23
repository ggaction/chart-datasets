import {chart} from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: {width: 300, height: 300},
      margin: {left: 39, top: 10, right: 163, bottom: 440},
      plotBorder: {underlay: true}
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1720-original-source-font-widths",
        measurements: [
          {text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625},
          {text: "240", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875},
          {text: "Horsepower", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 63.578125},
          {text: "Europe", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 32.25},
          {text: "Weight_in_lbs", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 74.375}
        ]
      }
    })
    .createData({values: data})
    .filterData({id: "hp", field: "Horsepower", noneOf: [null]})
    .filterData({id: "mpg", field: "Miles_per_Gallon", noneOf: [null]})
    .createScatterPlot({
      x: {field: "Horsepower", scale: {domain: [0, 240]}},
      y: {field: "Miles_per_Gallon", scale: {domain: [0, 50]}},
      guides: false
    })
    .createGuides({
      axes: {
        x: {
          underlay: true,
          line: {color: "#888"},
          ticksAndLabels: {
            values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240],
            ticks: {length: 5, color: "#888", alongOffset: 0.5},
            labels: {
              fontSize: 10,
              color: "black",
              offset: 5.5,
              alongOffset: 0.5,
              flush: true,
              labelMap: [
                {value: 20, label: ""},
                {value: 60, label: ""},
                {value: 100, label: ""},
                {value: 140, label: ""},
                {value: 180, label: ""},
                {value: 220, label: ""}
              ]
            }
          },
          title: {text: "Horsepower", fontSize: 11, fontWeight: 700, color: "black", baseline: "alphabetic", offset: 30.5, alongOffset: 0.5}
        },
        y: {
          underlay: true,
          line: {color: "#888"},
          ticksAndLabels: {
            values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
            ticks: {length: 5, color: "#888", alongOffset: 0.5},
            labels: {fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625}
          },
          title: {text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, color: "black", baseline: "alphabetic", offset: 23.623046875, alongOffset: 0.5}
        }
      },
      grid: {vertical: {color: "#ddd"}, horizontal: {color: "#ddd"}},
      legend: false
    })
    .encodeChannels({
      target: "scatterPlot",
      channels: {
        color: {field: "Origin", scale: {domain: ["Europe", "Japan", "USA"]}},
        size: {field: "Horsepower", fieldType: "quantitative", scale: {domain: [0, 230], range: [3.141592653589793, 283.5287369864788]}},
        opacity: {field: "Weight_in_lbs", fieldType: "quantitative", scale: {domain: [1613, 5140], range: [0.3, 0.8]}}
      }
    })
    .editPointMark({stroke: false})
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        titleStyle: {fontSize: 11, fontWeight: 700, color: "black"},
        labels: {fontSize: 10, color: "black"},
        border: {padding: 30, color: "lightgrey", lineWidth: 5, strokeDash: [4, 2, 6, 1]},
        rowPadding: 15,
        titlePadding: 20,
        channels: ["color"],
        symbol: {layers: [{type: "point", size: 5, stroke: "black", strokeWidth: 3, opacity: 0.7}]}
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        titleStyle: {fontSize: 11, fontWeight: 700, color: "black"},
        labels: {fontSize: 10, color: "black"},
        border: {padding: 30, color: "lightgrey", lineWidth: 5, strokeDash: [4, 2, 6, 1]},
        rowPadding: 15,
        titlePadding: 20,
        channels: ["size"],
        values: [0, 50, 100, 150, 200]
      }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "size",
      symbol: {fill: "black", stroke: "transparent", opacity: 0.49}
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        titleStyle: {fontSize: 11, fontWeight: 700, color: "black"},
        labels: {fontSize: 10, color: "black", format: ",.0f"},
        border: {padding: 30, color: "lightgrey", lineWidth: 5, strokeDash: [4, 2, 6, 1]},
        rowPadding: 15,
        titlePadding: 20,
        channels: ["opacity"],
        values: [2000, 2500, 3000, 3500, 4000, 4500, 5000],
        symbol: {type: "point", radius: 5, fill: "rgba(0,0,0,0.7)", stroke: "transparent", strokeWidth: 0}
      }
    })
    .editLegend({position: "right", blockLayout: "column"});
}

// DOCS: doc-2b2e3149e57e859d doc-5d1780cc7372f105