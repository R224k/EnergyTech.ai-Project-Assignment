import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import InvoiceList from "./components/InvoiceList";
import InvoiceForm from "./components/InvoiceForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<InvoiceList />} />
        <Route path="/add" element={<InvoiceForm />} />
      </Routes>
    </Router>
  );
}

export default App;

