// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 406,
      height: 330,
      margin: { left: 24, top: 35, right: 82, bottom: 45 }
    })
    .createData({ values: data })
    .createSortedData({ id: "sorted-by-price-index", sortBy: [{ field: "Price Index", order: "descending" }] })
    .createStackData({ category: "Date", group: "Price Index", value: "Value", mode: "diverging" })
    .createBarPlot({
      x: {
        field: "Date",
        fieldType: "temporal",
        temporalUnit: "auto"
      },
      y: {
        lower: "Value_start",
        upper: "Value_end"
      },
      guides: false
    })
    .editXScale({ domain: [581345379310, 1677582620689], range: [24, 324], nice: false })
    .editYScale({ domain: [-2, 24] })
    .encodeColor({
      field: "Price Index",
      layout: "overlay",
      scale: { domain: ["CPI", "RPI"], palette: "paired" }
    })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ stroke: false })
    .createTitle({
      text: "Comparing two measures of inflation",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -9
    })
    .editTitle({ alongOffset: -18, gap: 1 })
    .editTitle({
      subtitle: "CPI and RPI % change over 12 months, 1989-2022",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 0 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 2,
            format: "%Y",
            rotation: { value: 45, unit: "degrees" }
          }
        },
        title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 35 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20],
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: false
      }
    })
    .createLegend({
      title: "Price Index",
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10, fontFamily: "sans-serif" }
    });
}