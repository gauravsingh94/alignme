// NavbarContent.tsx
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { AlignStartVertical } from "lucide-react";
import { signOut, signIn } from "next-auth/react";
import { LoginWithGoogleButton, LoginWithGithub } from "./AuthButton";
import { Session } from "next-auth";

interface NavbarContentProps {
  session: Session | null;
}

const NavbarContent = ({ session }: NavbarContentProps) => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 border-b border-borderPrimary">
      <div
        onClick={() => signOut()}
        className="font-bold flex items-center gap-2"
      >
        <AlignStartVertical className="h-6 w-6" />
        AlignMe
      </div>
      <div>
        {session?.user?.image ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage
                  className="w-12 h-12 rounded-full"
                  src={session.user.image}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4">
              <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
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
                    await signIn("google");
                  }}
                >
                  <LoginWithGoogleButton />
                </form>
                <form
                  action={async () => {
                    await signIn("github");
                  }}
                >
                  <LoginWithGithub />
                </form>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </nav>
  );
};

export default NavbarContent;