import { auth } from "../lib/auth";
import AlignMeLogo from "./AlignMeLogo";
import UserAvtar from "./UserAvtar";
import { LoginDialog } from "./TryForFreeButton";
const NavBar = async () => {
  const session = await auth();
  return (
    <nav className="flex items-center justify-between px-4 py-2 border-b border-borderPrimary">
      <AlignMeLogo />
      {session?.user ? <UserAvtar /> : <LoginDialog />}
    </nav>
  );
};

export default NavBar;
