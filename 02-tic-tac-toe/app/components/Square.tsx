type SquareProps = {
  children?: string;
  index?: number;
  isSelected?: boolean;
  hasBorder?: boolean;
  updateBoard?: (index: number) => void;
};

export const Square = ({
  children,
  index,
  isSelected,
  hasBorder,
  updateBoard,
}: SquareProps) => {
  const className = `${isSelected ? "bg-slate-500" : ""} ${
    hasBorder ? "border-[2px] border-white" : "text-xl w-[80px] h-[80px]"
  }`;
  const handleClick = () => {
    updateBoard && updateBoard(index as number);
  };

  return (
    <div
      onClick={handleClick}
      className={`${className} w-[100px] h-[100px] grid place-items-center cursor-pointer text-5xl rounded-lg`}
    >
      {children}
    </div>
  );
};
