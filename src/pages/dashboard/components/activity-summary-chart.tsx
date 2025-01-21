export default function ActivitySummaryChart({ label, value, percentage }) {
  return (
    <div
      className="flex items-center justify-between rounded-xl border bg-card p-4 text-card-foreground shadow"
      tabIndex={0}
    >
      <div>
        <p className="text-sm font-medium tracking-tight">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div
        className={`text-sm font-medium ${
          percentage > 0 ? 'text-green-600' : 'text-red-600'
        } flex items-center`}
      >
        <span className="mr-1">{percentage > 0 ? '▲' : '▼'}</span>
        {Math.abs(percentage).toFixed(2)}%
      </div>
    </div>
  );
}
