import { auth } from "../lib/auth";
import AlignMeLogo from "./AlignMeLogo";
import UserAvtar from "./UserAvtar";
import { TryForFreeButton } from "./TryForFreeButton";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideBar from "./SideBar";
import { SessionProvider } from "next-auth/react";

export default async function NavBar() {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between px-4 py-2 border-b border-borderPrimary">
      <div className="flex gap-8">
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Open sidebar">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <AlignMeLogo />
              </SheetTitle>
            </SheetHeader>
            <SessionProvider>
              <SideBar isLoggedIn={session?.user ? true : false} />
            </SessionProvider>
          </SheetContent>
        </Sheet>
      </div>
      {session?.user ? <UserAvtar /> : <TryForFreeButton />}
    </nav>
  );
}
