// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 947, height: 376, margin: { left: 93, top: 24, right: 142, bottom: 124 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createSummaryData({ id: "summary", groupBy: ["nome_cor", "periodo_ingresso"], aggregates: [{ op: "count", as: "count_nome_cor" }] })
    .createScatterPlot({
      guides: false,
      x: {
        field: "periodo_ingresso",
        fieldType: "nominal",
        scale: {
          type: "point",
          padding: 0.5,
          domain: ["2000.1", "2000.2", "2001.1", "2001.2", "2002.1", "2002.2", "2003.1", "2003.2", "2004.1", "2004.2", "2005.1", "2005.2", "2006.1", "2006.2", "2007.1", "2007.2", "2008.1", "2008.2", "2009.1", "2009.2", "2010.1", "2010.2", "2011.1", "2011.2", "2012.1", "2012.2", "2013.1", "2013.2", "2014.1", "2014.2", "2015.1", "2015.2", "2016.1", "2016.2", "2017.1", "2017.2", "2018.1", "2018.2", "2019.1", "2019.2", "2020.1"]
        }
      },
      y: {
        field: "nome_cor",
        fieldType: "nominal",
        scale: {
          type: "point",
          padding: 0.5,
          domain: ["Amarela", "Branca", "Não declarada", "Parda", "Preta"]
        }
      }
    })
    .encodeSize({ field: "count_nome_cor", fieldType: "quantitative" })
    .editSizeScale({ domain: [0, 15], range: [Math.PI, Math.PI * 125] })
    .encodeColor({ field: "nome_cor", fieldType: "nominal" })
    .editColorScale({
      domain: ["Amarela", "Branca", "Não declarada", "Parda", "Preta"],
      range: ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c"]
    })
    .editPointMark({ opacity: 0.8, stroke: "black", strokeWidth: 1 })

    .createAxes({
      x: {
        position: "bottom",
        line: { color: "#888" },
        ticksAndLabels: {
          values: ["2000.1", "2000.2", "2001.1", "2001.2", "2002.1", "2002.2", "2003.1", "2003.2", "2004.1", "2004.2", "2005.1", "2005.2", "2006.1", "2006.2", "2007.1", "2007.2", "2008.1", "2008.2", "2009.1", "2009.2", "2010.1", "2010.2", "2011.1", "2011.2", "2012.1", "2012.2", "2013.1", "2013.2", "2014.1", "2014.2", "2015.1", "2015.2", "2016.1", "2016.2", "2017.1", "2017.2", "2018.1", "2018.2", "2019.1", "2019.2", "2020.1"],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", rotation: { value: -90, unit: "degrees" } }
        },
        title: { text: "Período", fontSize: 11, fontWeight: 700, color: "black", offset: 48.1640625 }
      },
      y: {
        position: "left",
        line: { color: "#888" },
        ticksAndLabels: {
          values: ["Amarela", "Branca", "Não declarada", "Parda", "Preta"],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black" }
        },
        title: { text: "Tipos de raças", fontSize: 11, fontWeight: 700, color: "black", offset: 80.4658203125, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "right",
        title: "nome_cor",
        channels: ["color"],
        labels: { fontSize: 10, color: "black" },
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        symbol: {
          layers: [{ type: "point", size: 5, stroke: "black", strokeWidth: 1.5 }]
        }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "right",
        title: "Quantidade",
        channels: ["size"],
        values: [0, 2, 4, 6, 8, 10, 12, 14],
        labels: { fontSize: 10, color: "black" },
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.8 } })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "size",
      symbol: { fill: "rgba(0,0,0,.8)", stroke: "black", strokeWidth: 1.5, opacity: 0.8 }
    })
    .createTitle({
      text: "Distribuição da raça das mulheres",
      titleStyle: { fontSize: 15, fontWeight: 700, color: "black" },
      offset: -10.484375
    })
    .editTitle({ align: "center" });
}