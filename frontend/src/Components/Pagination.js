const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <div className="flex gap-1 rounded-lg p-2 justify-center items-center cursor-pointer">
      <button
        onClick={() => {
          setCurrentPage((prev) => prev - 1);
        }}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {generatedPages.map((page) => (
        <div
          onClick={() => setCurrentPage(page)}
          key={page}
          className={currentPage === page ? "bg-gray-400" : "page"}
        >
          {page}
        </div>
      ))}
      <button
        onClick={() => {
          setCurrentPage((prev) => prev + 1);
        }}
        disabled={currentPage === pages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
