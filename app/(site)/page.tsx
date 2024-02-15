import AuthForm from "@/app/(site)/components/site/AuthForm";
import Image from "next/image";

const Auth =()=> {
  return (
    <div className="flex min-h-screen bg-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col w-full max-w-md mx-auto">
        <div className="flex justify-center">
          <Image alt="" width="96" height="96" src="/images/logo.png" />
        </div>

        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>

        <div className="mt-8 bg-green-100 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};
export default Auth