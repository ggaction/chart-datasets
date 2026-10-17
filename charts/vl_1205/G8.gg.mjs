// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-dfae58344d5a524e, doc-2ba6dfbdbb611825
import { chart } from "ggaction";
import data from "./data.json";

const X_TICKS = [
  946684800000, 1072915200000, 1199145600000,
  1325376000000, 1451606400000, 1577836800000
];
const Y_TICKS = [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 470,
      height: 247,
      margin: { left: 58, top: 10, right: 112, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "amountNumber",
      as: "amountNumber",
      expression: { op: "toNumber", operand: { field: "Amount (2020 USD million)" } }
    })
    .createBarPlot({
      x: {
        field: "Year",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "amountNumber",
        aggregate: "sum"
      },
      guides: false
    })
    .editXScale({ domain: [946684800000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 14000] })
    .encodeColor({
      field: "Category",
      layout: "stack",
    })
    .editColorScale({
      target: "barPlot",
      domain: ["Non-renewables", "Renewables"],
      range: ["grey", "#90ee90"]
    })
    .encodeBarWidth({ interval: { unit: "year", insetStart: 1, insetEnd: 0 } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: X_TICKS,
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          flush: true
        }
      },
      title: {
        text: "Year (year)",
        fontSize: 11,
        fontFamily: "sans-serif",
        offset: 26.5
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: "%Y" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7
        }
      },
      title: {
        text: "Sum of Amount (2020 USD million)",
        fontSize: 11,
        fontFamily: "sans-serif",
        offset: 47.0859375,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black", format: ",.0f" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({
      horizontal: { values: Y_TICKS },
      vertical: { values: X_TICKS }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "right",
        direction: "vertical",
        title: "Category",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] }
      }
    });
}