import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/Button";

// TODO so how cna I cache the result os it doesn't always call it.
// TODO can create a dummy one for dev purposes?
export default function Home() {
  const getBurnleyStats = async () => {
    const res = await fetch("/api/thing");
    const { response }: any = await res.json();
    alert(response);
  };
  return (
    <>
      <Head>
        <title>Football</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>Hi sports fans...</p>
        <Button onPress={getBurnleyStats}>
          Lets get the stats for the clarets
        </Button>
      </main>
    </>
  );
}
