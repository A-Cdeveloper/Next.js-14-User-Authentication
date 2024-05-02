import "../globals.css";
import { logoutUserAction } from "../actions/auth-actions";

export const metadata = {
  title: "Next Auth Training",
  description: "Next.js Authentication Training",
};

export default function TrainingLayout({ children }) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome back!</p>
        <form action={logoutUserAction}>
          <button>Log out</button>
        </form>
      </header>
      {children}
    </>
  );
}
