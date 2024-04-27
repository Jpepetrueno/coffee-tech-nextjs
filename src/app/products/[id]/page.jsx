import axios from "axios";
import Buttons from "./Buttons";

async function loadProduct(id) {
  const { data } = await axios.get(`http://localhost:3000/api/products/${id}`)
  return data
}

async function ProductPage({ params }) {
  const product = await loadProduct(params.id)

  return (
    <section className="flex justify-center items-center h-full">
      <div className="p-6 bg-white text-black">
        <p><strong>Name:</strong> {product.name}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Quantity:</strong> {product.quantity}</p>
        <Buttons id={product.id} />
      </div>
    </section>
  )

}

export default ProductPage