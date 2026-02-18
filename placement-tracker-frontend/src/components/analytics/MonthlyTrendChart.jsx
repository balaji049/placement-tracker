import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Card from "../common/Card";

export default function MonthlyTrendChart({ applications }) {
  const monthlyCount = {};

  applications.forEach((app) => {
    const month = new Date(app.appliedDate).toLocaleString("default", {
      month: "short",
    });
    monthlyCount[month] = (monthlyCount[month] || 0) + 1;
  });

  const data = {
    labels: Object.keys(monthlyCount),
    datasets: [
      {
        label: "Applications per Month",
        data: Object.values(monthlyCount),
        borderColor: "#16a34a",
        backgroundColor: "#16a34a",
        tension: 0.3,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
  };

  return (
    <Card>
      <h3 style={{ marginBottom: "12px" }}>Monthly Trend</h3>
      <div style={{ height: "260px" }}>
        <Line data={data} options={options} />
      </div>
    </Card>
  );
}
