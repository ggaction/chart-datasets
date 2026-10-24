import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-8ffad8d37b5ae4ff; doc-ef5a28c0c3f3c920; doc-2ba6dfbdbb611825; doc-5dd6a0220e7285df; doc-7a5eff3c73a7e7f9; doc-1bbab86ff6ba2cb2
export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 482,
      margin: { left: 44, top: 40, right: 5, bottom: 142 }
    })
    .editCanvas({
      plotBorder: { color: "#ddd", lineWidth: 1, underlay: true }
    })
    .createData({ values: data })
    .filterData({
      id: "selected2021",
      field: "date",
      oneOf: ["2021"]
    }).createBarMark({id: "barPlot"})
    .encodeX({
      field: "commodity",
      fieldType: "ordinal",
      scale: {
        id: "x",
        domain: ["Agriculture", "Base Metals (ex. iron ore)", "Beverages", "Energy", "Fertilizers", "Food", "Grains", "Metals  and Minerals", "Non-energy", "OTHERRAWMAT", "Oils & Meals", "Other Food", "Precious Metals", "Raw Materials", "Timber"],
        paddingInner: 0.1,
        paddingOuter: 0.05
      }
    })
    .encodeY({
      field: "commodity_price_indices",
      aggregate: "mean",
      scale: { id: "y", domain: [0, 200] }
    }).createXAxis({coordinate: "main", ticksAndLabels: {values: ["Agriculture", "Base Metals (ex. iron ore)", "Beverages", "Energy", "Fertilizers", "Food", "Grains", "Metals  and Minerals", "Non-energy", "OTHERRAWMAT", "Oils & Meals", "Other Food", "Precious Metals", "Raw Materials", "Timber"], ticks: {length: 5, alongOffset: 0}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", rotation: -1.5707963267948966, align: "right", offset: 7.5, alongOffset: 0.390625}}, title: {text: "commodity type", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 132.0654296875, alongOffset: 0.5}}).createYAxis({coordinate: "main", ticksAndLabels: {values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200], ticks: {length: 5, alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".0f", labelMap: [{value: 0, label: "0.0"}, {value: 20, label: "20"}, {value: 40, label: "40"}, {value: 60, label: "60"}, {value: 80, label: "80"}, {value: 100, label: "100"}, {value: 120, label: "120"}, {value: 140, label: "140"}, {value: 160, label: "160"}, {value: 180, label: "180"}, {value: 200, label: "200"}], offset: 6.5, alongOffset: 0.890625}}, title: {text: "index", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 32.1064453125, alongOffset: 0.5}}).editXAxisLine({color: "#888"}).editYAxisLine({color: "#888"}).editXAxisTicks({color: "#888"}).editYAxisTicks({color: "#888"})
    .createGrid({
      horizontal: {
        values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200],
        color: "#ddd",
        alongOffset: 0.5
      }
    })
    .editBarMark({ fill: "rgb(69,180,194)", stroke: "none" })
    .encodeBarWidth({ band: 1 })
    .createTitle({
      text: "Commodity Markets Outlook",
      titleStyle: {
        fontFamily: "sans-serif",
        fontSize: 13,
        fontWeight: 700,
        color: "black"
      },
      offset: -10.953125
    })
    .editTitle({
      subtitle: "commodity price index, a weighted average of selected commodity prices based on spot or futures prices",
      subtitleStyle: {
        fontFamily: "sans-serif",
        fontSize: 10,
        fontWeight: 400,
        fontStyle: "italic",
        color: "black"
      },
      gap: 3.34375
    })
    .editTitle({ align: "left", alongOffset: -38.6845703125 });
}