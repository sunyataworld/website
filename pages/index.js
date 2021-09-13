import Head from 'next/head';
import Layout from '../layouts/default';

export default function Home() {
  const connectWallet = () => {
    alert('sunyata');
  };
  return (
    <Layout>
      <h1>Sunyata</h1>
      <p>
        Sunyata is recreatable and traceable NFT stored on chain.
        <br />
        Feel free to use Sunyata in any way you want.
      </p>
      <p className="mt20">Recent creation:</p>
      <div className="img-box">
        <img src="/test-nft.svg" alt="Recent creation" />
      </div>
      <div className="btn mt" onClick={connectWallet}>
        Connect Wallet to <span>Mint</span>
      </div>
    </Layout>
  );
}
