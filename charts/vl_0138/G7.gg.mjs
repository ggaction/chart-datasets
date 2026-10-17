// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d, doc-e7f2fa9f88cd79b5
import { chart } from "ggaction";
import data from "./data.json";

const Y_TICKS = [0, 20000000, 40000000, 60000000, 80000000];
const Y_LABELS = [
  { value: 0, label: "0M" },
  { value: 20000000, label: "20M" },
  { value: 40000000, label: "40M" },
  { value: 60000000, label: "60M" },
  { value: 80000000, label: "80M" }
];
const X_DOMAIN = [
  "Antoine Griezmann", "Arkadiusz Milik", "Balázs Dzsudzsák", "Claudiu Keșerü",
  "Daniel Sturridge", "Daryl Murphy", "Denis Alibec", "Emre Mor",
  "Gareth Bale", "George Williams", "Hal Robson-Kanu", "Haris Seferović",
  "Jóhann Berg Guðmundsson", "Lukas Podolski", "Marc Janko", "Mario Gómez",
  "Olivier Giroud", "Romelu Lukaku", "Shkëlzen Gashi", "Simone Zaza"
];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 452,
      height: 362,
      margin: { top: 10, right: 5, bottom: 152, left: 47 }
    })
    .createData({ values: data })
    .filterData({ id: "leftFoot", field: "Foot", oneOf: ["Left"] })
    .filterData({ id: "forwards", field: "Position", oneOf: ["Forward"] })
    .createComputedData({
      id: "forwardsNum",
      as: "SalaryNum",
      expression: { op: "toNumber", operand: { field: "Salary" } }
    })
    .createSortedData({
      id: "forwardsSorted",
      source: "forwardsNum",
      sortBy: [{ field: "Name", order: "ascending" }]
    })
    .createBarPlot({
      x: "Name",
      y: { field: "SalaryNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: X_DOMAIN, paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80000000] })
    .editBarMark({ fill: "#4c78a8" })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 3,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: { text: "Name", fontSize: 11, fontFamily: "sans-serif", offset: 140 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          labelMap: Y_LABELS
        }
      },
      title: { text: "Salary", fontSize: 11, fontFamily: "sans-serif", offset: 38 }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" });
}
