import { chart } from "ggaction";
import terms from "./data.json";
import people from "./data-lookup-0.json";

// Source-qualified authoring follows createLookupData (doc-ba31c0f4386b037c): copy fields without changing primary row order or count.
export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 200, height: 1340 },
      margin: { left: 155, top: 5, right: 83, bottom: 37 },
      plotBorder: {},
    })
    .createData({ values: people })
    .createData({ id: "terms", values: terms })
    .createLookupData({
      id: "joined",
      field: "bioguide",
      lookup: { data: "data", key: "bioguide_id", fields: ["gender_bio", "birthday_bio"] },
    })
    .createComputedData({
      id: "calendar",
      as: "decade",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "birthday_bio" }, right: { constant: "" } },
        then: { constant: null },
        else: {
          op: "datePart",
          part: "year",
          operand: { op: "parseTime", format: "%Y-%m-%d", operand: { field: "birthday_bio" } },
        },
      },
    })
    .createComputedData({
      id: "sourceTime",
      as: "sourceDecadeYear",
      expression: {
        op: "if",
        condition: { op: "isNull", operand: { field: "decade" } },
        then: { constant: null },
        else: { constant: 0 },
      },
    })
    .createScatterPlot({
      x: { field: "sourceDecadeYear", fieldType: "temporal", scale: { unknown: 155 } },
      y: {
        field: "party",
        fieldType: "nominal",
        scale: {
          domain: ["", "AL", "Adams", "Adams Democrat", "American", "American Labor", "Anti Jackson", "Anti Jacksonian", "Anti Mason", "Anti Masonic", "Anti-Administration", "Anti-Jacksonian", "Anti-Lecompton Democrat", "Anti-administration", "Coalitionist", "Conservative", "Conservative Republican", "Constitutional Unionist", "Crawford Republican", "Democrat", "Democrat-Liberal", "Democratic Republican", "Democratic and Union Labor", "Farmer-Labor", "Federalist", "Free Silver", "Free Soil", "Ind. Democrat", "Ind. Republican", "Ind. Republican-Democrat", "Ind. Whig", "Independent", "Independent Democrat", "Jackson", "Jackson Republican", "Jacksonian", "Jacksonian Republican", "Law and Order", "Liberal", "Liberal Republican", "Liberty", "National Greenbacker", "New Progressive", "Nonpartisan", "Nullifier", "Popular Democrat", "Populist", "Pro-Administration", "Pro-administration", "Progressive", "Progressive Republican", "Prohibitionist", "Readjuster", "Readjuster Democrat", "Republican", "Republican-Conservative", "Silver", "Silver Republican", "Socialist", "States Rights", "Unconditional Unionist", "Union", "Union Democrat", "Union Labor", "Unionist", "Unknown", "Whig"],
        },
      },
      guides: false,
    })
    .encodeStroke({ field: "gender_bio", scale: { domain: ["F", "M"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .encodePointRadius({ value: 2.739 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", offset: 5.5, alongOffset: 0.5, flush: true, format: "%Y" },
        },
        title: { text: "decade (year)", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 },
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625, labelMap: [{ value: "", label: "" }] },
        },
        title: { text: "party", fontSize: 11, fontWeight: 700, color: "black", offset: 142.7119140625, alongOffset: 0.5 },
      },
    })
    .createGuides({
      axes: false,
      grid: { vertical: { color: "#ddd" }, horizontal: false },
      legend: {
        labels: { fontSize: 10, color: "black" },
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        symbol: { layers: [{ type: "point", size: 5, fill: "transparent", strokeWidth: 1.5, opacity: 0.7 }] },
        titlePadding: 3.25,
      },
    });
}