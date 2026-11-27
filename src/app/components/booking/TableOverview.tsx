// Utils

// Next

// Components
import TableElement from "./TableElement";

const TableOverview = ({
  onTableSelect,
  selectedTable,
  reservations,
  tables,
}) => {
  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-12 lg:gap-16 my-16">
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
