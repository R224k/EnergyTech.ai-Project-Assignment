import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Invoice Management System</h1>
      <nav>
        <Link to="/" className="nav-link">Invoices</Link>
        <Link to="/add" className="nav-link">Add Invoice</Link>
      </nav>
    </header>
  );
}
