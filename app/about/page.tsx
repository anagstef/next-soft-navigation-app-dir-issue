import { auth, SignIn } from '@clerk/nextjs/app-beta';

export default function About() {
  const { userId } = auth();
    return (
        <div>
            <div>{userId || 'guest'}</div>
            <SignIn></SignIn>
        </div>
    )
}