export default function Skeleton({ height = 20 }) {
  return (
    <div
      style={{
        height,
        width: "100%",
        background:
          "linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 37%, #e5e7eb 63%)",
        backgroundSize: "400% 100%",
        animation: "skeleton 1.4s ease infinite",
        borderRadius: "6px",
      }}
    />
  );
}
