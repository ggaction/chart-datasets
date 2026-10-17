// DOCS: doc-b11b4627b143730d, doc-c2eafbbd16fe3c71, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

const YEARS = ["1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 384,
      height: 367,
      margin: { top: 27, right: 5, bottom: 50, left: 39 }
    })
    .createData({ id: "wageData", values: data })
    .createComputedData({
      id: "wageNumData",
      as: "wageNum",
      expression: { op: "toNumber", operand: { field: "wage" } }
    })
    .createLinePlot({
      x: {
        field: "year",
        fieldType: "nominal"
      },
      y: {
        field: "wageNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ type: "point", domain: YEARS })
    .editYScale({ domain: [84, 90] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createXAxis({
        line: {},
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            offset: 7,
            rotation: -Math.PI / 2
          }
        },
        title: { text: "Year", fontSize: 11, offset: 42 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "sans-serif", color: "#000" })
    .createYAxis({
        line: {},
        ticksAndLabels: {
          values: [84, 85, 86, 87, 88, 89, 90],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Percentage of workers who are waged or salaried", fontSize: 11, offset: 28 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "sans-serif", color: "#000" })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" })
    .createTitle({
      text: "What percentage of workers are waged or salaried?",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700, color: "#000" } });
}
