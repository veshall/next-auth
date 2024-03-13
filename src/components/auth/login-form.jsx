import React from "react";
import CardWrapper from "./card-wrapper";

export default function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
}
