import Head from 'next/head';
import styles from '../styles/default.module.scss';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Sunyata</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div className={styles.container}>{props.children}</div>
      <footer className={styles.footer}>
        <p>
          This website is <a href="https://github.com/sunyataworld/website">open-source</a>.
        </p>
      </footer>
    </div>
  );
}
