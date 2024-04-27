import { db } from "@/libs/db"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  try {
    const result = await db.query('SELECT * FROM product WHERE id = ?', [params.id])

    if (result.length === 0) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 })
    }

    return NextResponse.json(result[0])
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const result = await db.query('DELETE FROM product WHERE id = ?', [params.id])

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 })
    }
    return NextResponse.json({ message: 'Product deleted' })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  try {
    const body = await request.json()
    const result = await db.query('UPDATE product SET ? WHERE id = ?', [body, params.id])

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 })
    }
    return NextResponse.json({ message: 'Product updated' })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}