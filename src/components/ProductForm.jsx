"use client"

import { useRef, useState, useEffect } from "react"
import axios from "axios"
import { useRouter, useParams } from "next/navigation"

function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    quantity: 0
  })
  const form = useRef(null)
  const router = useRouter()
  const params = useParams()

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (params.id) {
      axios.get('/api/products/' + params.id).then((response) => {
        setProduct({
          name: response.data.name,
          description: response.data.description,
          price: response.data.price,
          quantity: response.data.quantity
        })
      })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!params.id) {
      const response = await axios.post('/api/products', product)
      console.log(response)
    } else {
      const response = await axios.put('/api/products/' + params.id, product)
      console.log(response)
    }

    form.current.reset()
    router.push('/products')
    router.refresh()
  }

  return (
    <div>
      <form action="" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} ref={form}>

        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
        <input name="name" type="text" placeholder="cafe moka" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoFocus value={product.name} />

        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <textarea name="description" rows={3} placeholder="cafe expreso con chocolate y leche caliente" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={product.description} />

        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">$ Price</label>
        <input name="price" type="number" placeholder="6.00" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={product.price} />

        <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>
        <input name="quantity" type="number" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={product.quantity} />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">{!params.id ? 'Create' : 'Update'}</button>

      </form>
    </div>
  )
}

export default ProductForm