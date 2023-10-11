import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import client from "@/libs/prismadb";
import { getServerSession } from "next-auth";

export async function getSession() {
  return getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) return null;

    const currentUser = await client.user.findUnique({
      where: { email: session.user.email },
    });

    if (!currentUser) return null;

    return currentUser;
  } catch (error) {
    console.log(error);
  }
}
