import { headers } from "next/headers";
import "../globals.css";

export const metadata = {
  title: "Next Auth Training",
  description: "Next.js Authentication Training",
};

export default function TrainingLayout({ children }) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome back!</p>
        <button>Log out</button>
      </header>
      {children}
    </>
  );
}
