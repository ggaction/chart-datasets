// DOCS: doc-8ffad8d37b5ae4ff, doc-e6a651827faf3599, doc-e59305e450ad74de
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 548,
      height: 656,
      margin: { top: 39, right: 158, bottom: 37, left: 130 }
    })
    .editCanvas({ background: "floralwhite" })
    .createData({ values: data })
    .createComputedData({
      id: "pointsNum",
      as: "PointsNum",
      expression: { op: "toNumber", operand: { field: "Points" } }
    })
    .createBarPlot({
      guides: false,
      x: { field: "PointsNum", fieldType: "quantitative" },
      y: { field: "Country", fieldType: "nominal" },
    })
    .editXScale({ domain: [0, 260], zero: true })
    .editYScale({ domain: ["Algeria","Angola","Argentina","Australia","Austria","Belgium","Bolivia","Bosnia and Herzegovina","Brazil","Bulgaria","Cameroon","Canada","Chile","China","Colombia","Costa Rica","Croatia","Czech Republic","C�te d'Ivoire","Denmark","Ecuador","Egypt","France","Germany","Ghana","Greece","Honduras","Hungary","Iceland","Islamic Republic of Iran","Israel","Italy","Jamaica","Japan","Korea","Mexico","Morocco","Netherlands","New Zealand","Nigeria","Norway","Panama","Paraguay","Peru","Poland","Portugal","Qatar","Romania","Russia","Saudi Arabia","Senegal","Serbia","Slovenia","South Africa","Spain","Sweden","Switzerland","Togo","Trinidad and Tobago","Tunisia","Turkey","Ukraine","United Arab Emirates","United States","Uruguay"], paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeColor({ field: "Continent", layout: "overlay" })
    .editColorScale({ domain: ["Africa", "Asia", "Europe", "North and Central America", "South America"], range: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00"] })
    .editBarMark({ stroke: false }).encodeBarWidth({ pixels: 5.5 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Points", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 9.4, offset: 7, overlap: "allow" }
      },
      title: { text: "Country", fontSize: 11, fontWeight: 700, offset: 118.8, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: false, vertical: { color: "#C2C3C0" } })
    .createLegend({ title: "Continent:", titleStyle: { fontSize: 11, fontWeight: 700 }, labels: { fontSize: 10 } })
    .createTitle({
      text: "Total number of points in World Cup final history",
      align: "center",
      titleStyle: { fontSize: 12, fontWeight: 700 }
    })
    .editTitle({ gap: 2, offset: -7 })
    .editTitle({ subtitle: "Source: Wikipedia", subtitleStyle: { fontSize: 11, fontStyle: "italic" } });
}