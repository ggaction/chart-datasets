// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 449,
      height: 346,
      margin: { left: 44, top: 5, right: 5, bottom: 141 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "Player",
        fieldType: "nominal"
      },
      y: {
        field: "Goals",
        fieldType: "quantitative"
      },
      guides: false
    })
    .createGuides({
      axes: {
        x: {
          ticksAndLabels: {
            labels: { rotation: { value: 270, unit: "degrees" }, fontSize: 10, fontFamily: "sans-serif", offset: 7, overlap: "allow" }
          },
          title: { text: "Player", fontSize: 11, fontWeight: "bold", offset: 125 }
        },
        y: {
          ticksAndLabels: {
            labels: { fontSize: 10, offset: 8 }
          },
          title: { text: "Goals", fontSize: 11, fontWeight: "bold", offset: 33 }
        }
      }
    , grid: { horizontal: { color: '#ddd' } }})
    .editXScale({
      domain: [
        "Romelu Lukaku",
        "Mohamed Salah",
        "Dwight Yorke",
        "Nicolas Anelka",
        "Robbie Keane",
        "Jimmy Floyd Hasselbaink",
        "Jamie Vardy",
        "Robin van Persie",
        "Teddy Sheringham",
        "Les Ferdinand",
        "Michael Owen",
        "Jermain Defoe",
        "Robbie Fowler",
        "Thierry Henry",
        "Frank Lampard",
        "Sergio Ag\u00c3\u00bcero",
        "Andrew Cole",
        "Harry Kane",
        "Wayne Rooney",
        "Alan Shearer"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 260] })
    .encodeBarWidth({ pixels: 18 });
}
