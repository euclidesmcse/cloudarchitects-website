import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPayload } from "payload";
import config from "@payload-config";

export const metadata: Metadata = {
  title: "Blog — Cloud Architects",
  description:
    "Artigos, tutoriais e reflexões sobre arquitectura cloud, DevOps, automação e as melhores práticas do mercado.",
};

// Force dynamic rendering so new posts appear immediately
export const dynamic = "force-dynamic";

// Revalidate at most every hour, but still allow on-demand revalidation
export const revalidate = 3600;

type PostSummary = {
  id: string;
  title: string;
  excerpt: string | null;
  publishedAt: string;
  slug: string;
  categories: { id: string; title: string }[];
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "posts",
    depth: 1,
    sort: "-publishedAt",
    draft: false,
  });

  const posts = result.docs as unknown as PostSummary[];

  return (
    <Section>
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4">Blog</Badge>
          <h1 className="text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl">
            Artigos e Conteúdos
          </h1>
          <p className="mt-4 text-surface-400">
            Fique a par das tendências em arquitectura cloud, DevOps,
            automação e muito mais.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.id} hover className="flex flex-col">
              <CardContent className="flex flex-1 flex-col p-6">
                {/* Category badge */}
                <Badge className="mb-3 self-start">
                  {post.categories?.[0]?.title ?? "Geral"}
                </Badge>

                {/* Title */}
                <h3 className="text-lg font-semibold text-surface-100 sm:text-xl">
                  {post.title}
                </h3>

                {/* Date */}
                <div className="mt-3 flex items-center gap-1.5 text-sm text-surface-500">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                </div>

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-surface-400">
                    {post.excerpt}
                  </p>
                )}

                {/* Read more link */}
                <div className="mt-6">
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      iconRight={<ArrowRight className="h-4 w-4" />}
                    >
                      Ler mais
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty state */}
        {posts.length === 0 && (
          <div className="mt-12 text-center text-surface-500">
            <p>Nenhum artigo publicado ainda.</p>
            <p className="mt-2 text-sm">
              Volte mais tarde para novos conteúdos.
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}
