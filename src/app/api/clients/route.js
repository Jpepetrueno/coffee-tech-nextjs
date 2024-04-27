import { NextResponse } from "next/server";
import { db } from '@/libs/db'

export async function GET() {
    try {
        const result = await db.query('SELECT * FROM client')
        return NextResponse.json(result)

    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}

export async function POST(request) {
    try {
        const { name, email, phonenumber } = await request.json()

        const result = await db.query("INSERT INTO client SET ?", { name, email, phonenumber })

        return NextResponse.json({
            name,
            email,
            phonenumber,
            id: result.insertId
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}