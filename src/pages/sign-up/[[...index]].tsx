import { SignUp } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </div>
);

export default SignInPage;
