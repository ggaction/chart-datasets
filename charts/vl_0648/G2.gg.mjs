// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825, doc-b257fb08998617a5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 327, height: 369, margin: { left: 71, top: 47, right: 6, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "gdpNum",
      as: "Value_num",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createTitle({
      text: "US GDP - expenditure",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10 }
    })
    .editTitle({
      titleStyle: { fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ subtitle: "2022 Q3, Source: BEA", align: "left", alongOffset: -65.9208984375 })
.editTitle({ offset: -11 })
    .createBarPlot({ x: "Value_num", y: "Item", guides: false })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "rgb(128,0,0)" })
    .editXScale({ domain: [-2000, 18000] })
    .editYScale({
      domain: ["Consumption", "Government", "Investment", "Net exports"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7, flush: true, format: ",.0f" },
        values: [-2000, 2000, 6000, 10000, 14000, 18000]
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: false
    });
}
