// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot basic-charts),
// DOCS: doc-333a87e52954985d (Bar Chart Tutorial), doc-7a5eff3c73a7e7f9 (grouped-bar example program)

import { chart } from "ggaction";
import data from "./data.json";

// Source: vega-lite bar chart, width 2000, height 200.
// x: Year (numeric nominal, band scale 1960..2021, paddingInner 0.1, paddingOuter 0.05)
// y: " Inflation Rate" (quantitative linear, domain [0, 26])
// y grid only (horizontal grid lines); axes have titles "Year" / " Inflation Rate".

const yearDomain = [
  1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971,
  1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983,
  1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995,
  1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
  2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
  2020, 2021
];

export function buildChart() {
  return chart()
    // Contract canvas: outer 2044x242, margins from contract.canvas.margin.
    // Plot area preserved: 2000 x 200.
    .createCanvas({
      width: 2044,
      height: 242,
      margin: { top: 5, right: 5, bottom: 37, left: 39 }
    })
    // Raw immutable dataset; field " Inflation Rate" keeps its leading space.
    .createData({ id: "inflation", values: data })
    // High-level facade: x and y together, guides disabled for explicit guide tree.
    .createBarPlot({
      x: {
        field: "Year",
        fieldType: "nominal"
      },
      y: {
        field: " Inflation Rate",
        fieldType: "quantitative"
      },
      guides: false
    })
    // Source bandwidth equals the full band slot (paddingInner 0.1 already applied).
    // Band/linear scale properties moved out of the facade into scale editors;
    // redundant type:band/type:linear omitted.
    .editXScale({ domain: yearDomain, paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 26] })
    .encodeBarWidth({ band: 1 })
    // Horizontal grid lines from the y scale (grid-only y axis in the source);
    // vertical grid explicitly off.
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1, count: 6 },
      vertical: false
    })
    // Complete display axes with source typography (tight margins:
    // labels fontSize 10 / offset 7; titles fontSize 11 / offset 28).
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            labels: { fontSize: 10, offset: 7 }
          },
          title: { text: "Year", fontSize: 11, offset: 28 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            labels: { fontSize: 10, offset: 7 }
          },
          title: { text: " Inflation Rate", fontSize: 11, offset: 28 }
        }
      }
    });
}