// DOCS: doc-e790db38fc2a278a, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 349,
      height: 443,
      margin: { left: 44, top: 5, right: 5, bottom: 88 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "Value1_num",
      as: "Value1_num",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Value1" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Value1" } }
      }
    })
    .createComputedData({
      id: "Value2_num",
      as: "Value2_num",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Value2" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Value2" } }
      }
    })
    .createScatterPlot({
      guides: false,
      x: { field: "Value1_num", fieldType: "quantitative" },
      y: { field: "Value2_num", fieldType: "quantitative" }
    })
    .encodeColor({
      field: "country",
      fieldType: "nominal"
    })
    .editXScale({ domain: [-1100, 1100] })
    .editYScale({ domain: [-55, 55] })
    .editColorScale({
      domain: ["Antigua and Barbuda", "Australia", "Austria", "Belarus", "Belgium", "Brazil", "Bulgaria", "Canada", "Chile", "China", "Croatia", "Cyprus", "Czech Republic", "Denmark", "EU28", "Estonia", "Finland", "France and Monaco", "Germany", "Greece", "Hungary", "Iceland", "India", "Indonesia", "Ireland", "Israel and Palestine, State of", "Italy, San Marino and the Holy See", "Japan", "Kazakhstan", "Korea, Rep.", "Kyrgyz Republic", "Latvia", "Lithuania", "Luxembourg", "Malta", "Mexico", "Moldova", "Netherlands", "New Zealand", "Norway", "Papua New Guinea", "Poland", "Portugal", "Romania", "Russian Federation", "Serbia and Montenegro", "Singapore", "Slovak Republic", "Slovenia", "South Africa", "Spain and Andorra", "Sweden", "Switzerland and Liechtenstein", "Thailand", "Ukraine", "United Kingdom", "United States"],
      range: ["rgb(236, 248, 187)", "rgb(232, 246, 186)", "rgb(229, 245, 184)", "rgb(225, 243, 183)", "rgb(222, 242, 181)", "rgb(218, 241, 180)", "rgb(213, 239, 180)", "rgb(208, 236, 180)", "rgb(202, 234, 181)", "rgb(197, 232, 181)", "rgb(192, 230, 181)", "rgb(186, 228, 181)", "rgb(179, 225, 182)", "rgb(172, 222, 183)", "rgb(165, 220, 183)", "rgb(158, 217, 184)", "rgb(151, 214, 185)", "rgb(144, 211, 186)", "rgb(136, 209, 186)", "rgb(129, 206, 187)", "rgb(121, 203, 188)", "rgb(114, 200, 189)", "rgb(106, 198, 190)", "rgb(100, 195, 191)", "rgb(94, 192, 191)", "rgb(88, 189, 192)", "rgb(81, 186, 193)", "rgb(75, 183, 193)", "rgb(69, 180, 194)", "rgb(65, 176, 194)", "rgb(60, 172, 193)", "rgb(56, 169, 193)", "rgb(52, 165, 193)", "rgb(47, 161, 192)", "rgb(44, 157, 192)", "rgb(42, 152, 190)", "rgb(40, 147, 189)", "rgb(38, 143, 188)", "rgb(36, 138, 186)", "rgb(34, 133, 185)", "rgb(33, 128, 183)", "rgb(33, 123, 181)", "rgb(33, 117, 178)", "rgb(33, 112, 176)", "rgb(33, 106, 173)", "rgb(33, 101, 171)", "rgb(33, 96, 169)", "rgb(34, 91, 166)", "rgb(34, 86, 164)", "rgb(34, 82, 161)", "rgb(35, 77, 159)", "rgb(35, 72, 156)", "rgb(34, 68, 153)", "rgb(33, 64, 149)", "rgb(32, 60, 145)", "rgb(30, 57, 141)", "rgb(29, 53, 137)"]
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ opacity: 0.7 })
    .createHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        count: 11,
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Target recution in GHG emissions from starting year (%)",
        fontSize: 11,
        offset: 28
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 11,
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Actual reduction in fossil CO\u2082 emissions 2010-2018 (%)",
        fontSize: 11,
        offset: 33
      }
    })
    .editXAxis({ title: { fontWeight: 700 } })
    .editYAxis({ title: { fontWeight: 700 } });
}