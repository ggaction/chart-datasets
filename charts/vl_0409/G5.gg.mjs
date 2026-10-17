import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({width: 489, height: 403, margin: {left: 33, top: 52, right: 6, bottom: 51}})
    .createData({values: data})
    .createFoldData({id: "folded", fields: ["entryReallocateJobs", "growReallocateJobs", "exitReallocateJobs", "shrinkReallocateJobs"], as: {key: "metric", value: "value"}})
    .createComputedData({id: "named", as: "metricClean", expression: {op: "if", condition: {op: "eq", left: {field: "metric"}, right: {constant: "entryReallocateJobs"}}, then: {constant: "Entry"}, else: {op: "if", condition: {op: "eq", left: {field: "metric"}, right: {constant: "growReallocateJobs"}}, then: {constant: "Hires"}, else: {op: "if", condition: {op: "eq", left: {field: "metric"}, right: {constant: "exitReallocateJobs"}}, then: {constant: "Exit"}, else: {constant: "Fires"}}}}})
    .createComputedData({id: "years", as: "yearNum", expression: {op: "toNumber", operand: {field: "year"}}})
    .createComputedData({id: "numeric", as: "valueNum", expression: {op: "toNumber", operand: {field: "value"}}})
    .createSortedData({id: "ordered", source: "numeric", sortBy: [{field: "metricClean", order: "descending"}]})
    .createStackData({category: "yearNum", group: "metricClean", value: "valueNum"})
    .createBarPlot({x: {field: "yearNum", fieldType: "quantitative"}, y: {lower: "valueNum_start", upper: "valueNum_end"}, guides: false})
    .encodeBarWidth({pixels: 15})
    .encodeColor({field: "metricClean", layout: "overlay"})
    .editColorScale({domain: ["Entry", "Exit", "Fires", "Hires"], range: ["rgb(66, 10, 104)", "rgb(147, 38, 103)", "rgb(221, 81, 58)", "rgb(252, 165, 10)"]})
    .editBarMark({stroke: false})
    .editXScale({domain: [1996, 2020]})
    .editYScale({domain: [0, 0.3]})
    .createXAxis({ticksAndLabels: {values: [1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2020], ticks: {length: 5}, labels: {fontSize: 10, offset: 7, flush: true}}, title: false})
    .createYAxis({ticksAndLabels: {values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3], ticks: {length: 5}, labels: {fontSize: 10, offset: 7}}, title: false})
    .editXAxisTicksAndLabels({ticks: {color: "#888"}, labels: {color: "black", format: ".0f"}})
    .editYAxisTicksAndLabels({ticks: {color: "#888"}, labels: {color: "black", format: ".0%"}})
    .createLegend({position: "bottom", title: false, labels: {fontSize: 10}})
    .editLegendSymbols({symbol: {width: 10, height: 10}})
    .editLegendLabels({color: "black"})
    .createTitle({text: "Job reallocation, 1997-2020", titleStyle: {fontSize: 13, fontWeight: 700, color: "black"}, alongOffset: -27.0146484375})
    .editTitle({offset: -12, gap: 3})
    .editTitle({subtitle: "Jobs created and destroyed, as a proportion of all jobs\n", subtitleStyle: {fontSize: 10, fontStyle: "italic", color: "black"}});
}

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1