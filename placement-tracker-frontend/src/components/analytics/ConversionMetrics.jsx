import Card from "../common/Card";

export default function ConversionMetrics({ applications }) {
  const interviews = applications.filter(
    (a) => a.status === "Interview"
  ).length;

  const offers = applications.filter(
    (a) => a.status === "Offer"
  ).length;

  const conversionRate =
    interviews === 0 ? 0 : Math.round((offers / interviews) * 100);

  return (
    <Card>
      <h3>Interview → Offer Conversion</h3>

      <p
        style={{
          fontSize: "32px",
          fontWeight: "600",
          margin: "12px 0",
          color: "var(--primary)",
        }}
      >
        {conversionRate}%
      </p>

      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "14px",
        }}
      >
        {offers} offer(s) out of {interviews} interview(s)
      </p>
    </Card>
  );
}
