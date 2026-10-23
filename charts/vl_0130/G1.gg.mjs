import {chart} from "ggaction";
// DOCS: docs/tutorials/line-chart.md (doc-8a4f6f06e0d37d5e)
import data from "./data.json";
import bars from "./bar-data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: {width: 400, height: 300},
      margin: {left: 44, right: 132, top: 27, bottom: 37},
      plotBorder: {underlay: true}
    })
    .createData({values: data})
    .createLinePlot({
      x: {field: "gasDayStart", fieldType: "temporal", scale: {domain: [1419667200000, 1451923200000]}},
      y: {field: "full", scale: {domain: [0, 100]}},
      guides: false
    })
    .editLineMark({stroke: "red"})
    .createData({id: "flows", values: bars})
    .createBarPlot({
      x: {field: "gasDayStart", fieldType: "temporal", scale: {id: "x"}},
      y: {field: "value", scale: {id: "flowY", domain: [-15000, 15000]}},
      guides: false
    })
    .encodeBarWidth({pixels: 5})
    .editBarMark({stroke: false, opacity: 0.6})
    .encodeColor({
      field: "variable",
      layout: "diverging",
      scale: {domain: ["afname", "injectie"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]}
    })
    .createGuides({
      axes: {
        x: {
          underlay: true,
          line: {color: "#888"},
          ticksAndLabels: {
            values: [1420070400000, 1422748800000, 1425168000000, 1427846400000, 1430438400000, 1433116800000, 1435708800000, 1438387200000, 1441065600000, 1443657600000, 1446336000000, 1448928000000, 1451606400000],
            ticks: {length: 5, color: "#888", alongOffset: 0.5},
            labels: {
              fontSize: 10,
              color: "#000",
              offset: 7,
              alongOffset: 0.5,
              labelMap: [
                {value: 1420070400000, label: "2015"},
                {value: 1422748800000, label: ""},
                {value: 1425168000000, label: "March"},
                {value: 1427846400000, label: ""},
                {value: 1430438400000, label: "May"},
                {value: 1433116800000, label: ""},
                {value: 1435708800000, label: "July"},
                {value: 1438387200000, label: ""},
                {value: 1441065600000, label: "September"},
                {value: 1443657600000, label: ""},
                {value: 1446336000000, label: "November"},
                {value: 1448928000000, label: ""},
                {value: 1451606400000, label: "2016"}
              ]
            }
          },
          title: {text: "Datum", fontSize: 11, fontWeight: 700, color: "#000", offset: 27.578125, alongOffset: 0.5}
        },
        y: [
          {
            id: "y",
            scale: "y",
            underlay: true,
            line: {color: "#888"},
            ticksAndLabels: {
              values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
              ticks: {length: 5, color: "#888", alongOffset: 0.5},
              labels: {fontSize: 10, color: "#000", offset: 6.5, alongOffset: 0.890625}
            },
            title: {text: "Vulniveau (%)", fontSize: 11, fontWeight: 700, color: "#000", offset: 32.1064453125, alongOffset: 0.5, rotation: {value: -90, unit: "degrees"}}
          },
          {
            id: "flowAxis",
            scale: "flowY",
            position: "right",
            underlay: true,
            line: {color: "#888"},
            ticksAndLabels: {
              values: [-15000, -10000, -5000, 0, 5000, 10000, 15000],
              ticks: {length: 5, color: "#888", alongOffset: 0.5},
              labels: {
                fontSize: 10,
                color: "#000",
                format: ",.0f",
                offset: 7.5,
                alongOffset: 0.890625,
                labelMap: [
                  {value: -15000, label: "−15,000"},
                  {value: -10000, label: "−10,000"},
                  {value: -5000, label: "−5,000"}
                ]
              }
            },
            title: {text: "Gastoevoer (GWh/week)", fontSize: 11, fontWeight: 700, color: "#000", offset: 52.84765625, alongOffset: 0.5, rotation: {value: 90, unit: "degrees"}}
          }
        ]
      },
      grid: {
        vertical: {color: "#ddd"},
        horizontal: {scale: "y", color: "#ddd"}
      },
      legend: {
        titleStyle: {fontSize: 11, fontWeight: 700, color: "black"},
        labels: {fontSize: 10, color: "black"},
        symbol: {layers: [{type: "swatch", width: 10, height: 10, strokeWidth: 0, opacity: 0.6}]}
      }
    })
    .createTitle({
      text: "Gasvoorraad in Nederland 2015",
      titleStyle: {fontSize: 13, fontWeight: 700, color: "black"},
      offset: -7.046875
    })
    .editTitle({align: "center"});
}