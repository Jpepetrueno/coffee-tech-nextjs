import Link from "next/link"

export default function EmployeeCard({ employee }) {
  return (
    <Link href={`/employees/${employee.id}`} className="bg-white text-black rounded-lg border-gray-800 mb-3 p-4 hover:bg-gray-200 hover:cursor-pointer">
      <h5>ID employee: {employee.id}</h5>
      <h1 className="text-lg font-bold">{employee.name}</h1>
      <p>{employee.role}</p>
      <p>{employee.startDate}</p>
    </Link>
  )
}