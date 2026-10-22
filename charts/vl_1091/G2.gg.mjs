import {chart} from "ggaction";
import data from "./data.json";

// DOCS: doc-333a87e52954985d, doc-93cd519dd056d78f, doc-b257fb08998617a5

export function buildChart() {
  return chart()
    .createCanvas({
      plot: {width: 350, height: 300},
      margin: {left: 53, top: 40, right: 35, bottom: 150},
      plotBorder: {}
    })
    .createData({values: data})
    .createBarPlot({
      x: {
        field: "2016_ward_name",
        scale: {
          domain: [
            "Stockwood",
            "St George Troopers Hill",
            "Stoke Bishop",
            "Bishopsworth",
            "Hartcliffe & Withywood",
            "Filwood",
            "Henbury & Brentry",
            "Southmead",
            "Knowle",
            "Hengrove & Whitchurch Park",
            "Brislington East",
            "Brislington West",
            "Frome Vale",
            "Lockleaze",
            "Hillfields",
            "Westbury-on-Trym & Henleaze",
            "St George West",
            "Avonmouth & Lawrence Weston",
            "Hotwells & Harbourside",
            "Horfield",
            "St George Central",
            "Bedminster",
            "Bishopston & Ashley Down",
            "Redland",
            "Eastville",
            "Windmill Hill",
            "Southville",
            "Lawrence Hill",
            "Easton",
            "Cotham",
            "Ashley",
            "Clifton",
            "Clifton Down",
            "Central"
          ],
          paddingInner: 0.1,
          paddingOuter: 0.05
        }
      },
      y: {
        field: "private_and_other_rented",
        scale: {domain: [0, 3500]}
      },
      guides: false
    })
    .createGuides({
      grid: false,
      axes: {
        x: {
          title: false,
          line: {color: "#888"},
          ticksAndLabels: {
            values: [
              "Stockwood",
              "St George Troopers Hill",
              "Stoke Bishop",
              "Bishopsworth",
              "Hartcliffe & Withywood",
              "Filwood",
              "Henbury & Brentry",
              "Southmead",
              "Knowle",
              "Hengrove & Whitchurch Park",
              "Brislington East",
              "Brislington West",
              "Frome Vale",
              "Lockleaze",
              "Hillfields",
              "Westbury-on-Trym & Henleaze",
              "St George West",
              "Avonmouth & Lawrence Weston",
              "Hotwells & Harbourside",
              "Horfield",
              "St George Central",
              "Bedminster",
              "Bishopston & Ashley Down",
              "Redland",
              "Eastville",
              "Windmill Hill",
              "Southville",
              "Lawrence Hill",
              "Easton",
              "Cotham",
              "Ashley",
              "Clifton",
              "Clifton Down",
              "Central"
            ],
            ticks: {length: 0},
            labels: {
              fontSize: 10,
              color: "#000",
              rotation: {value: -90, unit: "degrees"},
              offset: 2.5,
              alongOffset: 0.390625,
              overlap: "allow"
            }
          }
        },
        y: {
          line: {color: "#888"},
          ticksAndLabels: {
            values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500],
            ticks: {length: 5, color: "#888", alongOffset: 0.5},
            labels: {
              fontSize: 10,
              color: "#000",
              format: ",.0f",
              offset: 6.5,
              alongOffset: 0.890625
            }
          },
          title: {
            text: "Number of rented properties",
            fontSize: 11,
            fontWeight: 700,
            color: "#000",
            offset: 37.5244140625,
            baseline: "alphabetic",
            alongOffset: 0.5
          }
        }
      }
    })
    .editBarMark({fill: "#3f0abb", stroke: false})
    .encodeBarWidth({band: 1})
    .highlightMarks({
      select: {
        field: "2016_ward_name",
        op: "oneOf",
        values: [
          "Bishopsworth",
          "Henbury & Brentry",
          "Stockwood",
          "Hartcliffe & Withywood",
          "Hengrove & Whitchurch Park",
          "Brislington East",
          "Westbury-on-Trym & Henleaze",
          "Avonmouth & Lawrence Weston"
        ]
      },
      fill: "red",
      bringToFront: false
    })
    
    .createTitle({
      text: "Number of privately rented houses in Bristol",
      titleStyle: {fontSize: 13, fontWeight: 700, color: "#000"},
      offset: -7.390625
    })
    .editTitle({alongOffset: -47.0244140625, gap: 3.34375})
    .editTitle({
      subtitle: "Highlighted red if the area is over 3 miles from University of Bristol or University of West England",
      subtitleStyle: {fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "#000"}
    });
}