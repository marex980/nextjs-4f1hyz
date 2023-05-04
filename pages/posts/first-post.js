import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

function prviPost() {
  return (
    <Layout>
      <Head>
        <title>Moj prvi post</title>
      </Head>
      <h1>Prvi post</h1>
      <h2>
        <Link href="/">← Home</Link>
      </h2>
    </Layout>
  );
}

export default prviPost;
