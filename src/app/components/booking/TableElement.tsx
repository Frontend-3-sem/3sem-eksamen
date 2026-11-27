// Utils

// Next
import Image from "next/image";

// Components
const TableElement = ({
  capacity,
  tableId,
  reserved,
  className,
  onTableSelect,
  isSelected,
}) => {
  return (
    <>
      <button
        className={`stackcontainer hover:underline hover:decoration-accent1 hover:underline-offset-4 ${reserved ? "cursor-default" : "cursor-pointer"}`}
        onClick={() => onTableSelect(tableId, "bookingh1")}
        disabled={reserved}
      >
        <Image
          width={300}
          height={200}
          src={`/assets/table/table${capacity}.svg`}
          alt={`Table ${tableId}`}
          className={`stackitem h-full w-auto place-self-center ${className} ${reserved ? "opacity-35" : ""}`}
        ></Image>
        <p
          className={`stackitem place-self-center ${isSelected ? "text-2xl underline decoration-accent1 underline-offset-4" : ""} ${reserved ? "text-accent1" : ""}`}
        >
          {tableId}
        </p>
        {reserved && (
          <Image
            width={300}
            height={200}
            src={`/assets/table/reserved.svg`}
            alt="This table is reserved"
            className={`stackitem h-full w-4/5 place-self-center z-10`}
          ></Image>
        )}
      </button>
    </>
  );
};

export default TableElement;
