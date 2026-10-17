import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-9f1e9ae3b82a4178, doc-5d974e8fdcb4f774, doc-efb03835af4d2e1b

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 351, margin: { left: 51, top: 11, right: 13, bottom: 140 } })
    .createData({ values: data })
    .createComputedData({
      id: "dateLowered",
      as: "date",
      expression: {
        op: "subtract",
        left: { op: "parseTime", operand: { field: "data" }, format: "auto" },
        right: { constant: 252460800000 }
      }
    })
    .createFoldData({ id: "folded", fields: ["utiOcupadas", "utiDisponiveis"], as: { key: "key", value: "value" } })
    .createComputedData({
      id: "seriesNamed",
      as: "series",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "key" }, right: { constant: "utiDisponiveis" } },
        then: { constant: "UTI Dispon\u00edvel" },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "key" }, right: { constant: "utiOcupadas" } },
          then: { constant: "UTI Ocupado" },
          else: { field: "key" }
        }
      }
    })
    .createComputedData({
      id: "valueNumeric",
      as: "valueN",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "value" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "value" } }
      }
    })
    .createAreaPlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueN" },
      guides: false
    })
    .editXScale({ target: "areaPlot", domain: [1332806400000, 1344124800000], nice: false })
    .editYScale({ target: "areaPlot", domain: [0, 140] })
    .encodeGroup({ field: "series" })
    .encodeColor({
      field: "series",
      layout: "stack"
    })
    .editColorScale({ target: "areaPlot", domain: ["UTI Dispon\u00edvel", "UTI Ocupado"], range: ["#1f77b4", "#e60000"] })
    .editAreaMark({ target: "areaPlot", opacity: 0.9 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000, 1336262400000, 1336867200000, 1337472000000, 1338076800000, 1338681600000, 1339286400000, 1339891200000, 1340496000000, 1341100800000, 1341705600000, 1342310400000, 1342915200000, 1343520000000, 1344124800000],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 12, offset: 7, rotation: { value: -45, unit: "degrees" }, format: "%b %d" }
      },
      title: { text: "Data", fontSize: 14, fontWeight: 700 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100, 120, 140],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 12, offset: 7 }
      },
      title: { text: "Total de UTIs", fontSize: 14, fontWeight: 700, offset: 40.5 }
    })
    .createHorizontalGrid({})
    .createVerticalGrid({})
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "bottom",
        columns: 1,
        direction: "horizontal",
        title: "Disponibilidade de UTI",
        titleStyle: { fontSize: 14, fontWeight: 700 },
        labels: { fontSize: 12 },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
      }
    })
    .editLegendBlock({ target: "areaPlot", channel: "color", symbol: { opacity: 0.9 } });
}