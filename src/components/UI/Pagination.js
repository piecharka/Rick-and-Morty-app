import { useState } from "react";
import InfoBox from "./InfoBox";
import classes from "./Pagination.module.css";
const Pagination = ({ changePage, max }) => {
  const [page, setPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const pageChangeHandler = (e) => {
    try {
      if (e.target.value > max) {
        throw new RangeError(`${max} is the last page`);
      }
      if (!e.target.value || e.target.value === 0) {
        throw new RangeError("Select the correct page of the list");
      }
      setErrorMessage("");
      setPage(e.target.value);
      changePage(e.target.value);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };
  return (
    <div>
      {errorMessage.length !== 0 && <InfoBox message={errorMessage} />}
      <form className={classes.pagination_form}>
        <label>Page:</label>
        <input
          type="number"
          value={page}
          onChange={pageChangeHandler}
          min={1}
          max={max}
        />
      </form>
    </div>
  );
};

export default Pagination;
