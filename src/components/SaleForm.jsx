"use client"

import { useRef, useState, useEffect } from "react"
import axios from "axios"
import { useRouter, useParams } from "next/navigation"

export default function SaleForm() {
  const [sale, setSale] = useState({
    idClient: '',
    idEmployee: '',
    idProduct: '',
    quantity: 0,
    paymentMethod: ''
  })
  const form = useRef(null)
  const router = useRouter()
  const params = useParams()

  const handleChange = (e) => {
    setSale({
      ...sale,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (params.id) {
      axios.get('/api/sales/' + params.id).then((response) => {
        setSale({
          idClient: response.data.idClient,
          idEmployee: response.data.idEmployee,
          idProduct: response.data.idProduct,
          quantity: response.data.quantity,
          paymentMethod: response.data.paymentMethod
        })
      })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!params.id) {
      const response = await axios.post('/api/sales', sale)
      console.log(response)
    } else {
      const response = await axios.put('/api/sales/' + params.id, sale)
      console.log(response)
    }

    form.current.reset()
    router.push('/sales')
    router.refresh()
  }

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <label htmlFor="idClient" className="block text-gray-700 text-sm font-bold mb-2"> Client id</label>
        <input type="text" name="idClient" value={sale.idClient} onChange={handleChange} placeholder="Client id" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoFocus />


        <label htmlFor="idEmployee" className="block text-gray-700 text-sm font-bold mb-2"> Employee id</label>
        <input type="text" name="idEmployee" value={sale.idEmployee} onChange={handleChange} placeholder="Employee id" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />


        <label htmlFor="idProduct" className="block text-gray-700 text-sm font-bold mb-2"> Product id</label>
        <input type="text" name="idProduct" value={sale.idProduct} onChange={handleChange} placeholder="Product id" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />


        <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2"> Quantity</label>
        <input type="number" name="quantity" value={sale.quantity} onChange={handleChange} placeholder="Quantity" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />


        <label htmlFor="paymentMethod" className="block text-gray-700 text-sm font-bold mb-2"> Payment method</label>
        <input type="text" name="paymentMethod" value={sale.paymentMethod} onChange={handleChange} placeholder="Payment method" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />


        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {params.id ? 'Update' : 'Sell'}
        </button>
      </form>
    </div>
  )
}