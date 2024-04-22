import "./Pagination.scss";

export default function Pagination(props) {
  const { numberOfPages, setCurrentPage, currentPage } = props;
  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-btn ${page === currentPage && "active-btn"}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
