import { Poppins } from "next/font/google";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl text-white drop-shadow-md font-semibold",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple Authentication Service</p>
        <div>
          <LoginButton>
            {" "}
            {/* Wrapper which has onClick function which takes you to login page */}
            <Button size="lg" variant="secondary">
              Sign-in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
