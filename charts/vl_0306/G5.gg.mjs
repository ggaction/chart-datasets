// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 811,
      height: 1493,
      margin: { left: 41, top: 27, right: 140, bottom: 1056 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "gdpNum",
      as: "GDPn",
      expression: { op: "toNumber", operand: { field: "GDP" } }
    })
    .createComputedData({
      id: "happyNum",
      as: "HappyNum",
      expression: { op: "toNumber", operand: { field: "Happy" } }
    })
    .createScatterPlot({
      x: { field: "GDPn", fieldType: "quantitative" },
      y: { field: "HappyNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 140000] })
    .editYScale({ domain: [6, 8] })
    .encodeColor({
      field: "HappyNum",
      fieldType: "quantitative"
    })
    .editColorScale({
      palette: "redyellowgreen",
      domain: [6.086, 7.821],
      interpolate: "hcl"
    })
    .encodeSize({ field: "GDP", fieldType: "nominal" })
    .editSizeScale({ type: "ordinal", domain: ["100172.0793","10045.6805","10373.78979","12472.44373","133590.147","14617.60448","14858.22943","16265.09598","17313.18835","17685","17999.90995","18728.12189","2045.535402","21148.16294","21391.92533","23185.87079","23723.34025","24300","26562.96914","26821.24523","27943.70122","29291.40062","30103.51373","31551.81641","33059","33486.67198","35657.49756","43658.97898","44315.55418","4551.184661","46510.28278","48781.02663","5025.542291","51203.55447","51247.01435","51987.93905","52170.71186","5269.783901","53637.70571","53654.7503","57767.87881","60443.10916","61028.73806","68007.75667","68727.63666","70248.629","72794.00302","7507.160971","89154.27609","91991.60046","9230.178316"], range: [3.14159265,8.74933778,14.3570829,19.9648280,25.5725731,31.1803183,36.7880634,42.3958085,48.0035536,53.6112987,59.2190439,64.8267890,70.4345341,76.0422792,81.6500243,87.2577695,92.8655146,98.4732597,104.081005,109.688750,115.296495,120.904240,126.511985,132.119730,137.727476,143.335221,148.942966,154.550711,160.158456,165.766201,171.373946,176.981692,182.589437,188.197182,193.804927,199.412672,205.020417,210.628163,216.235908,221.843653,227.451398,233.059143,238.666888,244.274633,249.882379,255.490124,261.097869,266.705614,272.313359,277.921104,283.528849] })
    .editPointMark({ opacity: 0.7, stroke: false })
    .createTitle({
      text: "Does a happy world mean a recession free world?",
      titleStyle: { fontSize: 13 },
      offset: -2
    })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .createXAxis({
      line: {},
      ticksAndLabels: { count: 8, labels: { fontSize: 10, offset: 7 } },
      title: { text: "GDP per Capita", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { count: 11, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Happiness index score", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createGrid({
      horizontal: { scale: "y", count: 11 },
      vertical: { scale: "x", count: 8 }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({ channels: ["color"], title: "Happiness Score", titleStyle: { fontSize: 11, fontWeight: 700 } })
    .editLegend({ channels: ["color"], labels: { fontSize: 10 }, gradient: { length: 200 } })
    .createLegend({ channels: ["size"], overflow: { maxItems: 29, summary: "ellipsis-count" }, labels: { fontSize: 10 } })
    .editLegend({ titleStyle: { fontSize: 11, fontWeight: 700 } });
}