import axios from "axios";
import ButtonsClient from "./ButtonsClient";

async function loadClient(id) {
  const { data } = await axios.get(`http://localhost:3000/api/clients/${id}`)
  return data
}

async function ClientPage({ params }) {
  const client = await loadClient(params.id)

  return (
    <section className="flex justify-center items-center h-full">
      <div className="p-6 bg-white text-black">
        <p><strong>Name:</strong> {client.name}</p>
        <p><strong>Email:</strong> {client.email}</p>
        <p><strong>Phone:</strong> {client.phonenumber}</p>
        <ButtonsClient id={client.id} />
      </div>
    </section>
  )

}

export default ClientPage