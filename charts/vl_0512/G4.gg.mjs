// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-00859dfc99a640de, doc-d9e3b1b7add0d2c6
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 368,
      height: 386,
      margin: { left: 38, top: 64, right: 30, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({ id: "hdi", as: "HDI_num", expression: { op: "toNumber", operand: { field: "HDI_2021" } } })
    .createComputedData({ id: "rank", as: "Rank_num", expression: { op: "toNumber", operand: { field: "FIFA_rank_2021" } } })
    .createComputedData({ id: "pop", as: "Pop_num", expression: { op: "toNumber", operand: { field: "Population_2021" } } })
    .createScatterPlot({
      x: { field: "HDI_num" },
      y: { field: "Rank_num" },
      guides: false
    })
    .editXScale({ domain: [0.3, 1], nice: false })
    .editYScale({ domain: [300, 2200], nice: false })
    .encodeSize({ field: "Pop_num" })
    .editSizeScale({ domain: [0, 1412360000], range: [7.853981633974483, 628.3185307179587] })
    
    .editPointMark({ fill: "green", opacity: 0.7, stroke: false })
    .createXAxis({
      ticksAndLabels: {
        values: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        ticks: {},
        labels: { offset: 7, fontSize: 10, format: ".1f" }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200],
        ticks: {},
        labels: { offset: 7, fontSize: 10, format: ",.0f" }
      },
      title: false
    })
    .createTitle({
      text: "Women's football performance vs economic development",
      titleStyle: { fontSize: 13 },
      alongOffset: -32.0244140625
    })
    .editTitle({
      offset: -13,
      gap: 1,
      titleStyle: { fontWeight: 700 }
    })
    .editTitle({
      subtitle: "Human Development Index (x), FIFA ranking points (y). 2021 data\nSize of points based on popluation",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    });
}