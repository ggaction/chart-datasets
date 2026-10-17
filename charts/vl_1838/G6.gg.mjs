// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 949, height: 282, margin: { left: 44, top: 24, right: 85, bottom: 58 } })
    .createTitle({ text: "Quantidade de ingressantes no curso", titleStyle: { fontSize: 15 }, offset: -12 })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700, color: "black" } })
    .createData({ values: data })
    .createComputedData({ id: "numeric", as: "proofValue", expression: { op: "toNumber", operand: { field: "contagem" } } })
    .createSummaryData({ id: "summary", groupBy: ["periodo_ingresso", "sexo", "contagem"], aggregates: [{ op: "sum", field: "proofValue", as: "proofSum" }] })
    .createSortedData({ id: "ordered", sortBy: [{ field: "periodo_ingresso", order: "ascending" }, { field: "proofSum", order: "ascending" }] })
    .createWindowData({ id: "cumulative", partitionBy: ["periodo_ingresso"], operations: [{ op: "cumulativeSum", field: "proofSum", as: "proofValue_end" }] })
    .createComputedData({ id: "lower", as: "proofValue_start", expression: { op: "subtract", left: { field: "proofValue_end" }, right: { field: "proofSum" } } })
    .createBarPlot({ x: "periodo_ingresso", y: { lower: "proofValue_start", upper: "proofValue_end" }, guides: false })
    .encodeColor({ field: "sexo", layout: "overlay" })
    .editColorScale({ domain: ["Masculino", "Feminino"], palette: "set2" })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ stroke: "none" })
    .editXScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 130] })
    .createXAxis({
      ticksAndLabels: {
        values: ["2000.1", "2000.2", "2001.1", "2001.2", "2002.1", "2002.2", "2003.1", "2003.2", "2004.1", "2004.2", "2005.1", "2005.2", "2006.1", "2006.2", "2007.1", "2007.2", "2008.1", "2008.2", "2009.1", "2009.2", "2010.1", "2010.2", "2011.1", "2011.2", "2012.1", "2012.2", "2013.1", "2013.2", "2014.1", "2014.2", "2015.1", "2015.2", "2016.1", "2016.2", "2017.1", "2017.2", "2018.1", "2018.2", "2019.1", "2019.2", "2020.1"],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "Periodo de ingresso", fontSize: 11 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { fontWeight: 700, color: "black" }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100, 120],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Quantidade de alunos", fontSize: 11 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { fontWeight: 700, color: "black" }
    })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "right",
        title: "Sexo",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] },
        labels: { fontSize: 10, color: "black" }
      }
    });
}