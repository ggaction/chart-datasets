// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-b257fb08998617a5, doc-33fa1aba30cffb4f
import { chart } from "ggaction";
import data from "./data.json";

const yDomain = ["Afghanistan","Albania","Algeria","Argentina","Armenia","Australia","Austria","Benin","Bolivia (Plurinational State of)","Bosnia and Herzegovina","Brazil","Bulgaria","Burkina Faso","Cambodia","Cameroon","Canada","Chile","China","Colombia","Costa Rica","Croatia","Cyprus","Czechia","Denmark","Dominican Republic","Ecuador","Egypt","El Salvador","Estonia","Finland","France","Gabon","Georgia","Germany","Ghana","Greece","Guinea","Honduras","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kyrgyzstan","Latvia","Lebanon","Lithuania","Malawi","Mali","Malta","Mauritius","Mexico","Mongolia","Morocco","Mozambique","Myanmar","Namibia","Nepal","Netherlands","New Zealand","Nicaragua","Nigeria","Norway","Pakistan","Panama","Paraguay","Peru","Philippines","Poland","Portugal","Romania","Russian Federation","Saudi Arabia","Senegal","Serbia","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","Spain","Sri Lanka","Sweden","Switzerland","Tajikistan","Thailand","Togo","Tunisia","Uganda","Ukraine","United Arab Emirates","United Kingdom of Great Britain and Northern Ireland","United States of America","Uruguay","Uzbekistan","Venezuela (Bolivarian Republic of)","Zambia","Zimbabwe"];
const xTicks = [0,10,20,30,40,50,60,70];

export function buildChart() {
  return chart()
    .createCanvas({ width: 523, height: 1284, margin: { left: 204, top: 47, right: 99, bottom: 37 } })
    .createData({ id: "religion", values: data })
    .createComputedData({ id: "scores", as: "CAF_2021_score", expression: { op: "toNumber", operand: { field: "CAF_2021" } } })
    .createBarPlot({
      x: "CAF_2021_score",
      y: "\uFEFFCountry",
      guides: false
    })
    .encodeX({ field: "CAF_2021_score", fieldType: "quantitative", scale: { domain: [0, 70] } })
    .encodeY({ field: "\uFEFFCountry", fieldType: "nominal", scale: { domain: yDomain, paddingInner: 0.1, paddingOuter: 0.05 } })
    .encodeColor({ field: "2021", layout: "overlay" })
    .editColorScale({ type: "ordinal", domain: ["Buddhism", "Christianity", "Hinduism", "Islam", "Judaism", "Shintoism"], range: ["rgb(64, 116, 245)", "rgb(37, 205, 207)", "rgb(90, 252, 119)", "rgb(197, 236, 60)", "rgb(255, 162, 35)", "rgb(223, 65, 17)"] })
    .encodeBarWidth({ pixels: 6 })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: xTicks, ticks: {}, labels: { offset: 7, fontSize: 10 } },
      title: { text: "WGI Overall Score", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 8, offset: 6 } },
      title: { text: "Country", fontSize: 11, offset: 186 }
    })
    .createGrid({ horizontal: false, vertical: { scale: "x", values: xTicks } })
    .editVerticalGrid({ color: "#EEE" })
    .createLegend({
      title: "Main Religion:",
      titleStyle: { fontSize: 11 },
      position: "right"
    })
    .editLegendLabels({ fontSize: 10 })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .editLegendTitle({ fontWeight: 700 })
    .createTitle({
      text: "World Giving Index Scores 2021 by each country's main religion",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      alongOffset: -199
    })
    .editTitle({
      subtitle: "Sources: CAF and Everycountryintheworld.com",
      subtitleStyle: { fontStyle: "italic", fontSize: 10 },
      offset: -13
    });
}