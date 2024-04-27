import ClientCard from "@/components/ClientCard";
import axios from "axios";

async function loadClients() {
  const { data } = await axios.get('http://localhost:3000/api/clients')
  return data
}

async function ClientsPage() {
  const clients = await loadClients()

  return (
    <div className="grid gap-4 grid-cols-4">
      {clients.map((client) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </div>
  )
}

export default ClientsPage