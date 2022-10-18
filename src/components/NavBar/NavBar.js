import styles from "./NavBar.module.scss";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const NavBar = () => {
    return (
      <nav>
        <Container>
        <BrowserRouter>
            <Link to="/"></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favorite">Favorite</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </BrowserRouter>
        </Container>
    </nav>);
}
    export default NavBar;