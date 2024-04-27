import axios from "axios";
import ButtonsEmployee from "./ButtonsEmployee";

async function loadEmployee(id) {
  const { data } = await axios.get(`http://localhost:3000/api/employees/${id}`)
  return data
}

export default async function EmployeePage({ params }) {
  const employee = await loadEmployee(params.id)

  return (
    <section className="flex justify-center items-center h-full">
      <div className="p-6 bg-white text-black">
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Role:</strong> {employee.role}</p>
        <p><strong>Start Date:</strong> {employee.startDate}</p>
        <ButtonsEmployee id={employee.id} />
      </div>
    </section>
  )
}