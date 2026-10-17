// DOCS: doc-2a31551f1566fc6b, doc-08d24a62ced0d1b8, doc-74fc341a49e892f8
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 410,
      height: 410,
      margin: { top: 5, right: 5, bottom: 5, left: 5 }
    })
    .createData({ values: data })
    .createComputedData({
  id: "dCol",
  as: "col",
  expression: {
    op: "if",
    condition: { op: "lte", left: { field: "id" }, right: { constant: 10 } },
    then: { constant: 1 },
    else: {
      op: "if",
      condition: { op: "lte", left: { field: "id" }, right: { constant: 20 } },
      then: { constant: 2 },
      else: {
        op: "if",
        condition: { op: "lte", left: { field: "id" }, right: { constant: 30 } },
        then: { constant: 3 },
        else: {
          op: "if",
          condition: { op: "lte", left: { field: "id" }, right: { constant: 40 } },
          then: { constant: 4 },
          else: {
            op: "if",
            condition: { op: "lte", left: { field: "id" }, right: { constant: 50 } },
            then: { constant: 5 },
            else: {
              op: "if",
              condition: { op: "lte", left: { field: "id" }, right: { constant: 60 } },
              then: { constant: 6 },
              else: {
                op: "if",
                condition: { op: "lte", left: { field: "id" }, right: { constant: 70 } },
                then: { constant: 7 },
                else: {
                  op: "if",
                  condition: { op: "lte", left: { field: "id" }, right: { constant: 80 } },
                  then: { constant: 8 },
                  else: {
                    op: "if",
                    condition: { op: "lte", left: { field: "id" }, right: { constant: 90 } },
                    then: { constant: 9 },
                    else: { constant: 10 }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
})
    .createComputedData({ id: "dRow", as: "row", expression: { op: "subtract", left: { field: "id" }, right: { op: "multiply", left: { field: "col" }, right: { constant: 10 } } } })
    .createScatterPlot({
      x: { field: "col", fieldType: "ordinal" },
      y: { field: "row", fieldType: "ordinal" },
      guides: false
    })
    .encodePointRadius({ value: 4.743416490252569 })
    .editXScale({ domain: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] })
    .editYScale({ domain: [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0] })
    .editPointMark({ fill: "#4c78a8", shape: "circle" }).encodeOpacity({ value: 0.7 })
    .editPointMark({ stroke: false });
}
