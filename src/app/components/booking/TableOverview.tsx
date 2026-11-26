// Utils

// Next

// Components
import TableElement from "./TableElement";

const TableOverview = ({ onTableSelect, selectedTable, reservations }) => {
  const tables = [
    { tableId: 1, capacity: 4 },
    { tableId: 2, capacity: 4 },
    { tableId: 3, capacity: 6 },
    { tableId: 4, capacity: 4 },
    { tableId: 5, capacity: 8 },
    { tableId: 6, capacity: 4 },
    { tableId: 7, capacity: 4 },
    { tableId: 8, capacity: 6 },
    { tableId: 9, capacity: 4 },
    { tableId: 10, capacity: 8 },
    { tableId: 11, capacity: 4 },
    { tableId: 12, capacity: 4 },
    { tableId: 13, capacity: 6 },
    { tableId: 14, capacity: 4 },
    { tableId: 15, capacity: 8 },
  ];

  return (
    <>
      <section className="grid grid-cols-5 gap-y-16">
        {tables.map((table) => {
          const isReserved = reservations.some(
            (reservation) => Number(reservation.table) === table.tableId,
          );
          return (
            <TableElement
              capacity={table.capacity}
              tableId={table.tableId}
              reserved={isReserved}
              key={table.tableId}
              className=""
              onTableSelect={onTableSelect}
              isSelected={selectedTable === table.tableId}
            />
          );
        })}
      </section>
    </>
  );
};

export default TableOverview;
