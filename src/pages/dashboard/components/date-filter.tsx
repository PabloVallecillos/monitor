import React from 'react';
import { useFilters } from '@/providers/date-filter-provider';
import { useTheme } from 'next-themes';

const DateFilter: React.FC = () => {
  const { filters, setFilters } = useFilters();
  const { theme } = useTheme();

  const handleDateChange = (field: 'startDate' | 'endDate', value: string) => {
    const newDate = value ? new Date(value) : null;
    if (newDate && !isNaN(newDate.getTime())) {
      setFilters((prev) => ({ ...prev, [field]: newDate }));
    }
  };

  const formatDateForInput = (date: Date | null) => {
    if (date && !isNaN(date.getTime())) {
      return date.toISOString().split('T')[0];
    }
    return '';
  };

  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <div>
        <label className="mb-1 block text-sm font-medium text-muted-foreground">
          Start Date
        </label>
        <input
          type="date"
          value={formatDateForInput(filters.startDate)}
          onChange={(e) => handleDateChange('startDate', e.target.value)}
          className={`w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${theme !== 'light' ? 'text-black' : 'text-primary'}`}
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-muted-foreground">
          End Date
        </label>
        <input
          type="date"
          value={formatDateForInput(filters.endDate)}
          onChange={(e) => handleDateChange('endDate', e.target.value)}
          className={`w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${theme !== 'light' ? 'text-black' : 'text-primary'}`}
        />
      </div>
    </div>
  );
};

export default DateFilter;
