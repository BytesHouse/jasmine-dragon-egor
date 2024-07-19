import { ArrowRight, ArrowLeft } from "@/ui-kit/icons";
import ReactPaginate from "react-paginate";

const Pagination2 = ({ pageCount, onPageChange, currentPage, ...props }) => {
  const handleNextClick = () => {
    const nextPage = currentPage + 1;
    onPageChange({ selected: nextPage });
  };

  const handlePrevClick = () => {
    const prevPage = currentPage - 1;
    onPageChange({ selected: prevPage });
  };

  const isLast = currentPage === pageCount - 1;
  const isFirst = currentPage === 0;

  return (
    <div
      className={`flex mb-[100px] justify-center items-center ${props?.className}`}
    >
      <button
        className={`flex py-[15px] px-[50px] border border-blue-light transition hover:border-blue hover:opacity-50 ${
          isFirst && "border-blue opacity-50"
        }`}
        onClick={handlePrevClick}
        disabled={isFirst}
      >
        <ArrowLeft />
      </button>
      <ReactPaginate
        // previousLabel={"Назад"}
        // nextLabel={"Вперед"}
        previousLabel={null}
        nextLabel={null}
        breakLabel={". . ."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={"pagination flex gap-[50px]"}
        pageClassName={
          "page-item text-[18px] font-medium text-blue transition hover:text-blue-light"
        }
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item p1 font-medium text-blue-light"}
        breakLinkClassName={"page-link"}
        activeClassName={"active text-blue-light"}
        forcePage={currentPage}
      />

      <button
        className={`flex py-[15px] px-[50px] border border-blue-light transition hover:border-blue hover:opacity-50 ${
          isLast && "border-blue opacity-50"
        }`}
        onClick={handleNextClick}
        disabled={isLast}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination2;
