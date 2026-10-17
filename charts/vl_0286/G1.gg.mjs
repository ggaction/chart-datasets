// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 368, height: 371, margin: { left: 38, top: 64, right: 30, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "hdiData", as: "hdi", expression: { op: "toNumber", operand: { field: "HDI_2021" } } })
    .createComputedData({ id: "rankData", as: "rank", expression: { op: "toNumber", operand: { field: "FIFA_rank_2021" } } })
    .createComputedData({ id: "popData", as: "pop", expression: { op: "toNumber", operand: { field: "Population_2021" } } })
    .createScatterPlot({ x: { field: "hdi" }, y: { field: "rank" }, guides: false })
    .encodeSize({ field: "pop" })
    .editSizeScale({ type: "linear", domain: [0, 1412360000], range: [7.853981633974483, 628.3185307179587] })
    .editXScale({ domain: [0.3, 1], zero: false, nice: false })
    .editYScale({ domain: [300, 2200], zero: false, nice: false })
    .editPointMark({ target: "scatterPlot", fill: "green", opacity: 0.7 })
    .createAxes({
      x: { line: {}, ticksAndLabels: { count: 8, labels: { fontSize: 10, offset: 7 } }, title: false },
      y: { line: {}, ticksAndLabels: { count: 8, labels: { fontSize: 10, offset: 7, labelMap: [{ value: 300, label: "300" }, { value: 400, label: "400" }, { value: 500, label: "500" }, { value: 600, label: "600" }, { value: 700, label: "700" }, { value: 800, label: "800" }, { value: 900, label: "900" }, { value: 1000, label: "1,000" }, { value: 1100, label: "1,100" }, { value: 1200, label: "1,200" }, { value: 1300, label: "1,300" }, { value: 1400, label: "1,400" }, { value: 1500, label: "1,500" }, { value: 1600, label: "1,600" }, { value: 1700, label: "1,700" }, { value: 1800, label: "1,800" }, { value: 1900, label: "1,900" }, { value: 2000, label: "2,000" }, { value: 2100, label: "2,100" }, { value: 2200, label: "2,200" }] } }, title: false }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-heading-measurement",
        measurements: [
          {
            text: "Women's football performance vs economic development",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            width: 356.109375
          }
        ]
      }
    })
    .createTitle({
      text: "Women's football performance vs economic development",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -32.0244140625
    })
    .editTitle({
      offset: -13
    })
    .editTitle({
      subtitle: "Human Development Index (x), FIFA ranking points (y). 2021 data\nSize of points based on popluation",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      gap: 3
    });
}