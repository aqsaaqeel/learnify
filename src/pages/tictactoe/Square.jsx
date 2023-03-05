export const Square = ({ value, onClick }) => {
  return (
    <div
      className="square w-24 h-24 border-2 border-solid border-zinc-50 box-border flex justify-center items-center"
      {...value}
      onClick={onClick}
    >
      {value.x ? 'X' : ''}
      {value.o ? 'O' : ''}

    </div>
  );
};
