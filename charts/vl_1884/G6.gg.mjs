import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 783, height: 474, margin: { left: 72, top: 10, right: 111, bottom: 64 } })
    .editCanvas({ background: "#FcFdFd" })
    .createData({ values: data })
    .filterData({ id: "filterCountry", field: "country", oneOf: ["United Kingdom", "France", "Germany", "India"] })
    .filterData({ id: "filterIndicator", field: "indicator", oneOf: ["cases"] })
    .createComputedData({
      id: "typedY",
      as: "weeklyCount",
      expression: { op: "if", condition: { op: "eq", left: { field: "weekly_count" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "weekly_count" } } }
    })
    .createLinePlot({ x: { field: "year_week", fieldType: "ordinal" }, y: "weeklyCount", guides: false })
    .encodeGroup({ field: "country" })
    .encodeColor({ field: "country", fieldType: "nominal" })
    .editColorScale({ palette: "set1" }) // DOCS: doc-b11b4627b143730d
    .editYScale({ domain: [0, 1600000] })
    .createXAxis({
        line: {},
        ticksAndLabels: {
          values: ["2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", "2020-09", "2020-10", "2020-11", "2020-12", "2020-13", "2020-14", "2020-15", "2020-16", "2020-17", "2020-18", "2020-19", "2020-20", "2020-21", "2020-22", "2020-23", "2020-24", "2020-25", "2020-26", "2020-27", "2020-28", "2020-29", "2020-30", "2020-31", "2020-32", "2020-33", "2020-34", "2020-35", "2020-36", "2020-37", "2020-38", "2020-39", "2020-40", "2020-41", "2020-42", "2020-43", "2020-44", "2020-45", "2020-46", "2020-47", "2020-48", "2020-49", "2020-50", "2020-51", "2020-52", "2020-53", "2021-01", "2021-02", "2021-03", "2021-04", "2021-05", "2021-06", "2021-07", "2021-08", "2021-09", "2021-10", "2021-11", "2021-12", "2021-13", "2021-14", "2021-15"],
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            offset: 7,
            rotation: { value: -90, unit: "degrees" },
            labelMap: [
              { value: "2020-01", label: "2020-01" },
              { value: "2020-02", label: "" },
              { value: "2020-03", label: "2020-03" },
              { value: "2020-04", label: "" },
              { value: "2020-05", label: "2020-05" },
              { value: "2020-06", label: "" },
              { value: "2020-07", label: "2020-07" },
              { value: "2020-08", label: "" },
              { value: "2020-09", label: "2020-09" },
              { value: "2020-10", label: "" },
              { value: "2020-11", label: "2020-11" },
              { value: "2020-12", label: "" },
              { value: "2020-13", label: "2020-13" },
              { value: "2020-14", label: "" },
              { value: "2020-15", label: "2020-15" },
              { value: "2020-16", label: "" },
              { value: "2020-17", label: "2020-17" },
              { value: "2020-18", label: "" },
              { value: "2020-19", label: "2020-19" },
              { value: "2020-20", label: "" },
              { value: "2020-21", label: "2020-21" },
              { value: "2020-22", label: "" },
              { value: "2020-23", label: "2020-23" },
              { value: "2020-24", label: "" },
              { value: "2020-25", label: "2020-25" },
              { value: "2020-26", label: "" },
              { value: "2020-27", label: "2020-27" },
              { value: "2020-28", label: "" },
              { value: "2020-29", label: "2020-29" },
              { value: "2020-30", label: "" },
              { value: "2020-31", label: "2020-31" },
              { value: "2020-32", label: "" },
              { value: "2020-33", label: "2020-33" },
              { value: "2020-34", label: "" },
              { value: "2020-35", label: "2020-35" },
              { value: "2020-36", label: "" },
              { value: "2020-37", label: "2020-37" },
              { value: "2020-38", label: "" },
              { value: "2020-39", label: "2020-39" },
              { value: "2020-40", label: "" },
              { value: "2020-41", label: "2020-41" },
              { value: "2020-42", label: "" },
              { value: "2020-43", label: "2020-43" },
              { value: "2020-44", label: "" },
              { value: "2020-45", label: "2020-45" },
              { value: "2020-46", label: "" },
              { value: "2020-47", label: "2020-47" },
              { value: "2020-48", label: "" },
              { value: "2020-49", label: "2020-49" },
              { value: "2020-50", label: "" },
              { value: "2020-51", label: "2020-51" },
              { value: "2020-52", label: "" },
              { value: "2020-53", label: "2020-53" },
              { value: "2021-01", label: "" },
              { value: "2021-02", label: "2021-02" },
              { value: "2021-03", label: "" },
              { value: "2021-04", label: "2021-04" },
              { value: "2021-05", label: "" },
              { value: "2021-06", label: "2021-06" },
              { value: "2021-07", label: "" },
              { value: "2021-08", label: "2021-08" },
              { value: "2021-09", label: "" },
              { value: "2021-10", label: "2021-10" },
              { value: "2021-11", label: "" },
              { value: "2021-12", label: "2021-12" },
              { value: "2021-13", label: "" },
              { value: "2021-14", label: "2021-14" },
              { value: "2021-15", label: "" }
            ]
          }
        },
        title: { text: "Date", fontSize: 11 }
      })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
        line: {},
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Cases", fontSize: 11 }
      })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black", format: ",.0f" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })

    .createLegend({
      title: false,
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    }); // DOCS: doc-c2eafbbd16fe3c71
}

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71