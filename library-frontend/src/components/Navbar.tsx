import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow px-4">
    <div className="container-fluid">
      <Link className="navbar-brand fw-bold" to="/">My Library</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/add"> Add Book</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
