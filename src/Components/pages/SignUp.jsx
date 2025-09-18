import { SignUp } from '@clerk/clerk-react'
import "./SignUp.css"

export default function SignUpPage() {
  return (
    <div className='signup-container '>
      <SignUp routing="path" path="/sign-up" />
    </div>
  )
}