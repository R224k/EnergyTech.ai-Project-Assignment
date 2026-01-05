// import { useEffect, useState } from "react";

// export default function Home() {
//   const [invoices, setInvoices] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/invoices")
//       .then(res => res.json())
//       .then(data => setInvoices(data));
//   }, []);

//   return (
//     <div>
//       <h2>Invoices</h2>
//       <a href="/add">Add Invoice</a>
//       <ul>
//         {invoices.map(inv => (
//           <li key={inv.id}>
//             {inv.invoice_number} - {inv.client_name} - ₹{inv.amount}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import { useEffect, useState } from "react";

export default function Home() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/invoices")
      .then(res => res.json())
      .then(setInvoices);
  }, []);

  return (
    <div>
      <h2>Invoices</h2>
      <a href="/add">Add Invoice</a>
      <ul>
        {invoices.map(inv => (
          <li key={inv.id}>
            {inv.invoice_number} - {inv.client_name} - ₹{inv.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
