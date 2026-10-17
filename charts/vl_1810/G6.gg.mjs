// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-9c80ce16ad99ccc5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 351, margin: { left: 51, top: 11, right: 6, bottom: 140 } })
    .createData({ values: data })
    .createComputedData({
      id: "dated",
      as: "dateNum",
      expression: {
        op: "subtract",
        left: { op: "parseTime", operand: { field: "data" } },
        right: { constant: 252460800000 }
      }
    })
    .createFoldData({ id: "folded", fields: ["uti_ocupado", "uti_disponivel"], as: { key: "key", value: "value" } })
    .createComputedData({
      id: "foldedNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createComputedData({
      id: "foldedSeries",
      as: "series",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "key" }, right: { constant: "uti_disponivel" } },
        then: { constant: "UTI Disponível" },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "key" }, right: { constant: "uti_ocupado" } },
          then: { constant: "UTI Ocupado" },
          else: { field: "key" }
        }
      }
    })
    .createStackData({
      category: "dateNum",
      group: "series",
      value: "valueNum"
    })
    .createAreaPlot({
      x: {
        field: "dateNum",
        fieldType: "temporal",
        temporalUnit: "timestamp"
      },
      y: { lower: "valueNum_start", upper: "valueNum_end" },
      guides: false
    })
    .editXScale({ domain: [1335744000000, 1344124800000], nice: false })
    .editYScale({ domain: [0, 400] })
    .encodeGroup({ field: "series" })
    .encodeColor({ field: "series" })
    .editColorScale({
      target: "areaPlot",
      domain: ["UTI Disponível", "UTI Ocupado"],
      range: ["#1f77b4", "#e60000"]
    })
    .editAreaMark({ opacity: 0.9 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          1335830400000, 1336003200000, 1336176000000, 1336348800000, 1336521600000,
          1336694400000, 1336867200000, 1337040000000, 1337212800000, 1337385600000,
          1337558400000, 1337731200000, 1337904000000, 1338076800000, 1338249600000,
          1338422400000, 1338508800000, 1338681600000, 1338854400000, 1339027200000,
          1339200000000, 1339372800000, 1339545600000, 1339718400000, 1339891200000,
          1340064000000, 1340236800000, 1340409600000, 1340582400000, 1340755200000,
          1340928000000, 1341100800000, 1341273600000, 1341446400000, 1341619200000,
          1341792000000, 1341964800000, 1342137600000, 1342310400000, 1342483200000,
          1342656000000, 1342828800000, 1343001600000, 1343174400000, 1343347200000,
          1343520000000, 1343692800000, 1343779200000, 1343952000000, 1344124800000
        ],
        ticks: { length: 5 },
        labels: {
          fontSize: 12,
          fontFamily: "sans-serif",
          offset: 7,
          rotation: { value: -45, unit: "degrees" },
          format: "%b %d",
          labelMap: [
            { value: 1336003200000, label: "" },
            { value: 1336348800000, label: "" },
            { value: 1336694400000, label: "" },
            { value: 1337040000000, label: "" },
            { value: 1337385600000, label: "" },
            { value: 1337731200000, label: "" },
            { value: 1338076800000, label: "" },
            { value: 1338422400000, label: "" },
            { value: 1338681600000, label: "" },
            { value: 1339027200000, label: "" },
            { value: 1339372800000, label: "" },
            { value: 1339718400000, label: "" },
            { value: 1340064000000, label: "" },
            { value: 1340409600000, label: "" },
            { value: 1340755200000, label: "" },
            { value: 1341100800000, label: "" },
            { value: 1341446400000, label: "" },
            { value: 1341792000000, label: "" },
            { value: 1342137600000, label: "" },
            { value: 1342483200000, label: "" },
            { value: 1342828800000, label: "" },
            { value: 1343174400000, label: "" },
            { value: 1343520000000, label: "" },
            { value: 1343779200000, label: "" },
            { value: 1344124800000, label: "" }
          ]
        }
      },
      title: { text: "Data", fontSize: 14, fontFamily: "sans-serif" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400],
        ticks: { length: 5 },
        labels: { fontSize: 12, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Total de UTIs", fontSize: 14, fontFamily: "sans-serif", offset: 40.5 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticks: { color: "#888" },
      title: { fontWeight: 700 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticks: { color: "#888" },
      title: { fontWeight: 700 }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "bottom",
        columns: 1,
        title: "Disponibilidade de UTI",
        titleStyle: { fontSize: 14, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 12, fontFamily: "sans-serif" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
      }
    })
    .editLegendBlock({ target: "areaPlot", channel: "color", symbol: { opacity: 0.9 } });
}