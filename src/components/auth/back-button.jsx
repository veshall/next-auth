import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BackButton({ label, href }) {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
