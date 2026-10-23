// DOCS: doc-3aa1112632d25a50 (npm/knowledge/action-cards.json, cards/268, createRugPlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 300, height: 81 },
      margin: { left: 363, top: 29, right: 5, bottom: 50 },
      plotBorder: { underlay: true }
    })
    .createData({ values: data })
    .createComputedData({
      id: "numericRanks",
      as: "numericRank",
      expression: { op: "toNumber", operand: { field: "rank_average_score" } }
    })
    .createRugPlot({
      x: { field: "numericRank" },
      edge: "bottom",
      guides: false
    })
    .editXScale({ domain: [1, 317] })
    .editTickMark({ length: 6.074999999999999, opacity: 0.7 })
    .encodeY({
      field: "index_domain",
      fieldType: "nominal",
      scale: {
        id: "domains",
        type: "band",
        domain: [
          "Barriers to Housing and Services",
          "Crime",
          "Education, Skills and Training",
          "Employment",
          "Health and Disability",
          "Income",
          "Income Deprivation Affecting Children",
          "Income Deprivation Affecting Older People",
          "Index of Multiple Deprivation",
          "Living Environment"
        ],
        paddingInner: 0.25,
        paddingOuter: 0.125
      }
    })
    .highlightMarks({
      select: { field: "lad19nm", op: "eq", value: "Trafford" },
      color: "#fc6721",
      bringToFront: false
    })
    .createAxes({
      x: {
        underlay: true,
        ticksAndLabels: {
          values: [50, 100, 150, 200, 250, 300],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 14, offset: 5.5, alongOffset: 0.5 }
        },
        title: {
          text: "Rank of average score",
          fontSize: 14,
          fontWeight: 700,
          color: "black",
          offset: 38.78125,
          alongOffset: 0.5
        }
      },
      y: {
        underlay: true,
        ticksAndLabels: {
          values: [
            "Barriers to Housing and Services",
            "Crime",
            "Education, Skills and Training",
            "Employment",
            "Health and Disability",
            "Income",
            "Income Deprivation Affecting Children",
            "Income Deprivation Affecting Older People",
            "Index of Multiple Deprivation",
            "Living Environment"
          ],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: {
            fontSize: 14,
            offset: 6.5,
            alongOffset: 0.34375,
            overlap: "allow"
          }
        },
        title: {
          text: "index_domain",
          fontSize: 11,
          fontWeight: 700,
          color: "black",
          offset: 208.421875,
          alongOffset: 0.5,
          overlap: "allow"
        }
      }
    })
    .editXAxisLine({ color: "none" })
    .editXAxisTicks({ color: "#888" })
    .editXAxis({
      ticksAndLabels: {
        labels: { color: "black" }
      }
    })
    .editYAxisLine({ color: "none" })
    .editYAxisTicks({ color: "#888" })
    .editYAxis({
      ticksAndLabels: {
        labels: { color: "black" }
      }
    })
    .createTitle({
      text: "2019 Indices of Deprivation for Trafford and its CIPFA Nearest Neighbours",
      titleStyle: { fontSize: 20, fontWeight: "normal", color: "#757575" },
      offset: -9.315624237060547,
      align: "right"
    });
}