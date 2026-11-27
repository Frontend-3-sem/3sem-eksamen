import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import formatDate from "@/app/utils/formatDate";
import formatTime from "@/app/utils/formatTime";

const EventSelect = ({ value, onSelectChange, events }) => {
  return (
    <>
      <Select
        name="eventId"
        id="event-select"
        value={value}
        onValueChange={onSelectChange}
        items={events.map((event) => ({
          value: event.id,
          label: event.title,
          date: event.date,
          open: event.open,
          location: event.location,
        }))}
      >
        <SelectTrigger className="w-full border border-text focus:outline-0 focus:border-accent1 rounded-none text-(length:--fluid-p)">
          <SelectValue className="h-50" placeholder="Choose Event" />
        </SelectTrigger>
        <SelectContent
          className="border-2 border-text focus:outline-0 rounded-none bg-background"
          alignItemWithTrigger={false}
        >
          <SelectGroup className="flex flex-col gap-4 py-4 divide-y divide-form-placeholder">
            {events.map((event) => (
              <SelectItem
                className="focus:border-accent1 rounded-none"
                key={event.id}
                value={event.id}
              >
                <div className="hover:cursor-pointer pb-4">
                  <p className="hover:text-accent1">{event.title}</p>
                  <p className="text-subtle-text">
                    {formatDate(event.date)} · {formatTime(event.doorsOpen)}
                  </p>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default EventSelect;
