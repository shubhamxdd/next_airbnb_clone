import { NextRequest, NextResponse } from "next/server";
import client from "@/libs/prismadb";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  //destructure email, name, password from request body

  const { email, name, password } = await request.json();

  //   hash the password

  const hashedPassword = await bcrypt.hash(password, 10);

  //   create user

  const user = await client.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
