import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import type { BookedRange } from "../types/booking";

type Props = {
  bookedRanges: BookedRange[];
  selectedRange: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
};

function BookingCalendar({ bookedRanges, selectedRange, onSelect }: Props) {
  const disabledRanges = bookedRanges.map((range) => ({
    from: new Date(range.from),
    to: new Date(range.to)
  }));

  return (
    <DayPicker
      mode="range"
      selected={selectedRange}
      onSelect={onSelect}
      disabled={[
        { before: new Date() },
        ...disabledRanges
      ]}
      className="bookingCalendar"
    />
  );
}

export default BookingCalendar;