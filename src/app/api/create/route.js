import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
// import { cloudinaryUploader } from "../../../../lib/cloudinaryUploader";

export async function POST(request) {
  const body = await request.json();

  try {
    
    // const imageResult = await cloudinaryUploader(body.image);

   
    const newPost = await prisma.post.create({
      data: {
        name: body.name,
        description: body.description,
        colors: body.colors,
        image: body.image, 
        price: body.price,
      },
    });

    return NextResponse.json({ message: "Post created successfully!", post: newPost });
  } catch (err) {
    console.error("Failed to create post:", err);
    return NextResponse.json({ error: "Failed to create post" });
  }
}

















// import { NextResponse } from "next/server";
// import prisma from "../../../../lib/prisma";


// export async function POST(request) {
//   const body = await request.json();

//   try {
//     const newPost = await prisma.post.create({
//       data: {
//         name: body.name,
//         description: body.description,
//         colors: body.colors,
//         image: body.image,
//         price: body.price
//       },
//     });

//     return NextResponse.json({ message: "Post created successfully!", post: newPost });
//   } catch (err) {
//     return NextResponse.json({ error: "Failed to create post" });
//   }
// }







