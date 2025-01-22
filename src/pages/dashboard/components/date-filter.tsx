import { useState, useEffect } from 'react';
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import { useFilters } from '@/providers/date-filter-provider';
import { useTheme } from 'next-themes';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { X } from 'lucide-react';

const DateFilter = () => {
  const { filters, setFilters } = useFilters();
  const { theme } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localState, setLocalState] = useState([
    {
      startDate: filters.startDate || new Date(),
      endDate: filters.endDate || addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  useEffect(() => {
    setLocalState([
      {
        startDate: filters.startDate || new Date(),
        endDate: filters.endDate || addDays(new Date(), 7),
        key: 'selection'
      }
    ]);
  }, [filters.startDate, filters.endDate]);

  const handleDateChange = (item: {
    selection: { startDate: Date; endDate: Date };
  }) => {
    const { startDate, endDate } = item.selection;
    setLocalState([{ startDate, endDate, key: 'selection' }]);

    if (startDate && endDate && startDate < endDate) {
      setFilters((prev) => ({
        ...prev,
        startDate: startDate,
        endDate: endDate
      }));
      setIsModalOpen(false);
    }
  };

  const formatDateRange = () => {
    const start = filters.startDate
      ? filters.startDate.toLocaleDateString('es-ES')
      : '';
    const end = filters.endDate
      ? filters.endDate.toLocaleDateString('es-ES')
      : '';
    return start && end ? `${start} - ${end}` : '';
  };

  return (
    <div className="flex w-full flex-col items-center gap-4 md:w-[max-content] md:flex-row">
      <div className="relative w-full md:w-[max-content]">
        <label className="mb-1 block text-sm font-medium text-muted-foreground">
          Date Range
        </label>
        <input
          type="text"
          value={formatDateRange()}
          onClick={() => setIsModalOpen(true)}
          readOnly
          className={`w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground ${
            theme !== 'light' ? 'text-black' : 'text-foreground'
          }`}
        />

        {isModalOpen && (
          <div
            className="absolute right-0 mt-4 w-full rounded-md border md:w-[max-content]"
            style={{ zIndex: 99999 }}
          >
            <div className="overflow-auto rounded-md bg-white p-4 shadow-md">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute bottom-4 left-4 text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <DateRangePicker
                ranges={localState}
                onChange={handleDateChange}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                direction="vertical"
                preventSnapRefocus={true}
                calendarFocus="backwards"
                rangeColors={['#2525B1']}
                inputRanges={[]}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateFilter;
