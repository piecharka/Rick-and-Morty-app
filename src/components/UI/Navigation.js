import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={classes.navigationBox}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? `${classes.navigationActive} ${classes.navigationTitle}`
            : classes.navigationTitle
        }
      >
        Rick and Morty app
      </NavLink>
      <nav className={classes.sectionList}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${classes.navigationActive} ${classes.navigationTitle}`
              : classes.navigationTitle
          }
          to="/characters"
        >
          Characters list
        </NavLink>
        <NavLink
          to="/favourite-characters"
          className={({ isActive }) =>
            isActive
              ? `${classes.navigationActive} ${classes.navigationTitle}`
              : classes.navigationTitle
          }
        >
          Favourite characters list
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
