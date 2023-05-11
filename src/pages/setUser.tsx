/* eslint-disable @typescript-eslint/no-misused-promises */
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { api } from "~/utils/api";

const SetUser: NextPage = () => {
  const router = useRouter();

  const createUser = api.messRouter.createUser.useMutation();

  const handleSetUser = async (): Promise<void> => {
    await createUser.mutateAsync().then(async () => {
      await router.push("/");
    });
  };

  return (
    <>
      <Head>
        <title>MessMe</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="ml-64 flex min-h-screen flex-col items-center justify-center bg-gray-900 py-2">
        <h1 className="text-3xl">Please confirm creating accoutn</h1>
        <button
          className="mt-12 rounded border-2 border-red-400 px-4 py-2"
          onClick={handleSetUser}
        >
          Accept
        </button>
      </div>
    </>
  );
};

export default SetUser;