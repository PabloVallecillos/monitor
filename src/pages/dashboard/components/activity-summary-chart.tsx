import { useAnimatedNumber } from '@/hooks/use-animated-number';

export default function ActivitySummaryChart({ label, value, percentage }) {
  const animatedValue = useAnimatedNumber(value);
  const animatedPercentage = useAnimatedNumber(percentage);

  const renderPercentageIcon = () => {
    if (animatedPercentage > 0) {
      return (
        <>
          <span className="mr-1">▲</span>
          {Math.abs(animatedPercentage).toFixed(2)}%
        </>
      );
    } else if (animatedPercentage < 0) {
      return (
        <>
          <span className="mr-1">▼</span>
          {Math.abs(animatedPercentage).toFixed(2)}%
        </>
      );
    } else {
      return (
        <>
          <span className="mr-1">
            <strong>-</strong>
          </span>
          {Math.abs(animatedPercentage).toFixed(2)}%
        </>
      );
    }
  };

  const percentageClass =
    animatedPercentage === 0
      ? 'text-yellow-600'
      : animatedPercentage > 0
        ? 'text-green-600'
        : 'text-red-600';

  return (
    <div
      className="flex items-center justify-between rounded-xl border bg-card p-4 text-card-foreground shadow"
      tabIndex={0}
    >
      <div>
        <p className="text-sm font-medium tracking-tight">{label}</p>
        <p className="text-2xl font-bold">${animatedValue.toLocaleString()}</p>
      </div>
      <div
        className={`text-sm font-medium ${percentageClass} flex items-center`}
      >
        {renderPercentageIcon()}
      </div>
    </div>
  );
}
