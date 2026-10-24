import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-76573a465e2b6a33 (createScatterPlot / createLinePlot), doc-a7e245c04b6a2ed2 (encodeStroke, encodePointRadius), doc-b0c26818dc646979 (complete single-channel axes)

export function buildChart() {
  return chart()
    .createCanvas({ width: 945, height: 287, margin: { left: 44, top: 29, right: 81, bottom: 58 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .createData({ values: data })
    .createComputedData({ id: "typedValue", as: "sourceValue", expression: { op: "toNumber", operand: { field: "media" } } })
    .createLinePlot({
      x: { field: "periodo_ingresso", fieldType: "nominal", scale: { type: "band", domain: ["2000.1", "2000.2", "2001.1", "2001.2", "2002.1", "2002.2", "2003.1", "2003.2", "2004.1", "2004.2", "2005.1", "2005.2", "2006.1", "2006.2", "2007.1", "2007.2", "2008.1", "2008.2", "2009.1", "2009.2", "2010.1", "2010.2", "2011.1", "2011.2", "2012.1", "2012.2", "2013.1", "2013.2", "2014.1", "2014.2", "2015.1", "2015.2", "2016.1", "2016.2", "2017.1", "2017.2", "2018.1", "2018.2", "2019.1", "2019.2", "2020.1"], paddingInner: 0, paddingOuter: 0 } },
      y: { field: "sourceValue", scale: { domain: [0, 800] } },
      guides: false
    })    .createXAxis({
      ticksAndLabels: {
        values: ["2000.1", "2000.2", "2001.1", "2001.2", "2002.1", "2002.2", "2003.1", "2003.2", "2004.1", "2004.2", "2005.1", "2005.2", "2006.1", "2006.2", "2007.1", "2007.2", "2008.1", "2008.2", "2009.1", "2009.2", "2010.1", "2010.2", "2011.1", "2011.2", "2012.1", "2012.2", "2013.1", "2013.2", "2014.1", "2014.2", "2015.1", "2015.2", "2016.1", "2016.2", "2017.1", "2017.2", "2018.1", "2018.2", "2019.1", "2019.2", "2020.1"],
        ticks: { length: 5, alongOffset: 0.5 },
        labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", rotation: { value: 270, unit: "degrees" }, align: "right", offset: 7.5, alongOffset: 0.390625 }
      },
      title: { text: "Período", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 48.1640625, alongOffset: 0.5 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800],
        ticks: { length: 5, alongOffset: 0.5 },
        labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: ",.0f", offset: 6.5, alongOffset: 0.890625 }
      },
      title: { text: "Nota média", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 32.1064453125, alongOffset: 0.5 }
    })
    .createGrid({
      horizontal: { color: "#ddd", values: [0, 200, 400, 600, 800] }
    })
    .editXAxisLine({
      color: "#888"
    })
    .editYAxisLine({
      color: "#888"
    })
    .editXAxisTicks({
      color: "#888"
    })
    .editYAxisTicks({
      color: "#888"
    })
    .editLineMark({ strokeWidth: 2 })
    .encodeColor({ field: "classe", scale: { domain: ["geral", "mulheres"], range: ["#fbb4ae", "#b3cde3"] } })
    .createPointMark({ id: "scatterPlot" })
    .encodeX({ field: "periodo_ingresso", fieldType: "nominal", scale: { type: "band", domain: ["2000.1", "2000.2", "2001.1", "2001.2", "2002.1", "2002.2", "2003.1", "2003.2", "2004.1", "2004.2", "2005.1", "2005.2", "2006.1", "2006.2", "2007.1", "2007.2", "2008.1", "2008.2", "2009.1", "2009.2", "2010.1", "2010.2", "2011.1", "2011.2", "2012.1", "2012.2", "2013.1", "2013.2", "2014.1", "2014.2", "2015.1", "2015.2", "2016.1", "2016.2", "2017.1", "2017.2", "2018.1", "2018.2", "2019.1", "2019.2", "2020.1"], paddingInner: 0, paddingOuter: 0 } })
    .encodeY({ field: "sourceValue", scale: { domain: [0, 800] } })
    .encodePointRadius({ value: 2.7386127875258306 })
    .encodeStroke({ field: "classe", scale: { domain: ["geral", "mulheres"], range: ["#fbb4ae", "#b3cde3"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .createSummaryData({ id: "sourcePeriods", groupBy: ["periodo_ingresso"], aggregates: [{ op: "count", as: "sourceRowCount" }] })
    .createRuleMark({ data: "sourcePeriods", strokeWidth: 1, opacity: 0.3 })
    .encodeX({ field: "periodo_ingresso", fieldType: "nominal", scale: { type: "band", domain: ["2000.1", "2000.2", "2001.1", "2001.2", "2002.1", "2002.2", "2003.1", "2003.2", "2004.1", "2004.2", "2005.1", "2005.2", "2006.1", "2006.2", "2007.1", "2007.2", "2008.1", "2008.2", "2009.1", "2009.2", "2010.1", "2010.2", "2011.1", "2011.2", "2012.1", "2012.2", "2013.1", "2013.2", "2014.1", "2014.2", "2015.1", "2015.2", "2016.1", "2016.2", "2017.1", "2017.2", "2018.1", "2018.2", "2019.1", "2019.2", "2020.1"], paddingInner: 0, paddingOuter: 0 } })
    .editRuleMark({ stroke: "black" })
    .createLegend({ target: "scatterPlot", channels: ["stroke"], title: "Média" })
    .editLegend({
      labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" },
      titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" },
      symbol: { layers: [{ type: "point", size: 5, strokeWidth: 1.5, opacity: 0.7, fill: "transparent" }] }
    })
    .createTitle({
      text: "Distribuição da média de ingresso das mulheres e a média geral",
      titleStyle: { fontFamily: "sans-serif", fontSize: 15, fontWeight: 700, color: "black" },
      offset: -10.484375
    })
    .editTitle({ align: "center" });
}