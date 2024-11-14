import { Button } from "@/components/ui/button"
import { DialogHeader } from "@/components/ui/dialog"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { signIn } from "next-auth/react"
import { LoginWithGoogleButton, LoginWithGithub } from "./AuthButton"

export function LoginDialog() {
  return (
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
              "use server"
              await signIn("google")
            }}
          >
            <LoginWithGoogleButton />
          </form>
          <form
            action={async () => {
              "use server"
              await signIn("github")
            }}
          >
            <LoginWithGithub />
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}