// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-a929fd81abd909f8
import { chart } from "ggaction";
import data from "./data.json";

const X_DOMAIN = [31536000000, 1593561600000]; // 1971-01-01 .. 2020-06-30 (UTC epoch ms)
const X_VALUES = [31536000000, 63072000000, 94694400000, 126230400000, 157766400000, 189302400000, 220924800000, 252460800000, 283996800000, 315532800000, 347155200000, 378691200000, 410227200000, 441763200000, 473385600000, 504921600000, 536457600000, 567993600000, 599616000000, 631152000000, 662688000000, 694224000000, 725846400000, 757382400000, 788918400000, 820454400000, 852076800000, 883612800000, 915148800000, 946684800000, 978307200000, 1009843200000, 1041379200000, 1072915200000, 1104537600000, 1136073600000, 1167609600000, 1199145600000, 1230768000000, 1262304000000, 1293840000000, 1325376000000, 1356998400000, 1388534400000, 1420070400000, 1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000];
const Y_VALUES = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1686,
      height: 360,
      margin: { left: 29, top: 40, right: 7, bottom: 20 }
    })
    .createData({ id: "uk", values: data })
  .filterData({ id: "validRows", field: "Date", predicate: { op: "neq", value: "" } })
    .createComputedData({
      id: "ValueNum",
      as: "ValueNum",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal", scale: { domain: X_DOMAIN, nice: false } },
      y: { field: "ValueNum", fieldType: "quantitative", scale: { domain: [0, 110], nice: false, zero: false } },
      guides: false
    })
    .editLineMark({ stroke: "blueviolet", strokeWidth: 2, curve: "monotone" })
    .createTitle({
      text: "UK productivity, 1971-2021",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ subtitle: "Labour productivity. Output per hour worked, 2018==100. Source: ONS", offset: -13, gap: 1 })
    .editTitle({ alongOffset: -23.7 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        values: X_VALUES,
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: Y_VALUES,
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
      },
      title: false
    });
}
