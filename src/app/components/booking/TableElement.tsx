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
        className={`stackcontainer ${isSelected ? "underline decoration-accent1" : ""} ${reserved ? "cursor-default" : "cursor-pointer"}`}
        onClick={() => onTableSelect(tableId)}
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
          className={`stackitem place-self-center ${reserved ? "text-accent1" : ""}`}
        >
          {tableId}
        </p>
      </button>
    </>
  );
};

export default TableElement;
