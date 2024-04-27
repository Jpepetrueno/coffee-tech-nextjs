import { NextResponse } from "next/server";
import { db } from '@/libs/db'

export async function GET() {
    const result = await db.query('SELECT NOW()')
    return NextResponse.json({ message: result[0]['NOW()'] })
}