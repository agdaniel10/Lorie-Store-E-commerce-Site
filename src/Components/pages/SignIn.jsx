import { SignIn } from '@clerk/clerk-react';
import "./SignIn.css"

export default function SignInPage() {
  return (
    <div className='signin-container'>
      <SignIn routing="path" path="/sign-in" />
    </div>
  )
}