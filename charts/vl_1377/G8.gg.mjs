// DOCS: doc-6c2c08869091f6a0 doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1524, height: 337, margin: { left: 44, top: 10, right: 60, bottom: 127 } })
    .createData({ values: data })
    .createComputedData({
      id: "numeric0",
      as: "purchase count numeric",
      expression: { op: "toNumber", operand: { field: "purchase count" } }
    })
    .createSummaryData({
      id: "summary",
      groupBy: ["page type", "gender"],
      aggregates: [{ op: "sum", field: "purchase count numeric", as: "sum_purchase count" }]
    })
    .createSortedData({ id: "stackOrder", sortBy: [{ field: "gender", order: "descending" }] })
    .createStackData({
      category: "page type",
      group: "gender",
      value: "sum_purchase count"
    })
    .createBarPlot({
      x: "page type",
      y: { lower: "sum_purchase count_start", upper: "sum_purchase count_end" },
      guides: false
    })
    .encodeColor({ field: "gender", layout: "overlay" })
    .editXScale({
      domain: ["", "account", "activities", "assignments", "bags", "blackcomb-gloves", "blog", "bottoms", "bras_tanks", "calendar", "cart", "catalog", "catalog-page-template", "category", "checkout", "community", "compose", "contact-luma", "content-page", "customer-service", "files", "fitness_equipment", "forgotpassword", "forgotuserid", "forum", "gear", "groups", "hero-page", "hiking", "home", "hoodies", "hoodies_sweatshirts", "ideas", "jackets", "luma", "members", "men", "mens", "messaging", "my-page", "notifications", "order", "order confirmation", "order-history", "pants", "preferences", "privacy-policy", "product", "product section", "product-page", "profile", "questions", "removable-thumb-slee", "running", "section-page-template", "sent", "shorts", "sign up", "signin", "signup", "social", "structure", "tanks", "tees", "thank-you", "tops", "trending", "watches", "woman", "women", "wrt-learning-ski-1"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 700], nice: false })
    .editColorScale({ domain: ["F", "M"], palette: "tableau10" })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ stroke: false })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "page type", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        values: [0, 100, 200, 300, 400, 500, 600, 700],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Sum of purchase count", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createHorizontalGrid({ values: [0, 100, 200, 300, 400, 500, 600, 700] })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({
      title: "gender",
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 }
    })
    .editLegendTitle({ target: "barPlot", fontWeight: 700, color: "black" })
    .editLegendLabels({ target: "barPlot", color: "black" })
    .editLegendSymbols({
      target: "barPlot",
      symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] }
    });
}