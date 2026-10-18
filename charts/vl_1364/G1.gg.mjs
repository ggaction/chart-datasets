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
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: ["", "account", "activities", "assignments", "bags", "blackcomb-gloves", "blog", "bottoms", "bras_tanks", "calendar", "cart", "catalog", "catalog-page-template", "category", "checkout", "community", "compose", "contact-luma", "content-page", "customer-service", "files", "fitness_equipment", "forgotpassword", "forgotuserid", "forum", "gear", "groups", "hero-page", "hiking", "home", "hoodies", "hoodies_sweatshirts", "ideas", "jackets", "luma", "members", "men", "mens", "messaging", "my-page", "notifications", "order", "order confirmation", "order-history", "pants", "preferences", "privacy-policy", "product", "product section", "product-page", "profile", "questions", "removable-thumb-slee", "running", "section-page-template", "sent", "shorts", "sign up", "signin", "signup", "social", "structure", "tanks", "tees", "thank-you", "tops", "trending", "watches", "woman", "women", "wrt-learning-ski-1"],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", rotation: { value: -90, unit: "degrees" } }
        },
        title: { text: "page type", fontSize: 11, fontWeight: 700, color: "black", offset: 116.5068359375 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: ["external", "internal", "search_engine", "social", "typed_bookmarked"],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black" }
        },
        title: { text: "referrer channel", fontSize: 11, fontWeight: 700, color: "black", offset: 102 }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        combine: "color-size",
        values: [0, 100, 200, 300],
        title: "Sum of purchase count",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" }
      }
    });
}