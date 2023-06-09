import { type NextPage } from "next";
import Head from "next/head";
import { useUser } from "@clerk/nextjs";

const Home: NextPage = () => {
  const user = useUser();

  return (
    <>
      <Head>
        <title>MessMe</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="ml-64 flex bg-gray-900 min-h-screen flex-col justify-center py-2">
        <h1 className="text-6xl font-bold">MessMe</h1>
        {user.user?.username}
      </div>
    </>
  );
};

export default Home;
