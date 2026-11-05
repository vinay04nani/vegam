import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { legalDocs, readLegal } from "@/lib/legal";
import { withBase } from "@/lib/paths";

export function generateStaticParams() {
  return legalDocs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = legalDocs.find((item) => item.slug === slug);
  return { title: doc ? `${doc.title} · Vegam` : "Legal · Vegam", description: doc?.summary };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = readLegal(slug);
  if (!doc) notFound();
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[800px] px-4 pt-28 pb-20 sm:px-6">
        <p className="m-0 text-label font-medium tracking-wide text-text-3 uppercase">Draft for lawyer review</p>
        <h1 className="m-0 mt-3 font-serif text-display text-text">{doc.title}</h1>
        <p className="m-0 mt-4 rounded-lg border border-border bg-brand-subtle px-4 py-3 text-body text-text-2">
          This is a working draft, not legal advice. Items in square brackets are still open, including the contracting entity. A lawyer reviews each document before it is relied on.
        </p>
        <article
          className="legal-doc mt-8 text-body-lg text-text-2"
          dangerouslySetInnerHTML={{ __html: doc.html }}
        />
        <nav aria-label="Other policies" className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-6 text-body">
          {legalDocs.map((item) => (
            <a key={item.slug} href={withBase(`/legal/${item.slug}/`)} className={item.slug === slug ? "font-semibold text-text" : "text-brand"}>
              {item.title}
            </a>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
}
