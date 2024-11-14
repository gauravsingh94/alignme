import { signIn } from "next-auth/react";
import React from "react";
import { LoginWithGoogleButton, LoginWithGithub } from "./AuthButton";

const LoginOption = () => {
  return (
    <div className="grid gap-4 py-4">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <LoginWithGoogleButton />
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <LoginWithGithub />
      </form>
    </div>
  );
};

export default LoginOption;
