// DOCS: doc-eb6e59db232dc6c0, doc-3558b809b504c100, doc-3b660fabf78cdd08
import { chart } from "ggaction";
import data from "./data.json";

const DAY0 = 1325376000000;
const DAYS = [
  1325376000000, 1325462400000, 1325548800000, 1325635200000, 1325721600000,
  1325808000000, 1325894400000, 1325980800000, 1326067200000, 1326153600000,
  1326240000000, 1326326400000, 1326412800000, 1326499200000, 1326585600000,
  1326672000000, 1326758400000, 1326844800000, 1326931200000, 1327017600000,
  1327104000000, 1327190400000, 1327276800000, 1327363200000, 1327449600000,
  1327536000000, 1327622400000, 1327708800000, 1327795200000, 1327881600000,
  1327968000000
];
const MONTHS = [1325376000000, 1328054400000, 1330560000000, 1333238400000, 1335830400000, 1338508800000, 1341100800000, 1343779200000, 1346457600000, 1349049600000, 1351728000000, 1354320000000];
const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function buildChart() {
  return chart()
    .createCanvas({ width: 741, height: 299, margin: { left: 46, top: 22, right: 75, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "tempMaxNum", as: "temp_max_num", expression: { op: "toNumber", operand: { field: "temp_max" } } })
    .createTimeUnitData({ id: "dateDay", field: "date", unit: "day" })
    .createTimeUnitData({ id: "dateMonth", field: "date", unit: "month" })
    .createTimeUnitData({ id: "dateYear", field: "date", unit: "year" })
    .createComputedData({
      id: "day2012", as: "day2012",
      expression: { op: "add", left: { constant: DAY0 }, right: { op: "subtract", left: { field: "date_day" }, right: { field: "date_month" } } }
    })
    .createComputedData({
      id: "month2012", as: "month2012",
      expression: {
        op: "add", left: { constant: DAY0 },
        right: {
          op: "add",
          left: { op: "subtract", left: { field: "date_month" }, right: { field: "date_year" } },
          right: {
            op: "if",
            condition: { op: "and", operands: [
              { op: "neq", left: { field: "date_year" }, right: { constant: DAY0 } },
              { op: "gte", left: { op: "subtract", left: { field: "date_month" }, right: { field: "date_year" } }, right: { constant: 5097600000 } }
            ] },
            then: { constant: 86400000 },
            else: { constant: 0 }
          }
        }
      }
    })
    .createSummaryData({ id: "cells", groupBy: ["day2012", "month2012"], aggregates: [{ op: "max", field: "temp_max_num", as: "max_temp_max" }] })
    .createHeatmap({
      x: { field: "day2012", fieldType: "ordinal" },
      y: { field: "month2012", fieldType: "ordinal" },
      guides: false
    })
    .encodeColor({ field: "max_temp_max", fieldType: "quantitative" })
    .editXScale({ domain: DAYS, paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain: MONTHS, paddingInner: 0, paddingOuter: 0 })
    .editRectMark({ stroke: false })
    .editColorScale({ domain: [5, 35.6], interpolate: "hcl", palette: "yellowgreenblue" })
    .createXAxis({
        line: false,
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 5, labelMap: [
          { value: 1325376000000, label: "1" }, { value: 1325462400000, label: "2" },
          { value: 1325548800000, label: "3" }, { value: 1325635200000, label: "4" },
          { value: 1325721600000, label: "5" }, { value: 1325808000000, label: "6" },
          { value: 1325894400000, label: "7" }, { value: 1325980800000, label: "8" },
          { value: 1326067200000, label: "9" }, { value: 1326153600000, label: "10" },
          { value: 1326240000000, label: "11" }, { value: 1326326400000, label: "12" },
          { value: 1326412800000, label: "13" }, { value: 1326499200000, label: "14" },
          { value: 1326585600000, label: "15" }, { value: 1326672000000, label: "16" },
          { value: 1326758400000, label: "17" }, { value: 1326844800000, label: "18" },
          { value: 1326931200000, label: "19" }, { value: 1327017600000, label: "20" },
          { value: 1327104000000, label: "21" }, { value: 1327190400000, label: "22" },
          { value: 1327276800000, label: "23" }, { value: 1327363200000, label: "24" },
          { value: 1327449600000, label: "25" }, { value: 1327536000000, label: "26" },
          { value: 1327622400000, label: "27" }, { value: 1327708800000, label: "28" },
          { value: 1327795200000, label: "29" }, { value: 1327881600000, label: "30" },
          { value: 1327968000000, label: "31" }
        ] }
        },
        title: { text: "Day", fontSize: 11, fontFamily: "sans-serif", offset: 27 }
    })
    .createYAxis({
        line: false,
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 6, labelMap: [
          { value: 1325376000000, label: "Jan" }, { value: 1328054400000, label: "Feb" },
          { value: 1330560000000, label: "Mar" }, { value: 1333238400000, label: "Apr" },
          { value: 1335830400000, label: "May" }, { value: 1338508800000, label: "Jun" },
          { value: 1341100800000, label: "Jul" }, { value: 1343779200000, label: "Aug" },
          { value: 1346457600000, label: "Sep" }, { value: 1349049600000, label: "Oct" },
          { value: 1351728000000, label: "Nov" }, { value: 1354320000000, label: "Dec" }
        ] }
        },
        title: { text: "Month", fontSize: 11, fontFamily: "sans-serif", offset: 34.8916015625 }
    })
    .editXAxis({ title: { fontWeight: 700 } })
    .editYAxis({ title: { fontWeight: 700 } })
    .createGuides({
      axes: false,
      grid: false,
      legend: { title: false, position: "right", labels: { fontSize: 10 }, gradient: { length: 200 } }
    })
    .createTitle({
      text: "2010 Daily Max Temperature in Seattle",
      offset: -10.953125,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .editTitle({ align: "center" });
}