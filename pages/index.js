import { getSession, useSession } from "next-auth/react";
import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="">
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/spotify.ico" />
      </Head>
      <Dashboard />
    </div>
  );
}
