import Head from 'next/head';
import Layout from '../layouts/default';

export default function Home() {
  return (
    <Layout>
      <h1>Resources</h1>
      <article>
        <h2>Tools</h2>
        <p className="title">
          <a href="#">Tools 1</a>
        </p>
        <p>desc</p>
        <h2>Communities</h2>
        <p className="title">
          <a href="#">Channel 1</a>
        </p>
        <p>desc</p>
      </article>
    </Layout>
  );
}
