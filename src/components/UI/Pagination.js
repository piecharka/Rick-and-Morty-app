import { useState } from "react";
import classes from "./Pagination.module.css";
const Pagination = (props) => {
  const [page, setPage] = useState(1);
  const pageChangeHandler = (e) => {
    setPage(e.target.value);
    props.changePage(e.target.value);
  };
  return (
    <div>
      <form className={classes.pagination_form}>
        <label>Page:</label>
        <input
          type="number"
          value={page}
          onChange={pageChangeHandler}
          min={1}
          max={42}
        />
      </form>
    </div>
  );
};

export default Pagination;
