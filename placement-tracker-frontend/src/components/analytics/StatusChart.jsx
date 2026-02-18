import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import Card from "../common/Card";

export default function StatusChart({ applications }) {
  const statusCounts = {
    Applied: 0,
    Interview: 0,
    Offer: 0,
    Rejected: 0,
  };

  applications.forEach((app) => {
    statusCounts[app.status]++;
  });

  const data = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: "Applications",
        data: Object.values(statusCounts),
        backgroundColor: "#2563eb",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <Card>
      <h3 style={{ marginBottom: "12px" }}>
        Status-wise Applications
      </h3>

      <div style={{ height: "260px" }}>
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
}
