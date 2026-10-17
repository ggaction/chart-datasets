// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71, doc-a929fd81abd909f8, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 456, height: 247, margin: { left: 44, top: 10, right: 212, bottom: 37 } })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "datum", fieldType: "temporal" },
      y: { field: "ertek", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1609459200000, 1638316800000] })
    .editYScale({ domain: [-40, 40] })
    .encodeColor({ field: "homerseklet", fieldType: "nominal" })
    .editColorScale({
      domain: [
        "Havi napsütéses órák száma",
        "Rekord max. hőmérséklet (°C)",
        "Rekord min. hőmérséklet (°C)",
        "Átl.\u00A0csapadékmennyiség\u00A0(mm)",
        "Átlagos max. hőmérséklet (°C)",
        "Átlagos min. hőmérséklet (°C)"
      ],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b"]
    })
    .encodeGroup({ field: "homerseklet" })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      ticksAndLabels: {
        values: [1609459200000, 1617235200000, 1625097600000, 1633046400000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true, labelMap: [
        { value: 1609459200000, label: "2021" },
        { value: 1617235200000, label: "April" },
        { value: 1625097600000, label: "July" },
        { value: 1633046400000, label: "October" }
      ] }
      },
      title: { text: "datum", fontSize: 11, offset: 31 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "ertek", fontSize: 11, offset: 35, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisTitle({ fontWeight: 700 })
    .createHorizontalGrid({ color: "#ddd" })
    .createVerticalGrid({ color: "#ddd" })
    .createLegend({
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11 }
    })
    .editLegendSymbols({
      symbol: { layers: [{ type: "line", lineWidth: 2 }] }
    })
    .editLegendLabels({
      fontFamily: "sans-serif"
    })
    .editLegendTitle({
      fontFamily: "sans-serif",
      fontWeight: 700
    });
}
