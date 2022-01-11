import { ReactComponent as GitImag } from "assets/img/Vector.svg";
import './styles.css';
function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/21MRR">
            <div className="dsmovie-contact-container">
              <GitImag />
              <p className="dsmovie-contact-link">/MRezende</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
