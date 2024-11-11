import { AlignStartVertical, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoginWithGithub, LoginWithGoogleButton } from "./AuthButton";
import { signIn } from "../lib/auth";

const NavBar = () => (
  <nav className="flex items-center justify-between px-4 py-2">
    <div className="font-bold flex items-center gap-2">
      <AlignStartVertical className="h-6 w-6" />
      AlignMe
    </div>
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Try for free</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              Choose your preferred login method
            </DialogDescription>
          </DialogHeader>
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
        </DialogContent>
      </Dialog>
    </div>
  </nav>
);

export default NavBar;
