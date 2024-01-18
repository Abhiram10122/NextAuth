"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  isChild?: boolean;
}

export const LoginButton = ({ children, mode, isChild }: LoginButtonProps) => {
  const onClick = () => {
    console.log("Clicked");
  };

  return <span className=""></span>;
};
