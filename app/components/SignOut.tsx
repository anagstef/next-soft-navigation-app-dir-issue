"use client";

import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

function Inner() {
  const { signOut } = useClerk();
  const router = useRouter();
  return (
    <button
      onClick={() =>
        void signOut().then(() => {
          router.push("/");
        })
      }
    >
      Sign out
    </button>
  );
}

export default function SignOut() {
  return <Inner />;
}
