"use client"

import { useRef, useState, useEffect } from "react"
import axios from "axios"
import { useRouter, useParams } from "next/navigation"

function ClientForm() {
  const [client, setClient] = useState({
    name: '',
    email: '',
    phonenumber: ''
  })
  const form = useRef(null)
  const router = useRouter()
  const params = useParams()

  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (params.id) {
      axios.get('/api/clients/' + params.id).then((response) => {
        setClient({
          name: response.data.name,
          email: response.data.email,
          phonenumber: response.data.phonenumber
        })
      })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!params.id) {
      const response = await axios.post('/api/clients', client)
      console.log(response)
    } else {
      const response = await axios.put('/api/clients/' + params.id, client)
      console.log(response)
    }

    form.current.reset()
    router.push('/clients')
    router.refresh()
  }

  return (
    <div>
      <form action="" ref={form} onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Ana Suárez"
          value={client.name}
          onChange={handleChange}
          autoFocus
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="text"
          name="email"
          value={client.email}
          placeholder="anasua@example.com"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
        />
        <label htmlFor="phonenumber" className="block text-gray-700 text-sm font-bold mb-2">Phone number</label>
        <input
          type="number"
          name="phonenumber"
          placeholder="1234567890"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={client.phonenumber}
          onChange={handleChange}
        />

        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">{!params.id ? 'Create' : 'Update'}</button>

      </form>
    </div>
  )
}

export default ClientForm