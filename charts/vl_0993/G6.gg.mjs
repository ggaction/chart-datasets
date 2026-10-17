// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 345, height: 327, margin: { left: 39, top: 40, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "taxNum", as: "taxNum", expression: { op: "toNumber", operand: { field: "2020" } } })
    .createSortedData({ id: "taxSorted", sortBy: [{ field: "taxNum", order: "descending" }] })
    .createHistogram({
      field: "taxNum",
      binStep: 0.5,
      guides: false
    })
    .editXScale({ domain: [1, 4] })
    .editYScale({ domain: [0, 10] })
    .editBarMark({ stroke: false, opacity: 1 })
    .encodeColor({ field: "2020", layout: "stack" })
    .editColorScale({
      type: "ordinal",
      domain: ["3.8", "3.3", "3.2", "3.1", "3", "2.8", "2.6", "2.5", "2.4", "2.3", "2.2", "2.1", "2", "1.9", "1.8", "1.7", "1.4", "1.2"],
      range: [
        "rgb(9, 110, 47)", "rgb(15, 120, 54)", "rgb(24, 129, 61)", "rgb(34, 139, 68)",
        "rgb(43, 148, 76)", "rgb(53, 157, 83)", "rgb(64, 166, 90)", "rgb(75, 174, 97)",
        "rgb(89, 182, 104)", "rgb(103, 189, 112)", "rgb(117, 196, 121)", "rgb(131, 203, 131)",
        "rgb(144, 209, 142)", "rgb(156, 215, 152)", "rgb(169, 220, 163)", "rgb(180, 225, 174)",
        "rgb(191, 230, 185)", "rgb(201, 234, 195)"
      ]
    })
    .createXAxis({
      ticksAndLabels: {
        values: [1, 1.5, 2, 2.5, 3, 3.5, 4],
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Environmental taxes (% of GDP)", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .editXAxisLabels({ format: ".1f" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Number of countries", fontSize: 11, offset: 24 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    .createTitle({
      text: "Environmental taxes",
      alongOffset: -33,
      titleStyle: { fontSize: 13, fontWeight: 700 }
    })
    .editTitle({ offset: -13 })
    .editTitle({
      subtitle: "Histogram showing distribution of environmental taxes, Source: ONS",
      gap: 3,
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    });
}