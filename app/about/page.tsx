import { auth, SignedIn, SignedOut, SignIn } from '@clerk/nextjs/app-beta';
import Link from 'next/link';

export default function About() {
  const { userId } = auth();
    return (
        <div>
            <div>{userId || 'guest'}</div>
            <SignedIn>
                <Link href="/" prefetch={true}>Homepage</Link>
            </SignedIn>
            <SignedOut>
                <SignIn />
            </SignedOut>
        </div>
    )
}