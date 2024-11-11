"use client";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

export const LoginWithGoogleButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {!pending ? (
        <Button className="w-full">
          <Mail className="mr-2 h-4 w-4" />
          Login with Google
        </Button>
      ) : (
        <Button disabled={true} className="w-full">
          <Loader2
            className="h-8 w-8 mr-2 animate-spin"
            style={{ strokeWidth: 2 }}
          />
        </Button>
      )}
    </>
  );
};

export const LoginWithGithub = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {!pending ? (
        <Button className="w-full">
          <Github className="mr-2 h-4 w-4" />
          Login with GitHub
        </Button>
      ) : (
        <Button disabled={true} className="w-full">
          <Loader2
            className="h-8 w-8 mr-2 animate-spin"
            style={{ strokeWidth: 2 }}
          />
        </Button>
      )}
    </>
  );
};
