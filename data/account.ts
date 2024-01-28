import { db } from "@/lib/db";

export const getAccountByUserId = async (userId: string) => {
  try {
    const user = await db.account.findFirst({
      where: { userId: userId },
    });
    if (user) {
      return true;
    } else {
      return false;
    }
  } catch {
    return null;
  }
};
