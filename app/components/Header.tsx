import { currentUser, SignedIn, SignedOut } from "@clerk/nextjs/app-beta";
import Link from "next/link";

import SignOut from "./SignOut";

async function User() {
  const user = await currentUser();
  return (
    <Link href="/" className="text-neutral-500">
      {user?.firstName}
    </Link>
  );
}

export default function Header({ page }: { page: "dashboard" | "index" }) {
  return (
    <header className="flex justify-between items-center">
      <Link href="/" className="flex items-center gap-1">
        <h1 className="font-extrabold uppercase">Gymrat</h1>
      </Link>
      <div>
        <SignedIn>
          <div className="flex items-center gap-2">
            {page === "index" ? (
              <>
                <SignOut />
                {/* @ts-expect-error github.com/microsoft/TypeScript/pull/51328 */}
                <User />
              </>
            ) : (
              <span>Dashboard</span>
            )}
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex gap-2">
            <Link href="/sign-in">Sign In</Link>
            <Link href="/sign-up">Sign Up</Link>
          </div>
        </SignedOut>
      </div>
    </header>
  );
}
