import styles from "./NavBar.module.scss";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <BrowserRouter>
          <div className={styles.navigation}>
          <i className={styles.icon + " fa fa-tasks"} aria-hidden="true"><Link to="/" /></ i>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorite">Favorite</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </BrowserRouter>
      </Container>
    </nav>
  );
};
export default NavBar;
