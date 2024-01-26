"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";
// make sure to install -D @types/bcrypt;

import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // Check if the inputs give by user are according to the requirment.
  const validatedFields = RegisterSchema.safeParse(values);

  // NO => return an error saying its invalid.
  if (!validatedFields.success) {
    return { error: "Invalid Details" };
  }

  // YES => continue
  const { email, password, name } = validatedFields.data;

  // Check if the email is already in use.
  const existingUser = await getUserByEmail(email);

  // YES => return an error saying the email is already in use.
  if (existingUser) {
    return { error: "User already exists" };
  }

  // NO => Encrypt the password and create the user.
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: Send verification token email

  return { success: "User created" };
};
