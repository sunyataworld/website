import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/default.module.scss';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Sunyata</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link href="/">
              <a>Sunyata</a>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer">
                  Opensea
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Sunyataworld"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://etherscan.io/" target="_blank" rel="noopener noreferrer">
                  Contract
                </a>
              </li>
              <li>
                <a href="https://github.com/sunyataworld" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </li>
              <li>
                <Link href="/faq">
                  <a>FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <a>Resources</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {props.children}
        <footer className={styles.footer}>
          <p>
            This website is{' '}
            <a
              href="https://github.com/sunyataworld/website"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-source
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
