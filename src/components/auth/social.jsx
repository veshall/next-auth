import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Social() {
  return (
    <div className="w-full gap-x-2 flex items-center">
      <Button size="lg" className="w-full" variant="outline">
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button size="lg" className="w-full" variant="outline">
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
}
