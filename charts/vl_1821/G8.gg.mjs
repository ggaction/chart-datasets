import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-3558b809b504c100, doc-60b61133ba03bf60, doc-0408a7975bd52e06

const X_TICK_EPOCHS = [
  1333152000000, 1333497600000, 1333843200000, 1334188800000, 1334534400000,
  1334880000000, 1335225600000, 1335571200000, 1335916800000, 1336262400000,
  1336608000000, 1336953600000, 1337299200000, 1337644800000, 1337990400000,
  1338336000000, 1338681600000, 1339027200000, 1339372800000, 1339718400000,
  1340064000000, 1340409600000, 1340755200000, 1341273600000, 1342483200000,
  1343347200000
];

const X_LABEL_MAP = [
  { value: 1333152000000, label: "Mar 31" },
  { value: 1333497600000, label: "Apr 04" },
  { value: 1333843200000, label: "Apr 08" },
  { value: 1334188800000, label: "Apr 12" },
  { value: 1334534400000, label: "Apr 16" },
  { value: 1334880000000, label: "Apr 20" },
  { value: 1335225600000, label: "Apr 24" },
  { value: 1335571200000, label: "Apr 28" },
  { value: 1335916800000, label: "May 02" },
  { value: 1336262400000, label: "May 06" },
  { value: 1336608000000, label: "May 10" },
  { value: 1336953600000, label: "May 14" },
  { value: 1337299200000, label: "May 18" },
  { value: 1337644800000, label: "May 22" },
  { value: 1337990400000, label: "May 26" },
  { value: 1338336000000, label: "May 30" },
  { value: 1338681600000, label: "Jun 03" },
  { value: 1339027200000, label: "Jun 07" },
  { value: 1339372800000, label: "Jun 11" },
  { value: 1339718400000, label: "Jun 15" },
  { value: 1340064000000, label: "Jun 19" },
  { value: 1340409600000, label: "Jun 23" },
  { value: 1340755200000, label: "Jun 27" },
  { value: 1341273600000, label: "Jul 03" },
  { value: 1342483200000, label: "Jul 17" },
  { value: 1343347200000, label: "Jul 27" }
];
const Y_DOMAIN = [
  "80 ou mais", "70 a 79", "60 a 69", "50 a 59",
  "40 a 49", "30 a 39", "20 a 29", "00 a 19"
];

const THRESHOLD_DOMAIN = [1, 10, 30, 50, 70, 100];
const THRESHOLD_RANGE = [
  "#F0F0F0", "#FFBD00", "#FF5400", "#FF0054", "#9E0059", "#390099", "#000000"
];

const LEGEND_VALUES = [0, 1, 10, 30, 50, 70, 100];
const LEGEND_LABEL_MAP = [
  { value: 0, label: "" },
  { value: 1, label: "1" },
  { value: 10, label: "10" },
  { value: 30, label: "30" },
  { value: 50, label: "50" },
  { value: 70, label: "70" },
  { value: 100, label: "100" }
];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 537,
      margin: { left: 89, top: 5, right: 6, bottom: 372 }
    })
    .createData({ id: "source", values: data })
    .filterData({
      id: "mortos",
      field: "classificacao",
      oneOf: ["mortos"]
    })
    .createTimeUnitData({
      id: "data_day",
      field: "data",
      unit: "day"
    })
    .createComputedData({
      id: "date_2012",
      as: "date_2012",
      expression: {
        op: "subtract",
        left: { field: "data_day" },
        right: { constant: 252460800000 }
      }
    })
    .createComputedData({
      id: "total_num",
      as: "total_num",
      expression: { op: "toNumber", operand: { field: "total" } }
    })
    .createHeatmap({
      x: {
        field: "date_2012",
        fieldType: "ordinal"
      },
      y: {
        field: "faixa_etaria",
        fieldType: "nominal"
      },
      guides: false
    })
    .editXScale({ paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain: Y_DOMAIN, paddingInner: 0, paddingOuter: 0 })
    .encodeColor({
      field: "total_num",
      fieldType: "quantitative"
    })
    .editColorScale({ type: "threshold", domain: THRESHOLD_DOMAIN, range: THRESHOLD_RANGE })
    .createXAxis({
      ticksAndLabels: {
        values: X_TICK_EPOCHS,
        labels: {
          labelMap: X_LABEL_MAP,
          fontSize: 12,
          fontFamily: "sans-serif",
          offset: 7,
          rotation: { value: -45, unit: "degrees" }
        }
      },
      title: { text: "Data", fontSize: 14, offset: 53.10392761230469 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        labels: { fontSize: 12, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "Faixa Etária",
        fontSize: 14,
        rotation: { value: -90, unit: "degrees" },
        offset: 77.19921875
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createLegend({
      position: "bottom",
      titleStyle: { fontSize: 14, fontWeight: 700 },
      labels: { fontSize: 12, fontFamily: "sans-serif" }
    })
    .editLegend({ title: "Óbitos", columns: 1 })
    ;
}