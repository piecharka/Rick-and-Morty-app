import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={classes.navigation_box}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? `${classes.navigation_active} ${classes.navigation_title}`
            : classes.navigation_title
        }
      >
        Rick and Morty app
      </NavLink>
      <nav className={classes.section_list}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${classes.navigation_active} ${classes.navigation_title}`
              : classes.navigation_title
          }
          to="/characters"
        >
          Characters list
        </NavLink>
        <NavLink
          to="/favourite-characters"
          className={({ isActive }) =>
            isActive
              ? `${classes.navigation_active} ${classes.navigation_title}`
              : classes.navigation_title
          }
        >
          Favourite characters list
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
