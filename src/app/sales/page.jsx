import SaleCard from "@/components/SaleCard"
import axios from "axios"

async function loadSales() {
  const { data } = await axios.get('http://localhost:3000/api/sales')
  return data
}

export default async function SalePage() {
  const sales = await loadSales()

  return (
    <div className="grid gap-4 grid-cols-4">
      {sales.map((sale) => (
        <SaleCard key={sale.id} sale={sale} />
      ))}
    </div>
  )

}