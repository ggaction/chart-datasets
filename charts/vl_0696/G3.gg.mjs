import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-f6433435f78f9356, doc-fb01dc309afec904, doc-9a0f2eeed4bc9b31

export function buildChart() {
  return chart()
    .createCanvas({ width: 224, height: 238, margin: { left: 14, top: 19, right: 10, bottom: 19 } })
    .editCanvas({ background: "#fffcf9" })
    .createData({ values: data })
    .filterData({ id: "hands", field: "winner_hand", oneOf: ["Left-handed", "Right-handed"] })
    .createComputedData({ id: "handsHand", as: "Hand", expression: { field: "winner_hand" } })
    .createComputedData({ id: "handsPercentage", as: "Percentage", expression: { field: "percent" } })
    .createComputedData({ id: "handsPercentageNumber", as: "percentageNumber", expression: { op: "toNumber", operand: { field: "percent" } } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-four-pie-labels", measurements: [{ text: "Left-handed", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 64.0625 }, { text: "Right-handed", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 72.0625 }, { text: "18.79%", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 40.703125 }, { text: "81.16%", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 40.703125 }] } })
    .createPiePlot({ category: "Hand", value: "percentageNumber", guides: false })
    .encodeColor({ field: "Hand", fieldType: "nominal" })
    .editColorScale({ domain: ["Left-handed", "Right-handed"], range: ["#3cb5a3", "#74aacc"] })
    .editArcMark({ stroke: false })
    .createMarkLabels({ id: "handLabelsLeft", select: { field: "winner_hand", op: "eq", value: "Left-handed" } })
    .encodeText({ target: "handLabelsLeft", field: "winner_hand" })
    .editTextMark({ fontSize: 12, align: "center", baseline: "middle" })
    .editTextMark({ inheritColor: "fill", dy: 0.859375 })
    .editMarkLabelPlacement({ target: "handLabelsLeft", placement: { anchor: "outsideEnd", gap: 7.1818758201224, overflow: "allow" } })
    .createMarkLabels({ id: "handLabelsRight", select: { field: "winner_hand", op: "eq", value: "Right-handed" } })
    .encodeText({ target: "handLabelsRight", field: "winner_hand" })
    .editTextMark({ fontSize: 12, align: "center", baseline: "middle" })
    .editTextMark({ inheritColor: "fill", dy: 0.859375 })
    .editMarkLabelPlacement({ target: "handLabelsRight", placement: { anchor: "outsideEnd", gap: 4.954783693550581, overflow: "allow" } })
    .createMarkLabels({ id: "percent" })
    .encodeText({ target: "percent", field: "percentageNumber", format: ".2%" })
    .editTextMark({ fontSize: 12, align: "center", baseline: "middle" })
    .editTextMark({ fill: "white", dy: 0.859375 })
    .editMarkLabelPlacement({ target: "percent", placement: { anchor: "insideEnd", gap: 23.684810838139725, overflow: "allow" } });
}