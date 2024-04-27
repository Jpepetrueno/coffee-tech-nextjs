import { NextResponse } from "next/server"
import { db } from '@/libs/db'

export async function GET() {
    try {
        const result = await db.query('SELECT * FROM product')
        return NextResponse.json(result)

    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}


export async function POST(request) {
    try {
        const { name, description, price, quantity } = await request.json()

        const result = await db.query("INSERT INTO product SET ?", { name, description, price, quantity })

        return NextResponse.json({
            name,
            description,
            price,
            quantity,
            id: result.insertId
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error.message }, { status: 500 })
    }


}