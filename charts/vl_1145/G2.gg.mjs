// DOCS: doc-6c2c08869091f6a0, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 505,
      height: 395,
      margin: { left: 44, top: 5, right: 121, bottom: 50 }
    })
    .createData({ values: data })
    .createSortedData({
      id: "party-sorted",
      sortBy: [{ field: "Party", order: "descending" }]
    })
    .createStackData({
      category: "Year",
      group: "Party",
      value: "seats"
    })
    .createBarPlot({
      x: {
        field: "Year",
        fieldType: "ordinal"
      },
      y: {
        lower: "seats_start",
        upper: "seats_end",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({
      domain: [1918, 1922, 1923, 1924, 1929, 1931, 1935, 1945, 1950, 1951, 1955, 1959, 1964, 1966, 1970, 1974, 1979, 1983, 1987, 1992, 1997, 2001, 2005, 2010, 2015, 2017, 2019],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({
      domain: [0, 650]
    })
    .encodeColor({
      field: "Party",
      fieldType: "nominal",
      scale: {
        type: "ordinal",
        domain: ["Conservative", "Labour", "Liberal Democrats"],
        range: ["#e7ba52", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd"]
      }
    })
    .encodeBarWidth({ band: 1 })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            ticks: { length: 5 },
            labels: {
              fontSize: 10,
              offset: 7,
              rotation: { value: -90, unit: "degrees" }
            }
          },
          title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 39 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: [0, 100, 200, 300, 400, 500, 600],
            ticks: { length: 5 },
            labels: { fontSize: 10, offset: 6 }
          },
          title: { text: "Number of Seats", fontSize: 11, fontWeight: 700, offset: 35, rotation: { value: -90, unit: "degrees" } }
        }
      },
      grid: {
        horizontal: { scale: "y", color: "#ddd" }
      },
      legend: {
        position: "right",
        title: "Weather type",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 }
      }
    });
}
