import { db } from "@/lib/db";

export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    const verficationToken = await db.twoFactorToken.findUnique({
      where: { token },
    });

    return verficationToken;
  } catch {
    return null;
  }
};

export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const verficationToken = await db.twoFactorToken.findFirst({
      where: { email },
    });

    return verficationToken;
  } catch {
    return null;
  }
};
