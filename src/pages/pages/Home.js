import React from "react";
import Header from "../components/Header";

function Home() {
  // Example data
  const invoices = [
    { id: 1, number: "001", client: "John Doe", date: "2026-01-04", amount: 500, status: "Paid" },
    { id: 2, number: "002", client: "Alice", date: "2026-01-05", amount: 300, status: "Unpaid" },
  ];

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Invoices</h2>
        <table>
          <thead>
            <tr>
              <th>Invoice No</th>
              <th>Client</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id}>
                <td>{inv.number}</td>
                <td>{inv.client}</td>
                <td>{inv.date}</td>
                <td>${inv.amount}</td>
                <td>{inv.status}</td>
                <td>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
