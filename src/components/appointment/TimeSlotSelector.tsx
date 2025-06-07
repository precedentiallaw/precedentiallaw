
import React from 'react';
import { Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { TimeSlot } from '@/types/appointment';

interface TimeSlotSelectorProps {
  selectedDate: string;
  selectedTime: string;
  availableSlots: TimeSlot[];
  onDateChange: (date: string) => void;
  onTimeSelect: (time: string) => void;
  today: string;
  maxDate: string;
}

const TimeSlotSelector: React.FC<TimeSlotSelectorProps> = ({
  selectedDate,
  selectedTime,
  availableSlots,
  onDateChange,
  onTimeSelect,
  today,
  maxDate
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium mb-2">
          <Clock className="w-4 h-4 inline mr-1" />
          Preferred Date *
        </label>
        <Input
          type="date"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          min={today}
          max={maxDate}
          required
          className="border-gray-300 focus:border-precedential-gold"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          <Clock className="w-4 h-4 inline mr-1" />
          Available Time Slots
        </label>
        {selectedDate ? (
          <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
            {availableSlots.map((slot) => (
              <button
                key={slot.time}
                type="button"
                onClick={() => onTimeSelect(slot.time)}
                disabled={!slot.available}
                className={`p-2 text-xs rounded border transition-colors ${
                  selectedTime === slot.time
                    ? 'bg-precedential-gold text-precedential-black border-precedential-gold'
                    : slot.available
                    ? 'bg-white text-gray-700 border-gray-300 hover:border-precedential-gold'
                    : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">Select a date to view available times</p>
        )}
      </div>
    </div>
  );
};

export default TimeSlotSelector;
