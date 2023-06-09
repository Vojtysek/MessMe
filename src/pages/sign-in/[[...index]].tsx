import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </div>
);

export default SignInPage;
