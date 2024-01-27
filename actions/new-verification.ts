"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerficationTokenByToken } from "@/data/verification-token";

export const newVerification = async (token: string) => {
  const existingToken = await getVerficationTokenByToken(token);

  if (!existingToken) {
    return { error: "No existing token" };
  }

  const hasExpires = new Date(existingToken.expires) < new Date();

  if (hasExpires) {
    return { error: "Token has expired" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist" };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await db.verficationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Email verified" };
};
