import Link from 'next/link';
import Head from 'next/head';

function prviPost() {
  return (
    <>
      <Head>
        <title>Moj prvi post</title>
      </Head>
      <h1>Prvi post</h1>
      <h2>
        <Link href="/">← Home</Link>
      </h2>
    </>
  );
}

export default prviPost;
