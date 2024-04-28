import Link from "next/link";

export default function SaleCard({ sale }) {
  return (
    <Link href={`/sales/${sale.id}`} className="bg-white text-black rounded-lg border-gray-800 mb-3 p-4 hover:bg-gray-200 hover:cursor-pointer">
      <h1 className="text-lg font-bold">ID Product: {sale.idProduct}</h1>
      <h2 className="text-xl text-slate-600">Quantity of product: {sale.quantity}</h2>
      <h2>Method of payment: {sale.paymentMethod}</h2>
    </Link>
  )
}