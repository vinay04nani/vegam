import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthShell } from "@/components/auth/AuthShell";

export const metadata: Metadata = { title: "Create your account · Vegam" };

export default function SignupPage() {
  return (
    <AuthShell>
      <AuthForm mode="signup" />
    </AuthShell>
  );
}
