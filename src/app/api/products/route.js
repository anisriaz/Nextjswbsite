import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET() {
  try {
    const allPosts = await prisma.post.findMany(); 
    console.log("GET API request successful!");
   
    return NextResponse.json({ allPosts: allPosts });
  } catch (error) {
    console.error("GET API request failed:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, 500);
  }
};







































// import { NextResponse } from "next/server";
// import prisma from "../../../../lib/prisma"




// export async function GET() {
//   try {
//     const allProducts = await prisma.products.findMany();
//     console.log("GET API request successful!");
//     return NextResponse.json({ allProducts: allProducts });
//   } catch (error) {
//     console.error("GET API request failed:", error);
//     return NextResponse.json({ error: "Failed to fetch data" }, 500);
//   }
// }




