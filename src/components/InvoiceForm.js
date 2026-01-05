import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InvoiceForm() {
  const navigate = useNavigate();

  const [invoice_number, setInvoiceNumber] = useState("");
  const [client_name, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Paid");

  const saveInvoice = async () => {
    await fetch("http://localhost:5000/invoices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        invoice_number,
        client_name,
        date,
        amount,
        status
      })
    });

    navigate("/");
  };

  return (
    <div>
      <h2>Add Invoice</h2>

      <input placeholder="Invoice Number" onChange={e => setInvoiceNumber(e.target.value)} />
      <br />

      <input placeholder="Client Name" onChange={e => setClientName(e.target.value)} />
      <br />

      <input type="date" onChange={e => setDate(e.target.value)} />
      <br />

      <input placeholder="Amount" onChange={e => setAmount(e.target.value)} />
      <br />

      <select onChange={e => setStatus(e.target.value)}>
        <option>Paid</option>
        <option>Unpaid</option>
        <option>Pending</option>
      </select>
      <br /><br />

      <button onClick={saveInvoice}>Save Invoice</button>
    </div>
  );
}

export default InvoiceForm;
