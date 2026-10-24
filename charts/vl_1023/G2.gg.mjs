import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    // DOCS: doc-ef5a28c0c3f3c920
    .createCanvas({ width: 506, height: 130, margin: { left: 98, right: 8, top: 40, bottom: 40 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1023-original-svg-first-flush", measurements: [{ text: "Jan 2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 41.15625 }] } })
    .createData({ values: data })
    .createComputedData({ id: "dated", as: "date2", expression: { op: "parseTime", operand: { field: "date" }, format: "%d/%m/%Y" } })
    .createTimeUnitData({ id: "monthly", field: "date2", unit: "month" })
    .createComputedData({ id: "numeric", as: "sourceValue", expression: { op: "toNumber", operand: { field: "price" } } }).createLinePlot({x: {field: "date2_month", fieldType: "temporal", scale: {domain: [1514764800000, 1669852800000]}}, y: {field: "sourceValue", scale: {domain: [0, 200]}}, guides: false}).createGuides({axes: {x: {offset: 3, line: {color: "#888"}, ticksAndLabels: {values: [1514764800000, 1522540800000, 1530403200000, 1538352000000, 1546300800000, 1554076800000, 1561939200000, 1569888000000, 1577836800000, 1585699200000, 1593561600000, 1601510400000, 1609459200000, 1617235200000, 1625097600000, 1633046400000, 1640995200000, 1648771200000, 1656633600000, 1664582400000], ticks: {length: 5, color: "#888", alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%b %Y", labelMap: [{value: 1522540800000, label: ""}, {value: 1530403200000, label: ""}, {value: 1538352000000, label: ""}, {value: 1554076800000, label: ""}, {value: 1561939200000, label: ""}, {value: 1569888000000, label: ""}, {value: 1585699200000, label: ""}, {value: 1593561600000, label: ""}, {value: 1601510400000, label: ""}, {value: 1617235200000, label: ""}, {value: 1625097600000, label: ""}, {value: 1633046400000, label: ""}, {value: 1648771200000, label: ""}, {value: 1656633600000, label: ""}, {value: 1664582400000, label: ""}], offset: 5.5, alongOffset: 0.5, flush: true, flushThreshold: 1, overlap: "allow"}}, title: {text: "Time", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5}}, y: {offset: 3, line: {color: "#888"}, ticksAndLabels: {values: [0, 100, 200], ticks: {length: 5, color: "#888", alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: "ticks", offset: 6.5, alongOffset: 0.890625}}, title: {text: "HV", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 32.1064453125, alongOffset: 0.5}}}, grid: false, legend: false})
    // DOCS: doc-a7e245c04b6a2ed2
    .encodeGroup({ field: "symbol" })
    .encodeStroke({ field: "symbol", scale: { domain: ["BTC", "EUR", "GBP", "JPY"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2"] } })
    .facet({ field: "symbol", data: "data", values: ["BTC", "EUR", "GBP", "JPY"] })
    .editFacetHeaders({ fontSize: 10, fontWeight: 400, color: "black" })
    .editFacetHeaders({ role: "column", side: "left", offset: 51.29394470214844 })
    .editFacetHeaders({ rotation: { value: -90, unit: "degrees" } })
    .editFacetHeaders({ role: "column", title: { text: "Symbol", fontSize: 11, fontWeight: 700, offset: 81.421875 } })
    .editFacetGuides({ axes: { x: "outer", y: "each" }, legend: false })
    .editCompositionLayout({ columns: 1, gap: 24, spacing: "plot" })
    // DOCS: doc-d8d22d3671e96045
    .editCompositionLayout({ topLane: "shared" })
    .createTitle({ text: "Historical Volatilty of Bitcoin and FIAT currencies", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, alongOffset: -93 })
    .editTitle({ offset: -2.953125 })
    .editTitle({ subtitle: "Historical Volatility 30-day annualised, Source:Yahoo Finance. Calculations by author", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375 });
}