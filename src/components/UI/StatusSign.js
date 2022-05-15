import { Fragment } from "react";
import classes from "./StatusSign.module.css";
const StatusSign = (props) => {
  return (
    <Fragment>
      <p className={classes.status_paragraph}>
        <span
          style={
            props.status === "Dead"
              ? { color: "red" }
              : props.status === "Alive"
              ? { color: "green" }
              : { color: "orange" }
          }
          className={classes.status_dot}
        >
          &bull;
        </span>
        {props.status}
      </p>
    </Fragment>
  );
};

export default StatusSign;
