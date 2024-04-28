import { NextResponse } from "next/server"
import { db } from '@/libs/db'

export async function GET() {
  try {
    const result = await db.query('SELECT * FROM sale')
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}


export async function POST(request) {
  try {
    const { idClient, idEmployee, idProduct, paymentMethod, quantity, discount } = await request.json()
    const result = await db.query('INSERT INTO sale SET ?', { idClient, idEmployee, idProduct, paymentMethod, quantity, discount })

    return NextResponse.json({
      idClient,
      idEmployee,
      idProduct,
      paymentMethod,
      quantity,
      discount,
      id: result.insertId
    })

  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}