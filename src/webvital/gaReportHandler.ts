import { Metric } from "web-vitals";

// event values can only contain integers
function getEventValueFromMetric(metric: Metric) {
  const value = metric.value;
  if (metric.name === "CLS") {
    return Math.round(value * 1000);
  }
  return Math.round(value);
}

function reportHandler(metric: Metric) {
  ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: metric.name,
    eventValue: getEventValueFromMetric(metric),
    eventLabel: metric.id,
    nonInteraction: true,
  });
}

export default reportHandler;
