function Pagination({ totalPages, handleClick }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div>
      <ol className="flex justify-center text-xs font-medium space-x-1">
        {pages.map((num) => (
          <button key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}
      </ol>
    </div>
  );
}

export default Pagination;
