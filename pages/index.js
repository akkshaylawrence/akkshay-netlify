import Head from 'next/head';
import PrintMarkdown from '@components/PrintMarkdown';
import Header from '@components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Akkshay Lawrence</title>
        <link rel="apple-touch-icon" sizes="57x57" href={"/apple-icon-57x57.png"}/>
        <link rel="apple-touch-icon" sizes="60x60" href={"/apple-icon-60x60.png"}/>
        <link rel="apple-touch-icon" sizes="72x72" href={"/apple-icon-72x72.png"}/>
        <link rel="apple-touch-icon" sizes="76x76" href={"/apple-icon-76x76.png"}/>
        <link rel="apple-touch-icon" sizes="114x114" href={"/apple-icon-114x114.png"}/>
        <link rel="apple-touch-icon" sizes="120x120" href={"/apple-icon-120x120.png"}/>
        <link rel="apple-touch-icon" sizes="144x144" href={"/apple-icon-144x144.png"}/>
        <link rel="apple-touch-icon" sizes="152x152" href={"/apple-icon-152x152.png"}/>
        <link rel="apple-touch-icon" sizes="180x180" href={"/apple-icon-180x180.png"}/>
        <link rel="icon" type="image/png" sizes="192x192" href={"/android-icon-192x192.png"}/>
        <link rel="icon" type="image/png" sizes="32x32" href={"/favicon-32x32.png"}/>
        <link rel="icon" type="image/png" sizes="96x96" href={"/favicon-96x96.png"}/>
        <link rel="icon" type="image/png" sizes="16x16" href={"/favicon-16x16.png"}/>
      </Head>
      <Header/>
      <main className="mx-auto p-10 h-screen flex flex-1 max-w-4xl z-0 flex-col justify-center shadow-xl bg-gray-100 rounded-lg bg">
        <PrintMarkdown/>
      </main>
    </>
  );
}
