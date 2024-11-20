interface UserScoreChartProps {
  score: number;
  strokeWidth?: number;
  sqSize?: number;
}

const UserScoreChart = ({
  score,
  strokeWidth = 8,
  sqSize = 144,
}: UserScoreChartProps) => {
  const getColorClass = (score: number) => {
    if (score === 0) return "stroke-gray-11";
    if (score >= 70) return "stroke-green-11";
    if (score >= 50) return "stroke-[#FFE000]";
    return "stroke-red-9";
  };

  const getFillColorClass = (score: number) => {
    if (score === 0) return "fill-gray-11";
    if (score >= 70) return "fill-green-11";
    if (score >= 50) return "fill-[#FFE000]";
    return "fill-red-9";
  };

  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * (score || 0)) / 100;

  return (
    <svg
      width={sqSize}
      height={sqSize}
      viewBox={viewBox}
      className="backdrop-blur-[2px] rounded-full bg-blacka-3"
    >
      <circle
        className="fill-none stroke-[#FFFFFF45]"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />

      <circle
        className={`fill-none ${getColorClass(
          score
        )} transition-all delay-200 ease-in`}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeLinecap="square"
        strokeWidth={`${strokeWidth}px`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />

      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        className={`text-2xl font-semibold ${getFillColorClass(score)}`}
      >
        {score}
        <tspan textAnchor="middle" className="text-base fill-white">
          %
        </tspan>
      </text>
    </svg>
  );
};

export default UserScoreChart;
