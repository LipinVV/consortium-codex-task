import {PaginationInterface} from "../../interfaces";
import './pagination.scss';

export const Pagination = ({
                               handleClickDecrease, handleClickIncrease, currentPage, questions, indexOfLastItem,
                           }: PaginationInterface) => (
    <div className="pagination">
        <section className="pagination__control-buttons">
            <button
                className="pagination__control-button"
                type="button"
                onClick={handleClickDecrease}
                disabled={currentPage === 1}
            >
                Back
            </button>
            <button
                className="pagination__control-button"
                type="button"
                onClick={handleClickIncrease}
                disabled={indexOfLastItem >= questions.length}
            >
                Next
            </button>
        </section>
    </div>
);