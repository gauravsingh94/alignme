import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { auth } from "../lib/auth";
import { User } from "lucide-react";
const UserAvtar = async () => {
  const session = await auth();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {session?.user?.image ? (
            <img
              className="w-12 h-12 rounded-full"
              src={session?.user?.image as string}
              alt="user profile image"
            />
          ) : (
            <User />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-4 bg-black border border-borderPrimary p-4 rounded-lg">
          <DropdownMenuLabel>{session?.user?.name || "User"}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:outline-none focus:bg-borderPrimary focus:rounded-lg p-1">
            Settings
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserAvtar;
