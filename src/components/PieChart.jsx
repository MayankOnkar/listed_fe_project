import React from 'react';

function PieChart() {
  const data = [
    { label: 'Basic Tees', value: 55, color: '#98D89E' },
    { label: 'Custom Short Pants', value: 31, color: '#F7DC7D' },
    { label: 'Super Hoodies', value: 14, color: '#EE8484' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const angles = data.map(item => item.value / total * 360);

  let startAngle = 0;
  let endAngle = 0;

  const slices = data.map((item, index) => {
    startAngle = endAngle;
    endAngle = startAngle + angles[index];
    const pathData = describeArc(150, 150, 100, startAngle, endAngle);

    return (
      <path key={index} d={pathData} fill={item.color} />
    );
  });

  return (
      <div className="pie-chart">
        <svg viewBox="50 50 350 350">
          {slices}
        </svg>
    </div>
  );
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  const pathData = [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    "L", x, y,
    "L", start.x, start.y,
    "Z"
  ].join(" ");
  return pathData;
}

export default PieChart;
