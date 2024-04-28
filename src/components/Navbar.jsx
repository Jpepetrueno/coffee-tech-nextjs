import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bgzinc-900 text-white py-3 mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/"><h3 className="text-xl font-bold text-green-500 hover:text-green-300">☕ CoffeeTech</h3></Link>

        <ul className="flex gap-4">
          <li>
            <Link href="/products" className="text-sky-500 hover:text-sky-200">Products</Link>
          </li>
          <li>
            <Link href="/newproduct" className="text-sky-500 hover:text-sky-200">New Product</Link>
          </li>
          <li>
            <Link href="/clients" className="text-sky-500 hover:text-sky-200">Clients</Link>
          </li>
          <li>
            <Link href="/newclient" className="text-sky-500 hover:text-sky-200">New Client</Link>
          </li>
          <li>
            <Link href="/employees" className="text-sky-500 hover:text-sky-200">Employees</Link>
          </li>
          <li>
            <Link href="/newemployee" className="text-sky-500 hover:text-sky-200">New Employee</Link>
          </li>
          <li>
            <Link href="/sales" className="text-sky-500 hover:text-sky-200">Sales</Link>
          </li>
          <li>
            <Link href="/newsale" className="text-sky-500 hover:text-sky-200">New Sale</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}