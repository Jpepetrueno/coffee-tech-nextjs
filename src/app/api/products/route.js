import { NextResponse } from "next/server"
import { db } from '@/libs/db'

export function GET() {
    return NextResponse.json({ message: 'listed product!' })}


export async function POST(request) {
    const { name, description, price, quantity } = await request.json()
    const result = await db.query(`INSERT INTO product (name, description, price, quantity) VALUES ('${name}', '${description}', '${price}', '${quantity}')`)

    console.log(result)
    return NextResponse.json({ message: 'Created product!' })
}