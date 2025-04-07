"use client";

import React from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { useTheme } from 'next-themes';

// Define the structure of a single data row
interface StatsRow {
  year: number;
  jan: number | null;
  feb: number | null;
  mar: number | null;
  apr: number | null;
  may: number | null;
  jun: number | null;
  jul: number | null;
  aug: number | null;
  sep: number | null;
  oct: number | null;
  nov: number | null;
  dec: number | null;
  total: number | null;
}

interface PassengerChartsProps {
  data: StatsRow[];
}

const months = [
  { key: 'jan', name: 'Jan' }, { key: 'feb', name: 'Feb' }, { key: 'mar', name: 'Mar' },
  { key: 'apr', name: 'Apr' }, { key: 'may', name: 'Maj' }, { key: 'jun', name: 'Jun' },
  { key: 'jul', name: 'Jul' }, { key: 'aug', name: 'Aug' }, { key: 'sep', name: 'Sep' },
  { key: 'oct', name: 'Okt' }, { key: 'nov', name: 'Nov' }, { key: 'dec', name: 'Dec' },
];

const PassengerCharts: React.FC<PassengerChartsProps> = ({ data }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const accentColor = isDarkMode ? '#64ffda' : '#2563eb'; // Teal for dark, Blue for light
  const textColor = isDarkMode ? '#cbd5e1' : '#475569'; // Light gray for dark, Slate for light
  const gridColor = isDarkMode ? '#334155' : '#e2e8f0'; // Slate colors

  // Prepare data for charts
  // Filter out 2025 as it has no data, and reverse for chronological order in line chart
  const annualData = data
    .filter(d => d.year !== 2025 && d.total !== null)
    .map(d => ({ year: d.year, total: d.total }))
    .reverse();

  // Get data for the latest full year (assuming 2024 is the latest with full data)
  const latestYearData = data.find(d => d.year === 2024);
  const monthlyData2024 = latestYearData
    ? months.map(month => ({
        name: month.name,
        // @ts-ignore // Accessing month key dynamically
        passengers: latestYearData[month.key] ?? 0,
      }))
    : [];

  // Custom Tooltip Formatter
  const formatTooltipValue = (value: number) => value.toLocaleString();
  const formatAxisValue = (value: number) => {
      if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
      if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
      return value.toString();
  };


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
      {/* Annual Total Passengers Chart */}
      <div className="p-6 rounded-[15px] shadow-xl
        bg-white/70 backdrop-blur-lg border border-gray-200/50
        dark:bg-[#172a45]/60 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Ukupan Broj Putnika po Godinama</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={annualData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="year" stroke={textColor} fontSize={12} />
            <YAxis stroke={textColor} fontSize={12} tickFormatter={formatAxisValue} />
            <Tooltip
              formatter={formatTooltipValue}
              contentStyle={{
                backgroundColor: isDarkMode ? 'rgba(23, 42, 69, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                borderColor: gridColor,
                borderRadius: '8px',
                color: textColor
              }}
              itemStyle={{ color: textColor }}
              cursor={{ fill: 'transparent' }}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Line type="monotone" dataKey="total" name="Ukupno Putnika" stroke={accentColor} strokeWidth={2} activeDot={{ r: 6 }} dot={{ r: 3 }}/>
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Passengers for Latest Year Chart */}
      <div className="p-6 rounded-[15px] shadow-xl
        bg-white/70 backdrop-blur-lg border border-gray-200/50
        dark:bg-[#0a192f]/70 dark:border-[#64ffda]/30 dark:shadow-[#64ffda]/10">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Mjesečni Broj Putnika (2024)</h3>
         <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData2024} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="name" stroke={textColor} fontSize={12} />
            <YAxis stroke={textColor} fontSize={12} tickFormatter={formatAxisValue} />
             <Tooltip
              formatter={formatTooltipValue}
              contentStyle={{
                backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                borderColor: gridColor,
                borderRadius: '8px',
                color: textColor
              }}
              itemStyle={{ color: textColor }}
              cursor={{ fill: 'transparent' }}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Bar dataKey="passengers" name="Broj Putnika" fill={accentColor} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PassengerCharts;
