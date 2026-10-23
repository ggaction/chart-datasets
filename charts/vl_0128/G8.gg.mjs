import {chart} from "ggaction";
import data from "./data.json";
import bars from "./bar-data.json";

// DOCS: doc-48c72317a1a99e17 docs/api/guides.md — createGuides is an aggregate creation action composing axes, grid, and legend.
export function buildChart(){
  return chart()
    .createCanvas({
      plot: {width: 400, height: 300},
      margin: {left: 44, right: 132, top: 27, bottom: 37},
      plotBorder: {underlay: true}
    })
    .createData({
      values: data
    })
    .createLinePlot({
      x: {field: "gasDayStart", fieldType: "temporal"},
      y: "full",
      guides: false
    })
    .editXScale({
      domain: [1388131200000, 1420387200000]
    })
    .editYScale({
      domain: [0, 100],
      target: "linePlot"
    })
    .editLineMark({
      stroke: "red"
    })
    .createData({
      id: "flows",
      values: bars
    })
    .createBarPlot({
      x: {field: "gasDayStart", fieldType: "temporal", scale: {id: "x"}},
      y: {field: "value", scale: {id: "flowY", domain: [-15000, 15000]}},
      guides: false
    })
    .encodeBarWidth({
      pixels: 5
    })
    .editBarMark({
      stroke: false,
      opacity: 0.6
    })
    .encodeColor({
      field: "variable",
      layout: "diverging"
    })
    .editColorScale({
      domain: ["afname", "injectie"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .createAxes({
      x: {
        underlay: true,
        line: {},
        ticksAndLabels: {
          values: [1388534400000, 1391212800000, 1393632000000, 1396310400000, 1398902400000, 1401580800000, 1404172800000, 1406851200000, 1409529600000, 1412121600000, 1414800000000, 1417392000000, 1420070400000],
          ticks: {length: 5, alongOffset: 0.5},
          labels: {
            fontSize: 10,
            offset: 7,
            alongOffset: 0.5,
            labelMap: [
              {value: 1388534400000, label: "2014"},
              {value: 1391212800000, label: ""},
              {value: 1393632000000, label: "March"},
              {value: 1396310400000, label: ""},
              {value: 1398902400000, label: "May"},
              {value: 1401580800000, label: ""},
              {value: 1404172800000, label: "July"},
              {value: 1406851200000, label: ""},
              {value: 1409529600000, label: "September"},
              {value: 1412121600000, label: ""},
              {value: 1414800000000, label: "November"},
              {value: 1417392000000, label: ""},
              {value: 1420070400000, label: "2015"}
            ]
          }
        },
        title: {text: "Datum", fontSize: 11, offset: 27.578125, alongOffset: 0.5}
      },
      y: [
        {
          id: "y",
          scale: "y",
          underlay: true,
          line: {},
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            ticks: {length: 5, alongOffset: 0.5},
            labels: {fontSize: 10, offset: 6.5, alongOffset: 0.890625}
          },
          title: {text: "Vulniveau (%)", fontSize: 11, offset: 32.1064453125, alongOffset: 0.5, rotation: {value: -90, unit: "degrees"}}
        },
        {
          id: "flowAxis",
          scale: "flowY",
          position: "right",
          underlay: true,
          line: {},
          ticksAndLabels: {
            values: [-15000, -10000, -5000, 0, 5000, 10000, 15000],
            ticks: {length: 5, alongOffset: 0.5},
            labels: {
              fontSize: 10,
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
          title: {text: "Gastoevoer (GWh/week)", fontSize: 11, offset: 52.84765625, alongOffset: 0.5, rotation: {value: 90, unit: "degrees"}}
        }
      ]
    })
    .editXAxisTitle({color: "#000", fontWeight: 700})
    .editYAxisTitle({target: "y", color: "#000", fontWeight: 700})
    .editYAxisTitle({target: "flowAxis", color: "#000", fontWeight: 700})
    .editXAxisLabels({
      color: "#000"
    })
    .editXAxisLine({color: "#888"})
    .editXAxisTicks({color: "#888"})
    .editYAxisLabels({
      target: "y",
      color: "#000"
    })
    .editYAxisLine({target: "y", color: "#888"})
    .editYAxisTicks({target: "y", color: "#888"})
    .editYAxisLabels({
      target: "flowAxis",
      color: "#000"
    })
    .editYAxisLine({target: "flowAxis", color: "#888"})
    .editYAxisTicks({target: "flowAxis", color: "#888"})
    .createGrid({
      vertical: {color: "#ddd"},
      horizontal: {scale: "y", color: "#ddd"}
    })
    .createLegend({
      titleStyle: {fontSize: 11},
      labels: {fontSize: 10, color: "black"},
      symbol: {layers: [{type: "swatch", width: 10, height: 10, strokeWidth: 0, opacity: 0.6}]}
    })
    .editLegend({titleStyle: {color: "black", fontWeight: 700}})
    .createTitle({
      text: "Gasvoorraad in Nederland 2014",
      titleStyle: {fontSize: 13},
      offset: -7.046875
    })
    .editTitle({
      align: "center",
      titleStyle: {color: "black", fontWeight: 700}
    });
}