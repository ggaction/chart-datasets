import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1010,
      height: 477,
      margin: { left: 53, top: 27, right: 157, bottom: 50 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "typedRows",
      as: "iyear_num",
      expression: { op: "toNumber", operand: { field: "iyear" } }
    })
    .createSummaryData({
      id: "yearCountrySum",
      groupBy: ["iyear_num", "country_txt"],
      aggregates: [{ op: "sum", field: "Attack Count", as: "Attack Count" }]
    })
    .createLinePlot({
      x: { field: "iyear_num", fieldType: "nominal" },
      y: "Attack Count",
      guides: false
    })
    .encodeColor({ field: "country_txt", palette: "category20" })
    .editColorScale({ domain: ["Algeria", "Bahrain", "Egypt", "International", "Iran", "Iraq", "Israel", "Jordan", "Kuwait", "Lebanon", "Libya", "Morocco", "North Yemen", "Qatar", "Saudi Arabia", "South Yemen", "Syria", "Tunisia", "Turkey", "United Arab Emirates", "West Bank and Gaza Strip", "Western Sahara", "Yemen"] })
    .editLineMark({ strokeWidth: 2 })
    .editXScale({
      padding: 0.5,
      domain: [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
    })
    .editYScale({ domain: [0, 4000] })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", rotation: { value: -90, unit: "degrees" } }
        },
        title: { text: "Year", fontSize: 11, fontWeight: 700, color: "black" }
      },
      y: {
        ticksAndLabels: {
          values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f" }
        },
        title: { text: "Sum of Attack Count", fontSize: 11, fontWeight: 700, color: "black" }
      }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .createGrid({ horizontal: { color: "#ddd" } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "Country",
        labels: { fontSize: 10, color: "black" },
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
      }
    })
    .createTitle({
      text: "Yearly Terrorist Attacks in Middle Eastern & North African Countries",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -10.953125
    });
}