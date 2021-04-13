import Head from "next/head";
import dynamic from 'next/dynamic'

import "react-responsive-carousel/lib/styles/carousel.min.css";
const DynamicTable = dynamic(() => import('../components/SampleDataGrid'))

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DynamicTable />
      </main>
      <div id="portal" />
    </div>
  );
}
