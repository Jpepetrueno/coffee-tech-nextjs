import axios from "axios";

async function loadSale(id) {
  const { data } = await axios.get(`http://localhost:3000/api/sales/${id}`)
  return data
}

export default async function SalePage({ params }) {
  const sale = await loadSale(params.id)

  return (
    <section className="flex justify-center items-center h-full">
      <div className="font-mono text-lg tracking-tight text-gray-400">
        <h3>Invoice</h3>
        <p><strong>ID Sale:</strong> {sale.id}</p>
        <p><strong>ID Product:</strong> {sale.idProduct}</p>
        <p><strong>ID Client:</strong> {sale.idClient}</p>
        <p><strong>ID Employee:</strong> {sale.idEmployee}</p>
        <p><strong>Payment Method:</strong> {sale.paymentMethod}</p>
        <p><strong>Quantity:</strong> {sale.quantity}</p>
        <p><strong>Total Price: $</strong> {sale.product_total_price}</p>
      </div>
    </section>
  )
}