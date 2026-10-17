// DOCS: doc-b11b4627b143730d; doc-76573a465e2b6a33; doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 489, height: 403, margin: { left: 33, top: 52, right: 6, bottom: 51 } })
    .createData({ values: data })
    .createFoldData({
      id: "folded",
      fields: ["totalReallocateJobsNet", "totalReallocateJobs", "totalReallocateRLPJobs"],
      as: { key: "metric", value: "value" }
    })
    .createComputedData({
      id: "clean",
      as: "metricClean",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "metric" }, right: { constant: "totalReallocateJobsNet" } },
        then: { constant: "Net employment growth" },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "metric" }, right: { constant: "totalReallocateJobs" } },
          then: { constant: "Jobs" },
          else: { constant: "Productivity weights" }
        }
      }
    })
    .filterData({ id: "defined", field: "value", noneOf: ["null"] })
    .createComputedData({
      id: "xnum",
      as: "yearNum",
      expression: { op: "toNumber", operand: { field: "year" } }
    })
    .createComputedData({
      id: "ynum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createComputedData({
      id: "sourceGroup",
      as: "sourceFoldOrder",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "metric" }, right: { constant: "totalReallocateJobsNet" } },
        then: { constant: 0 },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "metric" }, right: { constant: "totalReallocateJobs" } },
          then: { constant: 1 },
          else: { constant: 2 }
        }
      }
    })
    .createSortedData({
      id: "painterOrdered",
      source: "sourceGroup",
      sortBy: [
        { field: "sourceFoldOrder", order: "ascending", nulls: "last" },
        { field: "yearNum", order: "ascending", nulls: "last" }
      ]
    })
    .createLinePlot({
      x: { field: "yearNum" },
      y: { field: "valueNum" },
      guides: false
    })
    .encodeColor({ field: "metricClean", fieldType: "nominal" })
    .editColorScale({
      domain: ["Jobs", "Net employment growth", "Productivity weights"],
      range: ["rgb(87, 16, 109)", "rgb(187, 55, 85)", "rgb(250, 141, 11)"]
    })
    .editXScale({ domain: [1996, 2020] })
    .editYScale({ domain: [0, 0.35] })
    .editLineMark({ strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2020],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", flush: true }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: ".0%" }
        },
        title: false
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "bottom",
        direction: "horizontal",
        title: false,
        symbol: { length: 10, lineWidth: 1.5 },
        labels: { fontSize: 10, color: "black" }
      }
    })
    .createTitle({
      text: "Job reallocation, 1997-2020",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -12
    })
    .editTitle({
      gap: 3
    })
    .editTitle({
      subtitle: "Jobs created and destroyed - three measures\n",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      alongOffset: -27.0146484375
    });
}