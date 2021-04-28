import Head from "next/head";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="head">
        <Head>
          {/* Adobe fonts */}
          <link href="//use.typekit.net/sqt7nyn.css" rel="stylesheet" />
          <link rel="icon" type="image/png" href="/images/logo.png" />
        </Head>
      </div>
      <Header />
    </div>
  );
}

export default Home;