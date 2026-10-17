// DOCS: doc-fc11e9fb291905d1, doc-333a87e52954985d, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 661,
      height: 370,
      margin: { top: 40, right: 23, bottom: 30, left: 38 }
    })
    .createData({ id: "borrowing", values: data })
    .createComputedData({
      id: "borrowingNum",
      as: "value",
      expression: { op: "toNumber", operand: { field: "numbers" } }
    })
    .createBarPlot({
      x: { field: "Date", fieldType: "nominal" },
      y: { field: "value" },
      guides: false
    })
    .editXScale({ domain: ["1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 0.035], zero: true, nice: false })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#2b1d70" })
    .createTitle({
      text: "Borrowing levels in relation to global GDP",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -32
    })
    .editTitle({
      subtitle: "The outstadning credit levels of the IMF in relation to global GDP levels",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      offset: -13
    })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: { rotation: { value: 45, unit: "degrees" }, fontSize: 10, offset: 5 }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        count: 8,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxis({ line: { color: "#888" } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" } } });
}
