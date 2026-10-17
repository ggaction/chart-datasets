// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-cf8d34fbc7d6684b
import { chart } from "ggaction";
import data from "./data.json";

const years = ["1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 347,
      margin: { left: 41, top: 52, right: 5, bottom: 35 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "debtNum",
      as: "DebtGDP",
      expression: { op: "toNumber", operand: { field: "Debt-GDP" } }
    })
    .createBarPlot({
      x: {
        field: "Year",
        fieldType: "nominal",
      },
      y: {
        field: "DebtGDP",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: years, paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 0.35] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#000f71" })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: ["1984", "1990", "1995", "2000", "2005", "2010", "2015", "2020"],
            ticks: { color: "grey", lineWidth: 1.3, length: 5 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              rotation: { value: 45, unit: "degrees" }
            }
          },
          title: false
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
            ticks: {},
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              format: ".1%"
            }
          },
          title: false
        }
      },
      grid: false
    })
    .createTitle({
      text: "IMF lending outstanding",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({
      subtitle: "Credit outstanding to all members as % of World GDP (current prices)\nSource: IMF & World Bank",
      gap: 1,
      offset: -14
    })
    .editTitle({ alongOffset: -35.35 });
}