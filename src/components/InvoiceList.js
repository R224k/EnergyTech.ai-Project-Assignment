import { useEffect, useState } from "react";
import "./InvoiceTable.css";

export default function InvoiceList() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/invoices")
      .then(res => res.json())
      .then(setInvoices);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Invoices</h2>

      <table className="invoice-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Invoice No</th>
            <th>Client</th>
            <th>Date</th>
            <th>Amount (₹)</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {invoices.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No invoices found
              </td>
            </tr>
          ) : (
            invoices.map(inv => (
              <tr key={inv.id}>
                <td>{inv.id}</td>
                <td>{inv.invoice_number}</td>
                <td>{inv.client_name}</td>
                <td>{inv.date}</td>
                <td>{inv.amount}</td>
                <td>{inv.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
