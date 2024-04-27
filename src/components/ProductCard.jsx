import Link from "next/link"

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="bg-white text-black rounded-lg border-gray-800 mb-3 p-4 hover:bg-gray-200 hover:cursor-pointer">
      <h1 className="text-lg font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <h2 className="text-2xl text-slate-600">${product.price}</h2>
      <h2>{product.quantity} in stock</h2>
    </Link>
  )
}

export default ProductCard