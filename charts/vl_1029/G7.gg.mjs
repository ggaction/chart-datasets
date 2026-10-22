// DOCS: doc-6e0c9f9fa58779e5 — createGuides wraps createAxes/createGrid/createLegend; omitted branches infer applicability, false skips a branch.
// DOCS: doc-8a4f6f06e0d37d5e — createLinePlot({ id, x: { field, fieldType }, y: { field } }) establishes a stored line plot; editLineMark refines stroke afterwards.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 651,
      height: 594,
      margin: { left: 64, right: 37, top: 44, bottom: 50 }
    })
    .editCanvas({ background: "#FeFeF8" })
    .createData({ values: data })
    .createLineMark({ id: "linePlot" })
    .encodeX({ field: "Year", fieldType: "ordinal" })
    .encodeY({ field: "First-time buyers", scale: { domain: [0, 500000] } })
    .editLineMark({ stroke: "green", opacity: 0.5 })
    .createLinePlot({
      id: "shareLine",
      x: { field: "Year", fieldType: "ordinal", scale: { id: "x" } },
      y: {
        field: "FTB Share of all mortgage house purchases",
        scale: { id: "share", domain: [0, 100] }
      },
      guides: false
    })
    .editLineMark({ stroke: "blue" })
    .createAxes({
      x: {
        underlay: true,
        ticksAndLabels: {
          ticks: { length: 5, alongOffset: 0.5 },
          labels: {
            fontSize: 10,
            rotation: { value: -90, unit: "degrees" },
            align: "right",
            offset: 7.5,
            alongOffset: 0.890625
          }
        },
        title: {
          text: "Year",
          fontSize: 11,
          fontWeight: "bold",
          color: "#000",
          offset: 42.74609375,
          alongOffset: 0.5,
          baseline: "alphabetic"
        }
      },
      y: false
    })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "#000" })
    .editXAxisLine({ color: "#888" })
    .createAxes({
      x: false,
      y: [
        {
          id: "y",
          scale: "y",
          underlay: true,
          ticksAndLabels: {
            values: [0, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000],
            ticks: { length: 5, alongOffset: 0.5 },
            labels: {
              fontSize: 10,
              format: ",.0f",
              offset: 6.5,
              alongOffset: 0.890625
            }
          },
          title: {
            text: "First-time buyers",
            fontSize: 11,
            fontWeight: "bold",
            color: "green",
            offset: 48.6474609375,
            alongOffset: 0.5,
            baseline: "alphabetic"
          }
        }
      ]
    })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "#000" })
    .editYAxisLine({ color: "#888" })
    .createAxes({
      x: false,
      y: [
        {
          id: "share",
          scale: "share",
          position: "right",
          underlay: true,
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            ticks: { length: 5, alongOffset: 0.5 },
            labels: {
              fontSize: 10,
              rotation: { value: -90, unit: "degrees" },
              align: "center",
              offset: 7.890625,
              alongOffset: 0.5
            }
          },
          title: {
            text: "Percentage of total Buyers",
            fontSize: 11,
            fontWeight: "bold",
            color: "blue",
            offset: 23.5,
            alongOffset: 0.5,
            baseline: "alphabetic"
          }
        }
      ]
    })
    .editYAxisTicks({ target: "share", color: "#888" })
    .editYAxisLabels({ target: "share", color: "#000" })
    .editYAxisLine({ target: "share", color: "#888" })
    .createGrid({
      horizontal: {
        scale: "y",
        values: [0, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000],
        color: "#ddd",
        alongOffset: 0.5
      },
      vertical: false
    })
    .createTitle({
      text: "Number First-Time Buyers",
      titleStyle: { fontSize: 13, fontWeight: "bold", color: "black" },
      offset: -10.29541015625
    })
    .editTitle({
      subtitle: "Source: Money.co.uk",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      gap: 3.34375
    })
    .editTitle({ align: "center" });
}