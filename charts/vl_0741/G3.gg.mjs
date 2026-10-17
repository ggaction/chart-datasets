// DOCS: doc-ef5a28c0c3f3c920, doc-bc26da5598d35bae
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 165,
      height: 165,
      margin: { top: 5, right: 5, bottom: 20, left: 20 }
    })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "High Religiosity \u2192", fieldType: "nominal" },
      y: { field: "High Giving Index \u2192", fieldType: "nominal" },
      guides: false
    })
    .encodeColor({
      field: "color",
      fieldType: "nominal"
    })
    .editColorScale({
      domain: ["1", "2", "3", "5", "6", "7", "8", "9"],
      range: [
        "#FCFBFD", "#EFEDF5", "#DADAEB", "#BCBDDC",
        "#9E9AC8", "#807DBA", "#6A51A3", "#54278F", "#3F007D"
      ]
    })
    .createXAxis({
      line: false,
      ticksAndLabels: false,
      title: {
        text: "High Religiosity \u2192",
        fontSize: 11,
        fontWeight: 700,
        color: "black",
        offset: 8
      }
    })
    .createYAxis({
      line: false,
      ticksAndLabels: false,
      title: {
        text: "High Giving Index \u2192",
        fontSize: 11,
        fontWeight: 700,
        color: "black",
        offset: 5
      }
    })
  .editYAxis({
    title: {
      offset: 8.421875
    }
  });
}
