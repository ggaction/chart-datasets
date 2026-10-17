// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-2e6240c00cb297cc (createScatterPlot options),
// doc-5bb3f448b6e83709 (facade guide options types), doc-bbcff8a9ce390f35 (point facade types)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Outer canvas and plot box match the settled source layout exactly.
    .createCanvas({
      width: 498,
      height: 439,
      margin: { left: 54, top: 52, right: 144, bottom: 87 }
    })
    .createData({ id: "players", values: data })
    // High-level scatter facade: x and y together, guides ownership moved out.
    .createScatterPlot({
      x: {
        field: "Progressive Carries",
        fieldType: "quantitative",
        scale: { domain: [0, 14] }
      },
      y: {
        field: "Progressive Passes",
        fieldType: "quantitative",
        scale: { domain: [0, 12] }
      },
      guides: false
    })
    // Ordinal color by Pos with the resolved source domain and Set1 palette.
    .encodeColor({
      field: "Pos",
      fieldType: "ordinal",
      scale: {
        domain: ["Defender", "Forward", "Midfielder", "Wingback", "Winger"],
        range: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00"]
      }
    })
    // Size by Expected Assists with the resolved pinned domain and area range.
    .encodeSize({
      field: "Expected Assists",
      fieldType: "quantitative",
      scale: {
        domain: [0, 0.3877551020408163],
        range: [3.9269908169872414, 157.07963267948966]
      }
    })
    // Constant mark appearance from the source mark spec.
    .editPointMark({ opacity: 0.7 })
    // Title fonts configured first so subtitle layout uses source typography.
    .createTitle({
      text: "Ball Progression and Goal Creation in the 2021-22 Premier League",
      titleStyle: { color: "black", fontSize: 13, fontWeight: "bold" },
      subtitleStyle: { color: "black", fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      offset: -11,
      subtitle:
        "Progressive Passes (x), Progressive Carries (y). size by Expected Assists\nall stats normalised per 90mins played. min 1500 mins played"
    })
    // Explicit guide tree: source has no grid and two independent legends.
    .createGuides({
      grid: false,
      legend: {
        channels: ["color"],
        position: "bottom",
        layout: "legacy-bottom",
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11 },
        title: "Position"
      },
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 2, 4, 6, 8, 10, 12, 14],
            ticks: { length: 5 },
            labels: { fontSize: 10, offset: 7, color: "black" }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 2, 4, 6, 8, 10, 12],
            ticks: { length: 5 },
            labels: { fontSize: 10, offset: 7, color: "black" }
          },
          title: false
        }
      }
    })
    // Size legend (right side).
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["size"],
        position: "right",
        titleStyle: { fontSize: 11 },
        labels: { fontSize: 10 }
      }
    });
}