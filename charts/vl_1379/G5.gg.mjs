import {chart} from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({width: 349, height: 251, margin: {left: 48, top: 14, right: 101, bottom: 37}})
    .createData({id: "rows", values: data})
    .createTimeUnitData({id: "hourRows", field: "time", unit: "hour"})
    .createTimeUnitData({id: "dayRows", field: "time", unit: "day"}).createTimeUnitData({id: "weekdayRows", field: "time", unit: "weekday"})
    .createComputedData({id: "numRows", as: "countNum", expression: {op: "toNumber", operand: {field: "count"}}})
    .createComputedData({
      id: "timeRows",
      as: "hours_time",
      expression: {
        op: "add",
        left: {constant: 1325376000000},
        right: {op: "subtract", left: {field: "time_hour"}, right: {field: "time_day"}}
      }
    })
    .createComputedData({
      id: "dayCells",
      as: "day_time",
      expression: {
        op: "add",
        left: {constant: 1325376000000},
        right: {op: "multiply", left: {field: "time_weekday"}, right: {constant: 86400000}}
      }
    })
    .createSummaryData({
      id: "sums",
      groupBy: ["hours_time", "day_time"],
      aggregates: [{field: "countNum", op: "sum", as: "sum_count"}]
    })
    .createScatterPlot({
      x: {field: "hours_time", fieldType: "temporal", temporalUnit: "timestamp"},
      y: {field: "day_time", fieldType: "temporal", temporalUnit: "timestamp"},
      guides: false
    })
    .editXScale({domain: [1325376000000, 1325458800000], nice: false})
    .editYScale({domain: [1325376000000, 1325894400000], nice: false})
    .encodeSize({field: "sum_count", fieldType: "quantitative"})
    .editSizeScale({domain: [0, 56], range: [Math.PI, 361 * Math.PI / 4]})
    .editPointMark({fill: "#4c78a8", opacity: 1, stroke: false})
    .createGrid({
      horizontal: {values: [1325376000000, 1325419200000, 1325462400000, 1325505600000, 1325548800000, 1325592000000, 1325635200000, 1325678400000, 1325721600000, 1325764800000, 1325808000000, 1325851200000, 1325894400000]},
      vertical: {values: [1325376000000, 1325386800000, 1325397600000, 1325408400000, 1325419200000, 1325430000000, 1325440800000, 1325451600000]}
    })
    .editHorizontalGrid({color: "#ddd"})
    .editVerticalGrid({color: "#ddd"})
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1325376000000, 1325386800000, 1325397600000, 1325408400000, 1325419200000, 1325430000000, 1325440800000, 1325451600000],
        ticks: {length: 5},
        labels: {
          offset: 7,
          fontSize: 10,
          flush: true,
          labelMap: [
            {value: 1325376000000, label: "00:00"},
            {value: 1325386800000, label: ""},
            {value: 1325397600000, label: "06:00"},
            {value: 1325408400000, label: ""},
            {value: 1325419200000, label: "12:00"},
            {value: 1325430000000, label: ""},
            {value: 1325440800000, label: "18:00"},
            {value: 1325451600000, label: ""}
          ]
        }
      },
      title: {text: "time (hours)", fontSize: 11}
    })
    .editXAxis({line: {color: "#888"}, ticksAndLabels: {ticks: {color: "#888"}, labels: {color: "black"}}, title: {fontWeight: 700, color: "black"}})
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [1325376000000, 1325419200000, 1325462400000, 1325505600000, 1325548800000, 1325592000000, 1325635200000, 1325678400000, 1325721600000, 1325764800000, 1325808000000, 1325851200000, 1325894400000],
        ticks: {length: 5},
        labels: {
          offset: 7,
          fontSize: 10,
          labelMap: [
            {value: 1325376000000, label: "Sun"},
            {value: 1325419200000, label: "Sun"},
            {value: 1325462400000, label: "Mon"},
            {value: 1325505600000, label: "Mon"},
            {value: 1325548800000, label: "Tue"},
            {value: 1325592000000, label: "Tue"},
            {value: 1325635200000, label: "Wed"},
            {value: 1325678400000, label: "Wed"},
            {value: 1325721600000, label: "Thu"},
            {value: 1325764800000, label: "Thu"},
            {value: 1325808000000, label: "Fri"},
            {value: 1325851200000, label: "Fri"},
            {value: 1325894400000, label: "Sat"}
          ]
        }
      },
      title: {text: "time (day)", fontSize: 11}
    })
    .editYAxis({line: {color: "#888"}, ticksAndLabels: {ticks: {color: "#888"}, labels: {color: "black"}}, title: {fontWeight: 700, color: "black"}})
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["size"],
        position: "right",
        values: [0, 10, 20, 30, 40, 50],
        title: "Sum of count",
        titleStyle: {fontSize: 11, fontWeight: 700, color: "black"},
        labels: {fontSize: 10, color: "black"}
      }
    });
}