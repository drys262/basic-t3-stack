import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";

import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const accounts = trpc.useQuery(["account.getAll"]);
  const { data: session } = useSession();

  console.log("session here", session);
  console.log("accounts", accounts);

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Home;
