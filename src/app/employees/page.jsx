import EmployeeCard from "@/components/EmployeeCard";
import axios from "axios";

async function loadEmployees() {
  const { data } = await axios.get('http://localhost:3000/api/employees')
  return data
}

export default async function EmployeesPage() {
  const employees = await loadEmployees()
  return (
    <div className="grid gap-4 grid-cols-4">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  )
}