// DOCS: doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 345, height: 354, margin: { left: 88, top: 40, right: 7, bottom: 30 } })
    .createData({ values: data })
    .createComputedData({ id: "totalsNum", as: "Totals_num", expression: { op: "if", condition: { op: "eq", left: { field: "Totals" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "Totals" } } } })
    .createComputedData({ id: "baselineZero", as: "baseline", expression: { constant: 0 } })
    .createBarPlot({ x: "Date", y: { lower: "baseline", upper: "Totals_num" }, guides: false })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: ["", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 110000000000], nice: false })
    .editBarMark({ fill: "#2b1d70" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        values: ["1984", "1986", "1988", "1990", "1992", "1994", "1996", "1998", "2000", "2002", "2004", "2006", "2008", "2010", "2012", "2014", "2016", "2018", "2020", "2022"],
        labels: { offset: 2, fontSize: 10, rotation: { value: 90, unit: "degrees" }, labelMap: [{ value: "", label: "" }] }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10000000000, 20000000000, 30000000000, 40000000000, 50000000000, 60000000000, 70000000000, 80000000000, 90000000000, 100000000000, 110000000000],
        ticks: {},
        labels: { offset: 6.5, fontSize: 10 }
      },
      title: false
    })
    .editYAxisLabels({ format: ",.0f" })
    .createTitle({ text: "IMF Oustanding Credit Levels", alongOffset: -82, titleStyle: { fontSize: 13 } })
    .editTitle({ offset: -13, gap: 1, titleStyle: { fontWeight: 700 } })
    .editTitle({ subtitle: "IMF outstanding credit levels from 1984 to 2022", subtitleStyle: { fontSize: 10 } });
}
