import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import React from "react";

export default function LoginButton({ children, mode = "redirect", asChild }) {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          {/* <LoginForm /> */}
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <span onClick={onClick} className=" cursor-pointer">
      {children}
    </span>
  );
}
