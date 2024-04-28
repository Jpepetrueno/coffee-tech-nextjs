import Link from "next/link";

export default function ClientCard({ client }) {
  return (
    <Link href={`/clients/${client.id}`} className="bg-white text-black rounded-lg border-gray-800 mb-3 p-4 hover:bg-gray-200 hover:cursor-pointer">
      <h5>ID client: {client.id}</h5>
      <h1 className="text-lg font-bold">{client.name}</h1>
      <p>{client.email}</p>
      <p>{client.phonenumber}</p>
    </Link>
  )
}