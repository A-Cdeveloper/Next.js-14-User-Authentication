"use client";
import { useFormState } from "react-dom";
import { useSearchParams } from "next/navigation";
import { createUserAction, loginUserAction } from "@/app/actions/auth-actions";
import Link from "next/link";

export default function AuthForm() {
  const searchParams = useSearchParams();
  const isLoginArea = searchParams.get("mode") === "login";
  const userAction = isLoginArea ? loginUserAction : createUserAction;
  const [state, action] = useFormState(userAction, {});

  //console.log(state.errors.email);
  return (
    <form action={action} id="auth-form">
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        {state?.errors?.email && (
          <span className="form-errors">{state?.errors?.email}</span>
        )}
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        {state?.errors?.password && (
          <span className="form-errors">{state?.errors?.password}</span>
        )}
      </p>
      <p>
        <button type="submit">
          {isLoginArea ? "Log In" : "Create Account"}
        </button>
      </p>
      <p>
        <Link href={`${isLoginArea ? "/" : "/?mode=login"}`}>
          {isLoginArea
            ? "Go and create new account."
            : "Login with existing account."}
        </Link>
      </p>
    </form>
  );
}
