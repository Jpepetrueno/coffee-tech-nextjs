import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bgzinc-900 text-white py-3 mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/"><h3 className="text-2xl font-bold text-green-500 hover:text-green-300">Coffee Tech App</h3></Link>

        <ul className="flex gap-4">
          <li>
            <Link href="/products" className="text-sky-500 hover:text-sky-200">Products</Link>
          </li>
          <li>
            <Link href="/newproduct" className="text-sky-500 hover:text-sky-200">New Product</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}