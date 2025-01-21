import * as Popover from '@radix-ui/react-popover';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/providers/theme-provider';

const DateFilter: React.FC = () => {
  const today = new Date();
  const startDateDefault = new Date(today);
  startDateDefault.setDate(today.getDate() - 28);
  const formatDate = (date: Date) => date.toISOString().split('T')[0];
  const [startDate, setStartDate] = useState<string>(
    formatDate(startDateDefault)
  );
  const [endDate, setEndDate] = useState<string>(formatDate(today));
  const { theme } = useTheme();

  useEffect(() => {
    setStartDate(formatDate(startDateDefault));
    setEndDate(formatDate(today));
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <div>
        <label className="mb-1 block text-sm font-medium text-muted-foreground">
          Start Date
        </label>
        <Popover.Root>
          <Popover.Trigger>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={`w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${theme !== 'light' ? 'text-black' : 'text-primary'}`}
              placeholder={startDate ? '' : 'Select start date'}
            />
          </Popover.Trigger>
        </Popover.Root>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-muted-foreground">
          End Date
        </label>
        <Popover.Root>
          <Popover.Trigger>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={`w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${theme !== 'light' ? 'text-black' : 'text-primary'}`}
              placeholder={endDate ? '' : 'Select end date'}
            />
          </Popover.Trigger>
        </Popover.Root>
      </div>
    </div>
  );
};

export default DateFilter;
