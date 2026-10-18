// DOCS: doc-2b2e3149e57e859d doc-8270cd43de503558 doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1687, height: 232, margin: { left: 113, top: 5, right: 154, bottom: 127 } })
    .createData({ values: data })
    .createComputedData({ id: "purchases", as: "purchase count number", expression: { op: "toNumber", operand: { field: "purchase count" } } })
    .createSummaryData({ id: "heatmap", groupBy: ["page type", "referrer channel"], aggregates: [{ field: "purchase count number", op: "sum", as: "purchase count" }] })
    .createScatterPlot({ x: { field: "page type", fieldType: "ordinal" }, y: { field: "referrer channel", fieldType: "ordinal" }, guides: false })
    .encodeColor({ field: "purchase count", fieldType: "quantitative" })
    .encodeSize({ field: "purchase count", fieldType: "quantitative" })
    .editColorScale({ domain: [0, 355], palette: "blues" })
    .editColorScale({ interpolate: "hcl", whitePoint: "d50" })
    .editSizeScale({ domain: [0, 355], range: [3.141592653589793, 283.5287369864788] })
    .editXScale({ domain: ["", "account", "activities", "assignments", "bags", "blackcomb-gloves", "blog", "bottoms", "bras_tanks", "calendar", "cart", "catalog", "catalog-page-template", "category", "checkout", "community", "compose", "contact-luma", "content-page", "customer-service", "files", "fitness_equipment", "forgotpassword", "forgotuserid", "forum", "gear", "groups", "hero-page", "hiking", "home", "hoodies", "hoodies_sweatshirts", "ideas", "jackets", "luma", "members", "men", "mens", "messaging", "my-page", "notifications", "order", "order confirmation", "order-history", "pants", "preferences", "privacy-policy", "product", "product section", "product-page", "profile", "questions", "removable-thumb-slee", "running", "section-page-template", "sent", "shorts", "sign up", "signin", "signup", "social", "structure", "tanks", "tees", "thank-you", "tops", "trending", "watches", "woman", "women", "wrt-learning-ski-1"], padding: 0.5 })
    .editYScale({ domain: ["external", "internal", "search_engine", "social", "typed_bookmarked"], padding: 0.5 })
    .createXAxis({
      ticksAndLabels: {
        values: ["", "account", "activities", "assignments", "bags", "blackcomb-gloves", "blog", "bottoms", "bras_tanks", "calendar", "cart", "catalog", "catalog-page-template", "category", "checkout", "community", "compose", "contact-luma", "content-page", "customer-service", "files", "fitness_equipment", "forgotpassword", "forgotuserid", "forum", "gear", "groups", "hero-page", "hiking", "home", "hoodies", "hoodies_sweatshirts", "ideas", "jackets", "luma", "members", "men", "mens", "messaging", "my-page", "notifications", "order", "order confirmation", "order-history", "pants", "preferences", "privacy-policy", "product", "product section", "product-page", "profile", "questions", "removable-thumb-slee", "running", "section-page-template", "sent", "shorts", "sign up", "signin", "signup", "social", "structure", "tanks", "tees", "thank-you", "tops", "trending", "watches", "woman", "women", "wrt-learning-ski-1"],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "page type", fontSize: 11, offset: 116.5068359375 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        values: ["external", "internal", "search_engine", "social", "typed_bookmarked"],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "referrer channel", fontSize: 11, offset: 102 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createLegend({
      combine: "color-size",
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 }
    })
    .editLegend({
      values: [0, 100, 200, 300]
    })
    .editLegendTitle({
      title: "Sum of purchase count",
      color: "black",
      fontWeight: 700
    })
    .editLegendLabels({
      color: "black"
    });
}