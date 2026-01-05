// import { useState } from "react";

// export default function InvoiceForm() {
//   const [form, setForm] = useState({});

//   const submit = async () => {
//     await fetch("http://localhost:5000/invoices", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form)
//     });
//     window.location = "/";
//   };

//   return (
//     <div>
//       <input placeholder="Invoice No" onChange={e=>setForm({...form, invoice_number:e.target.value})}/>
//       <input placeholder="Client" onChange={e=>setForm({...form, client_name:e.target.value})}/>
//       <input type="date" onChange={e=>setForm({...form, date:e.target.value})}/>
//       <input placeholder="Amount" onChange={e=>setForm({...form, amount:e.target.value})}/>
//       <select onChange={e=>setForm({...form, status:e.target.value})}>
//         <option>Paid</option>
//         <option>Unpaid</option>
//         <option>Pending</option>
//       </select>
//       <button onClick={submit}>Save</button>
//     </div>
//   );
// }

import { useState } from "react";

export default function InvoiceForm() {
  const [invoice_number, setInvoiceNumber] = useState("");
  const [client_name, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Paid");

  const saveInvoice = async () => {
    const payload = {
      invoice_number,
      client_name,
      date,
      amount,
      status
    };

    console.log("Sending:", payload);

    await fetch("http://localhost:5000/invoices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    window.location.href = "/";
  };

  return (
    <div>
      <h2>Add Invoice</h2>

      <input placeholder="Invoice Number" onChange={e => setInvoiceNumber(e.target.value)} />
      <input placeholder="Client Name" onChange={e => setClientName(e.target.value)} />
      <input type="date" onChange={e => setDate(e.target.value)} />
      <input placeholder="Amount" onChange={e => setAmount(e.target.value)} />

      <select onChange={e => setStatus(e.target.value)}>
        <option value="Paid">Paid</option>
        <option value="Unpaid">Unpaid</option>
        <option value="Pending">Pending</option>
      </select>

      <button onClick={saveInvoice}>Save</button>
    </div>
  );
}
