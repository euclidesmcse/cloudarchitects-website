import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, ChevronRight } from "lucide-react";
import { PageHero, HUE } from "@/components/site/primitives";
import { getPayload } from "payload";
import config from "@payload-config";

export const metadata: Metadata = {
  title: "Blog — Cloud Architects",
  description:
    "Artigos, tutoriais e reflexões sobre arquitectura cloud, DevOps, automação e as melhores práticas do mercado.",
};

export const dynamic = "force-dynamic";
export const revalidate = 3600;

type PostSummary = {
  id: string;
  title: string;
  excerpt: string | null;
  publishedDate: string | null;
  slug: string;
  category: { id: string; title: string } | null;
};

function formatDate(dateStr?: string | null): string | null {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
  return d.toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPage() {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "posts",
    depth: 1,
    sort: "-publishedDate",
    draft: false,
  });

  const posts = result.docs as unknown as PostSummary[];

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Ideias de quem <span className="gradient-text">opera cloud.</span>
          </>
        }
        lede="Artigos e tutoriais sobre arquitectura cloud, DevOps, automação e agentes de IA — do terreno, não do folheto."
        primary={{ href: "/contacto", label: "Falar com engenharia" }}
        secondary={{ href: "/servicos", label: "Ver serviços" }}
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="ca-rise rounded-3xl border border-dashed border-slate-300 bg-white/60 py-20 text-center">
            <p className="text-slate-500">Nenhum artigo publicado ainda.</p>
            <p className="mt-2 text-sm text-slate-500">Volte mais tarde para novos conteúdos.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const date = formatDate(post.publishedDate);
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="ca-rise group flex flex-col rounded-3xl border border-slate-200/60 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(10,27,51,0.25)] transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <span className="self-start ca-font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#0284c7]">
                    {post.category?.title ?? "Geral"}
                  </span>
                  <h3 className="mt-3 ca-font-display text-[18px] font-semibold text-[#0a1b33]">
                    {post.title}
                  </h3>
                  {date ? (
                    <div className="mt-3 flex items-center gap-1.5 ca-font-sans text-[0.72rem] text-slate-400">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                      <time dateTime={post.publishedDate ?? undefined}>{date}</time>
                    </div>
                  ) : null}
                  {post.excerpt ? (
                    <p className="mt-3 flex-1 ca-font-sans text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
                  ) : null}
                  <span className="mt-6 inline-flex items-center gap-1.5 ca-font-sans text-[0.74rem] text-[#0284c7]">
                    ler mais <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
