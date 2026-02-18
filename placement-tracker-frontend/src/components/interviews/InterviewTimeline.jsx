import Card from "../common/Card";

export default function InterviewTimeline({ interviews = [] }) {
  if (interviews.length === 0) {
    return (
      <Card>
        <p style={{ color: "var(--text-secondary)" }}>
          No interview rounds scheduled yet.
        </p>
      </Card>
    );
  }

  return (
    <div>
      {interviews.map((round) => (
        <Card key={round.id} style={{ marginBottom: "16px" }}>
          <h4>{round.round}</h4>

          <p style={{ color: "var(--text-secondary)", margin: "6px 0" }}>
            Date: {round.date}
          </p>

          <p>
            Preparation:{" "}
            <strong style={{ color: round.prepared ? "var(--success)" : "var(--warning)" }}>
              {round.prepared ? "Done" : "Pending"}
            </strong>
          </p>

          <p>
            Result:{" "}
            <strong>
              {round.result}
            </strong>
          </p>

          {round.feedback && (
            <p style={{ marginTop: "8px", fontSize: "14px" }}>
              Feedback: {round.feedback}
            </p>
          )}
        </Card>
      ))}
    </div>
  );
}
