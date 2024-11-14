import { auth } from "../lib/auth";
import AlignMeLogo from "./AlignMeLogo";
import UserAvatar from "./UserAvtar";
import { TryForFreeButton } from "./TryForFreeButton";
export default async function NavBar() {
  const session = await auth();
  return (
    <nav className="flex items-center justify-between px-4 py-2 border-b border-borderPrimary">
      <AlignMeLogo />
      {session?.user ? <UserAvatar /> : <TryForFreeButton />}
    </nav>
  );
}
