import { NextResponse } from "next/server"
import { db } from '@/libs/db'

export async function GET() {
  try {
    const result = await db.query('SELECT * FROM employee')
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }

}

export async function POST(request) {
  try {
    const { name, role, startDate } = await request.json()
    const result = await db.query('INSERT INTO employee SET ?', { name, role, startDate })

    return NextResponse.json({
      name,
      role,
      startDate,
      id: result.insertId
    })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }

}