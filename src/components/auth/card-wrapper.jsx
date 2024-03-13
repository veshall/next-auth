"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import Header from "./header";
import Social from "./social";
import BackButton from "./back-button";

export default function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}) {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        < BackButton
        href={backButtonHref}
        label={backButtonLabel}
        />
      </CardFooter>
    </Card>
  );
}
