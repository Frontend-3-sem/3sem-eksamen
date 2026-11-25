import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const url = `${process.env.NEXT_PUBLIC_API_URL}/events`;
const response = await fetch(url);
const events = await response.json();
const EventSelect = () => {
  return (
    <>
      <Select items={events} name="event" id="event-select">
        <SelectTrigger className="w-full border-1 border-text focus:outline-0 focus:border-accent1 rounded-none text-(length:--fluid-p)">
          <SelectValue className="h-50" placeholder="Choose Event" />
        </SelectTrigger>
        <SelectContent
          className="border-2 border-text focus:outline-0 focus:border-accent1 rounded-none bg-background"
          alignItemWithTrigger={false}
        >
          <SelectGroup>
            {events.map((event) => (
              <SelectItem
                className="hover:text-accent1 hover:cursor-pointer text-(length:--fluid-p)"
                key={event.id}
                value={event.slug}
              >
                {event.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default EventSelect;
