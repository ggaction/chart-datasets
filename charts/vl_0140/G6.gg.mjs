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
        fieldType: "nominal"
      },
      y: { field: "SalaryNum", fieldType: "quantitative", aggregate: "median" },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({
      domain: ["1. FC Köln", "Arsenal", "Athletic Bilbao", "Atlético Madrid", "Barcelona", "Bayer Leverkusen", "Bayern Munich", "Benfica", "Beşiktaş", "Borussia Dortmund", "Braga", "Celta Vigo", "Chelsea", "Dinamo Zagreb", "Fenerbahçe", "Galatasaray", "Juventus", "Lille", "Liverpool", "Lorient", "Lyon", "Manchester City", "Manchester United", "Monaco", "Porto", "Real Madrid", "Roma", "Schalke 04", "Sevilla", "Southampton", "Sporting CP", "Valencia", "VfL Wolfsburg", "Villarreal", "Wolfsburg"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "Club", fontSize: 11, fontFamily: "sans-serif", offset: 96 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10000000, 20000000, 30000000, 40000000],
        ticks: { length: 5 },
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
      title: { text: "Median of Salary", fontSize: 11, fontFamily: "sans-serif", offset: 35.453125 }
    })
    .editYScale({ domain: [0, 40000000], zero: false, nice: false })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" } })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" } })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 });
}