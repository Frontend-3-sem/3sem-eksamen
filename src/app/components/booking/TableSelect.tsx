import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TableSelect = ({ value, onTableChange, tables }) => {
  return (
    <>
      <Select
        name="table"
        id="table-select"
        value={value}
        onValueChange={onTableChange}
        items={tables.map((table) => ({
          value: table.tableId,
          label: table.tableId,
          capacity: table.capacity,
        }))}
      >
        <SelectTrigger className="w-full border border-text focus:outline-0 focus:border-accent1 rounded-none text-(length:--fluid-p)">
          <SelectValue className="h-50" placeholder="Choose Table" />
        </SelectTrigger>
        <SelectContent
          className="border-2 border-text focus:outline-0 rounded-none bg-background"
          alignItemWithTrigger={false}
        >
          <SelectGroup className="flex flex-col gap-4 py-4 divide-y divide-form-placeholder">
            {tables.map((table) => (
              <SelectItem
                className="focus:border-accent1 rounded-none"
                key={table.tableId}
                value={table.tableId}
              >
                <div className="hover:cursor-pointer pb-4">
                  <p className="hover:text-accent1">{table.tableId}</p>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default TableSelect;
