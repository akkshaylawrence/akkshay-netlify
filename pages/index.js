import PrintMarkdown from "@components/PrintMarkdown";
import Navbar from "@components/Navbar";
import Content from "@components/Content";
import PageHead from "@components/PageHead";

export default function Home() {
  return (
    <>
      <PageHead />
      <main className="mx-auto px-8 py-4 h-screen flex flex-1 max-w-4xl z-0 flex-col bg-white shadow-xl rounded-lg">
        <Navbar />
        <p>
          Hey, I'm Akkshay! 👋 I'm a JavaScript Engineer from India in love with
          React and Node. I currently work in BigBinary.
        </p>
        <Content />
        <PrintMarkdown />
      </main>
    </>
  );
}
