"use server";

import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser } from "@/lib/user";
import { redirect } from "next/navigation";

export const createUserAction = async (prevFormData, formData) => {
  const data = Object.fromEntries(formData.entries());
  const { email, password } = data;

  // server validation
  let errors = {};
  if (!email.includes("@")) {
    errors.email = "Please enter a valid email adresse";
  }

  if (password.length < 8) {
    errors.password = "Password need to be at least 8 charachters long.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // store in database

  const hashPassword = hashUserPassword(password);

  try {
    createUser(email, hashPassword);
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "User with that email already exist!",
        },
      };
    }
    throw error;
  }

  redirect("/training");
};
