"use client"

import { useRef, useState, useEffect } from "react"
import axios from "axios"
import { useRouter, useParams } from "next/navigation"

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: '',
    role: '',
    startDate: ''
  })
  const form = useRef(null)
  const router = useRouter()
  const params = useParams()

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (params.id) {
      axios.get('/api/employees/' + params.id).then((response) => {
        setEmployee({
          name: response.data.name,
          role: response.data.role,
          startDate: response.data.startDate
        })
      })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!params.id) {
      const response = await axios.post('/api/employees', employee)
      console.log(response)
    } else {
      const response = await axios.put('/api/employees/' + params.id, employee)
      console.log(response)
    }

    form.current.reset()
    router.push('/employees')
    router.refresh()
  }

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input type="text" name="name" value={employee.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="David Small" autoFocus />

        <label htmlFor="role">Role</label>
        <input type="text" name="role" value={employee.role} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="UI Designer" />

        <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold mb-2">Start Date</label>
        <input type="date" name="startDate" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={employee.startDate} onChange={handleChange} />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{!params.id ? 'Create Employee' : 'Update Employee'}</button>
      </form>
    </div>
  )
}

export default EmployeeForm