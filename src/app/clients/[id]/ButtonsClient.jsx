"use client"

import axios from "axios"
import { useRouter } from "next/navigation"

function ButtonsClient({ id }) {
  const router = useRouter()

  return (
    <div className="flex gap-2 mt-4 justify-end">
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => router.push('/clients/edit/' + id)}>Edit</button>

      <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={async () => {
        if (confirm('Are you sure you want to delete this client?')) {
          const response = await axios.delete('/api/clients/' + id)
          console.log(response)
          if (response.status === 200) {
            router.push('/clients')
            router.refresh()
          }
        }
      }} >Delete</button>
    </div >
  )
}

export default ButtonsClient