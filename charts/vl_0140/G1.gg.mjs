// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 752, height: 323, margin: { left: 47, top: 10, right: 5, bottom: 113 } })
    .createData({ values: data })
    .filterData({ id: "filtered", field: "Country", oneOf: ["Spain", "Portugal", "Germany"] })
    .createComputedData({
      id: "salaryNum",
      as: "SalaryNum",
      expression: { op: "toNumber", operand: { field: "Salary" } }
    })
    .createBarPlot({
      x: {
        field: "Club",
        fieldType: "nominal",
        scale: {
          domain: ["1. FC Köln", "Arsenal", "Athletic Bilbao", "Atlético Madrid", "Barcelona", "Bayer Leverkusen", "Bayern Munich", "Benfica", "Beşiktaş", "Borussia Dortmund", "Braga", "Celta Vigo", "Chelsea", "Dinamo Zagreb", "Fenerbahçe", "Galatasaray", "Juventus", "Lille", "Liverpool", "Lorient", "Lyon", "Manchester City", "Manchester United", "Monaco", "Porto", "Real Madrid", "Roma", "Schalke 04", "Sevilla", "Southampton", "Sporting CP", "Valencia", "VfL Wolfsburg", "Villarreal", "Wolfsburg"],
          paddingInner: 0.1,
          paddingOuter: 0.05
        }
      },
      y: { field: "SalaryNum", fieldType: "quantitative", aggregate: "median" },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, rotation: { value: -90, unit: "degrees" } }
        },
        title: { text: "Club", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 96 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10000000, 20000000, 30000000, 40000000],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            labelMap: [
              { value: 0, label: "0M" },
              { value: 10000000, label: "10M" },
              { value: 20000000, label: "20M" },
              { value: 30000000, label: "30M" },
              { value: 40000000, label: "40M" }
            ]
          }
        },
        title: { text: "Median of Salary", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 35.453125 }
      }
    })
    .editYScale({ domain: [0, 40000000], zero: false, nice: false })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 } });
}