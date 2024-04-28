"use client"
import axios from "axios"
import { useRouter } from "next/navigation"

function Buttons({ id }) {
  const router = useRouter()

  return (
    <div className="flex gap-2 mt-4 justify-end">
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => router.push('/products/edit/' + id)}>Edit</button>

      <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={async () => {
        if (confirm('Are you sure you want to delete this product?')) {
          const response = await axios.delete('/api/products/' + id)
          console.log(response)
          if (response.status === 200) {
            router.push('/products')
            router.refresh()
          }
        }
      }} >Delete</button>

      <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={() => router.push('/products/sell/' + id)}>Sell</button>
    </div >
  )
}

export default Buttons