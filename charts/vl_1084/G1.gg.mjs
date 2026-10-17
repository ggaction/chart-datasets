// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-5f9c35fbf79658cc
import {chart} from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({width: 358, height: 371, margin: {left: 47, top: 39, right: 11, bottom: 32}})
    .createData({values: data})
    .createComputedData({id: "yearTs", as: "yearTs", expression: {op: "parseTime", operand: {field: "Year"}}})
    .filterData({id: "validYears", field: "yearTs", noneOf: [null]})
    .createComputedData({id: "pct", as: "pct", expression: {op: "toNumber", operand: {field: "Percentage "}}})
    .createBarPlot({x: {field: "yearTs", fieldType: "temporal", temporalUnit: "timestamp"}, y: "pct", guides: false})
    .encodeBarWidth({pixels: 5})
    .editBarMark({fill: "#423abb", stroke: false})
    .editXScale({domain: [421630510344, 1629591889655], nice: false})
    .editYScale({domain: [0, 0.35], nice: false})
    .createXAxis({
      line: {color: "#888", lineWidth: 1},
      ticksAndLabels: {
        values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: {length: 0},
        labels: {
          offset: 7, fontSize: 10, color: "black",
          rotation: {value: 45, unit: "degrees"},
          labelMap: [
            {value: 473385600000, label: "1985"},
            {value: 631152000000, label: "1990"},
            {value: 788918400000, label: "1995"},
            {value: 946684800000, label: "2000"},
            {value: 1104537600000, label: "2005"},
            {value: 1262304000000, label: "2010"},
            {value: 1420070400000, label: "2015"},
            {value: 1577836800000, label: "2020"}
          ]
        }
      },
      title: false
    })
    .createYAxis({
      line: {color: "#888", lineWidth: 1},
      ticksAndLabels: {
        count: 8,
        ticks: {length: 5, color: "#888"},
        labels: {offset: 7, fontSize: 10, color: "black", format: ".2f"}
      },
      title: {text: "Pecentage of Global GDP (in US$)", fontSize: 11, fontWeight: 700, color: "black", rotation: {value: -90, unit: "degrees"}}
    })
    .createTitle({
      text: "IMF lending Outstanding as a Percentage of Global GDP ",
      titleStyle: {fontSize: 13, fontWeight: 700, color: "black"},
      alongOffset: -41.462890625
    })
    .editTitle({
      subtitleStyle: {fontSize: 9, fontStyle: "italic", color: "black"},
      offset: -13,
      gap: 1
    })
    .editTitle({
      subtitle: "Credit outstanding to all members (percentage of GDP), source:IMF and World Bank"
    });
}