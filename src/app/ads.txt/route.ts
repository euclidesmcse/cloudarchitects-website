// ads.txt do domínio raiz: o AdSense procura aqui mesmo quando os anúncios
// correm no blog em wp.cloudarchitect.com.br. Sem ADSENSE_PUBLISHER_ID → 404.
export const dynamic = "force-dynamic";

export function GET() {
  const pub = (process.env.ADSENSE_PUBLISHER_ID ?? "").trim().replace(/^ca-/, "");
  if (!/^pub-\d{10,20}$/.test(pub)) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(`google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
