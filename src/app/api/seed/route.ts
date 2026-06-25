import { getPayload } from "payload"
import config from "@payload-config"

export const dynamic = "force-dynamic"

export async function GET() {
  const payload = await getPayload({ config })

  const results: string[] = []

  // ─── Admin User ──────────────────────────────────────────────
  const adminEmail = process.env.CMS_ADMIN_EMAIL || "admin@cloudarchitects.com"
  const adminPassword = process.env.CMS_ADMIN_PASSWORD || "Admin123!"

  const { docs: existingUsers } = await payload.find({
    collection: "users",
    where: { email: { equals: adminEmail } },
  })

  if (existingUsers.length === 0) {
    await payload.create({
      collection: "users",
      data: {
        email: adminEmail,
        password: adminPassword,
      },
    })
    results.push(`✅ Admin user created: ${adminEmail}`)
  } else {
    results.push("👤 Admin user already exists")
  }

  // ─── Categories ───────────────────────────────────────────────
  const categories = [
    { title: "Cloud Computing", slug: "cloud-computing", description: "Arquitetura e estratégias cloud" },
    { title: "DevOps", slug: "devops", description: "CI/CD, automação e infraestrutura como código" },
    { title: "Segurança", slug: "seguranca", description: "Proteção de dados e segurança na cloud" },
    { title: "Arquitetura", slug: "arquitetura", description: "Padrões e boas práticas de arquitetura de software" },
    { title: "Inteligência Artificial", slug: "ia", description: "IA generativa, LLMs e agentes autónomos" },
  ]

  const { docs: existingCategories } = await payload.find({ collection: "categories" })
  const existingSlugs = new Set(existingCategories.map((c: any) => c.slug))
  let catCount = 0

  for (const cat of categories) {
    if (!existingSlugs.has(cat.slug)) {
      try {
        await payload.create({ collection: "categories", data: cat, draft: false })
        catCount++
        results.push(`  ✅ Categoria: ${cat.title}`)
      } catch (err: any) {
        results.push(`  ⚠️ Categoria "${cat.title}": ${err.message?.substring(0, 80)}`)
      }
    }
  }
  results.push(catCount > 0 ? `✅ ${catCount} categorias criadas` : "📁 Categorias já existem")

  // ─── Sample Posts ─────────────────────────────────────────────
  const { docs: allCategories } = await payload.find({
    collection: "categories",
    limit: 100,
  })

  // Build a category lookup by slug → the full category doc
  const categoryBySlug = new Map<string, any>()
  for (const c of allCategories) {
    if (c.slug && c.id) categoryBySlug.set(c.slug, c)
  }

  const minimalContent = {
    root: {
      type: "root",
      children: [
        { type: "paragraph", children: [{ type: "text", text: " " }], version: 1 },
      ],
      direction: "ltr",
      format: "",
      indent: 0,
      version: 1,
    },
  }

  const posts = [
    { title: "Por que a sua empresa precisa de uma estratégia cloud", excerpt: "Descubra como a migração para a cloud pode reduzir custos, aumentar a escalabilidade e impulsionar a inovação no seu negócio.", slug: "estrategia-cloud-empresas", categorySlug: "cloud-computing" },
    { title: "CI/CD na prática: automatizando deploys com confiança", excerpt: "Guia prático para implementar pipelines de CI/CD que garantem entregas rápidas e seguras, do commit à produção.", slug: "cicd-automatizando-deploys", categorySlug: "devops" },
    { title: "Segurança em ambientes cloud: mitos e verdades", excerpt: "Desvendamos os principais mitos sobre segurança na cloud e apresentamos as melhores práticas para proteger os seus dados.", slug: "seguranca-cloud-mitos-verdades", categorySlug: "seguranca" },
    { title: "Agentes de IA autónomos: o futuro da automação empresarial", excerpt: "Explore como agentes de inteligência artificial estão a transformar processos empresariais e a criar novas oportunidades de negócio.", slug: "agentes-ia-autonomos", categorySlug: "ia" },
  ]

  const { docs: existingPosts } = await payload.find({ collection: "posts" })
  const existingPostSlugs = new Set(existingPosts.map((p: any) => p.slug))
  let postCount = 0

  for (const post of posts) {
    const catDoc = categoryBySlug.get(post.categorySlug)
    if (!existingPostSlugs.has(post.slug) && catDoc) {
      try {
        await payload.create({
          collection: "posts",
          data: {
            title: post.title,
            excerpt: post.excerpt,
            slug: post.slug,
            content: { ...minimalContent, _rels: {} },
            category: catDoc.id,
            status: "published",
            publishedDate: new Date().toISOString(),
          } as any,
        })
        postCount++
        results.push(`  ✅ Post: ${post.title}`)
      } catch (err: any) {
        results.push(`  ❌ Post "${post.title}": ${err.message?.substring(0, 100)}`)
      }
    } else if (!catDoc) {
      results.push(`  ⚠️ Post "${post.title}": categoria "${post.categorySlug}" não encontrada`)
    }
  }
  results.push(postCount > 0 ? `✅ ${postCount} artigos criados` : "📝 Nenhum artigo novo")

  results.push("🌱 Seed completo")
  return Response.json({ success: true, results })
}
