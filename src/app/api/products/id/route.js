import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";



export async function GET({ query }) {
  const { id } = query;

  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, 404);
    }

    return NextResponse.json({ product });
  } catch (error) {
    console.error('GET API request failed:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, 500);
  }
}
