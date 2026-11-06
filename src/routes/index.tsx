import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-topplay.png.asset.json";
import flyer from "@/assets/servicos-informatica.png.asset.json";
import rx from "@/assets/rx-purple.png.asset.json";
import noma from "@/assets/noma-app.png.asset.json";
import compat from "@/assets/compatibilidade.png.asset.json";
import hd from "@/assets/hd-player.png.asset.json";
import preco from "@/assets/preco-iptv.png.asset.json";
import qr from "@/assets/whatsapp-qr.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TopPlay | Informática e Listas Premium IPTV em São Paulo" },
      {
        name: "description",
        content:
          "Montagem, manutenção e formatação de computadores em São Paulo e venda de créditos de canais, filmes e séries IPTV para todo o Brasil. WhatsApp (11) 99768-1821.",
      },
      { property: "og:title", content: "TopPlay | Informática e Listas Premium" },
      {
        property: "og:description",
        content: "Seu computador em boas mãos + canais, filmes e séries para todo o Brasil.",
      },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/5511997681821?text=Ol%C3%A1!%20Vim%20pelo%20site%20TopPlay";
const WA_TESTE = "https://wa.me/5511997681821?text=Ol%C3%A1!%20Quero%20um%20teste%20gr%C3%A1tis%20de%20IPTV";
const PAINEL = "https://seventvpainel.top/#/rs/V01pR45Dd0/OxLAbEpDZ7";
const CANAL = "https://whatsapp.com/channel/0029Vb9JkKW96H4XG4scsq3a";
const extraApps = ["IBO Player", "BOB Player", "IBO Player Pro", "VU Player Pro", "Fox Player", "Zuxo", "SevenTV", "Flexplay"];

const services = [
  { icon: "🖥️", t: "Montagem e Manutenção", d: "de Computadores e Notebooks" },
  { icon: "⚙️", t: "Formatação e Instalação", d: "de Programas e Periféricos" },
  { icon: "🛡️", t: "Instalação de Anti Vírus", d: "e Sistema Operacional" },
  { icon: "🧹", t: "Upgrade e Limpeza Completa", d: "Mais desempenho e vida útil" },
];

const streams = ["NETFLIX", "Prime Video", "Disney+", "YouTube", "Globoplay", "Star+", "HBO Max", "Apple TV+", "Paramount+", "E muito mais!"];

const cols = ["Samsung Tizen", "LG webOS", "Android TV / TV Box", "Roku", "MSX Samsung/LG", "Android Celular", "iOS iPhone/iPad", "Windows PC", "Xbox", "Apple TV tvOS", "Outros Sistemas"];
type C = "D" | "V" | "E" | string;
const apps: [string, C[]][] = [
  ["RX Purple", ["E", "D", "D", "D", "V", "D", "V", "D", "D", "V", "Fire TV (Beta)"]],
  ["FOX Player", ["D", "D", "D", "D", "D", "D", "V", "D", "D", "V", "V"]],
  ["Zuxo", ["D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "VIDAA, TitanOS, Vega OS · Em análise: WhaleOS"]],
  ["Essencial Player", ["D", "D", "D", "D", "V", "V", "V", "V", "V", "V", "V"]],
  ["Nobre Player", ["D", "D", "D", "D", "V", "V", "V", "V", "V", "V", "V"]],
  ["Pleno Player", ["D", "D", "D", "D", "V", "V", "V", "V", "V", "V", "V"]],
  ["Vulcan Player", ["D", "D", "D", "D", "V", "V", "V", "V", "V", "V", "V"]],
  ["HD Player", ["D", "D", "D", "D", "V", "V", "V", "V", "V", "V", "V"]],
  ["Brasil IPTV", ["D", "D", "V", "D", "V", "V", "V", "V", "V", "V", "V"]],
  ["Flexplay", ["D", "D", "V", "D", "V", "V", "V", "V", "V", "V", "V"]],
  ["SevenTV", ["D", "D", "V", "D", "V", "V", "V", "V", "V", "V", "V"]],
];

function Cell({ v }: { v: C }) {
  if (v === "D") return <span className="inline-block rounded-full bg-success/20 px-2 py-1 text-xs font-bold text-success">✓ Disponível</span>;
  if (v === "V") return <span className="inline-block rounded-full border border-border px-2 py-1 text-xs text-muted-foreground">🔍 Verificar</span>;
  if (v === "E") return <span className="inline-block rounded-full bg-secondary/20 px-2 py-1 text-xs font-bold text-secondary">⏳ Em breve</span>;
  return <span className="inline-block rounded-lg bg-secondary/15 px-2 py-1 text-xs font-semibold text-secondary">{v}</span>;
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += Math.ceil(to / 60);
      if (i >= to) { i = to; clearInterval(id); }
      setN(i);
    }, 25);
    return () => clearInterval(id);
  }, [to]);
  return <>{n}{suffix}</>;
}

function Index() {
  useReveal();
  const [menu, setMenu] = useState(false);
  const nav = [["#servicos", "Informática"], ["#iptv", "Canais IPTV"], ["#planos", "Planos"], ["#apps", "Aplicativos"], ["#compatibilidade", "Compatibilidade"], ["#contato", "Contato"]];

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "-5s" }} />
        <div className="absolute inset-0 grid-bg" />
      </div>

      {/* header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#" className="flex items-center gap-3">
            <img src={logo.url} alt="TopPlay Listas Premium" className="h-12 w-12 rounded-full glow" />
            <span className="font-display text-xl">TOP<span className="text-gradient">PLAY</span></span>
          </a>
          <nav className="hidden gap-7 md:flex">
            {nav.map(([h, l]) => (
              <a key={h} href={h} className="text-sm font-semibold text-muted-foreground transition hover:text-primary">{l}</a>
            ))}
          </nav>
          <a href={WA} target="_blank" rel="noreferrer" className="hidden rounded-full bg-success px-5 py-2 text-sm font-bold text-background transition hover:scale-105 md:block">WhatsApp</a>
          <button onClick={() => setMenu(!menu)} className="text-2xl md:hidden" aria-label="Menu">☰</button>
        </div>
        {menu && (
          <div className="flex flex-col gap-3 border-t border-border bg-card px-5 py-4 md:hidden">
            {nav.map(([h, l]) => <a key={h} href={h} onClick={() => setMenu(false)} className="font-semibold">{l}</a>)}
          </div>
        )}
      </header>

      {/* hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 md:grid-cols-2 md:pt-40">
        <div className="reveal">
          <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            📍 Cidade de São Paulo · Atendimento a todo Brasil
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
            <span className="shine-text">Tecnologia</span> e{" "}
            <span className="text-gradient">entretenimento</span> em um só lugar
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Manutenção e informática com quem entende — <b className="text-foreground">seu computador em boas mãos!</b> E listas premium de canais, filmes e séries para assistir onde quiser.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={WA} target="_blank" rel="noreferrer" className="animate-pulse-ring rounded-full bg-success px-7 py-4 font-bold text-background transition hover:scale-105">💬 Solicite seu orçamento</a>
            <a href="#iptv" className="rounded-full border border-primary px-7 py-4 font-bold text-primary transition hover:bg-primary hover:text-primary-foreground">Ver canais IPTV</a>
          </div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[[11, "+", "Aplicativos"], [100, "%", "Brasil"], [24, "h", "Suporte"]].map(([n, s, l]) => (
              <div key={l as string} className="rounded-2xl border border-border bg-card/60 p-4 text-center">
                <div className="font-display text-2xl text-gradient"><Counter to={n as number} suffix={s as string} /></div>
                <div className="text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal relative flex justify-center">
          <div className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-full border-2 border-dashed border-primary/40 animate-spin-slow" />
          <div className="absolute inset-0 m-auto h-[70%] w-[70%] rounded-full bg-primary/30 blur-3xl" />
          <img src={logo.url} alt="Logo TopPlay Listas Premium" className="relative w-[80%] max-w-md rounded-full glow animate-floaty" />
        </div>
      </section>

      {/* marquee */}
      <div className="relative z-10 overflow-hidden border-y border-border bg-card/60 py-5">
        <div className="flex w-max animate-marquee gap-12">
          {[...streams, ...streams].map((s, i) => (
            <span key={i} className="font-display text-2xl text-muted-foreground">★ {s}</span>
          ))}
        </div>
      </div>

      {/* services */}
      <section id="servicos" className="relative z-10 mx-auto max-w-7xl px-5 py-24">
        <div className="reveal text-center">
          <span className="font-bold uppercase tracking-widest text-secondary">Manutenções e Informática</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">Nossos <span className="text-gold">Serviços</span></h2>
          <p className="mt-4 text-muted-foreground">Seu equipamento mais rápido e seguro!</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div key={s.t} className="reveal group rounded-3xl border border-border bg-card p-7 transition duration-500 hover:-translate-y-3 hover:border-primary hover:glow" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-3xl transition group-hover:rotate-12 group-hover:scale-110">{s.icon}</div>
              <h3 className="mt-6 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-secondary">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <img src={flyer.url} alt="Panfleto de serviços de informática TopPlay" className="reveal rounded-3xl border border-border shadow-2xl transition duration-700 hover:scale-[1.03]" />
          <div className="reveal space-y-5">
            {[["🤝", "Atendimento rápido e confiável", "Orçamento sem compromisso pelo WhatsApp."], ["🚚", "Buscamos e entregamos!", "Retiramos seu equipamento e devolvemos pronto."], ["⚡", "Mais desempenho e vida útil", "Upgrade e limpeza completa para seu PC ou notebook."]].map(([i, t, d]) => (
              <div key={t} className="flex gap-4 rounded-2xl border border-border bg-card/70 p-5 transition hover:border-secondary">
                <span className="text-3xl">{i}</span>
                <div><h4 className="font-bold">{t}</h4><p className="text-sm text-muted-foreground">{d}</p></div>
              </div>
            ))}
            <a href={WA} target="_blank" rel="noreferrer" className="inline-block rounded-full bg-gold px-7 py-4 font-bold text-secondary-foreground transition hover:scale-105">Solicite seu orçamento · (11) 99768-1821</a>
          </div>
        </div>
      </section>

      {/* IPTV */}
      <section id="iptv" className="relative z-10 border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="reveal text-center">
            <span className="font-bold uppercase tracking-widest text-primary">Listas Premium</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">Venda de <span className="text-gold">Créditos</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">De canais, filmes e séries <b className="text-accent">de servidor</b> — para todo o Brasil.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[["📺", "Canais", "Canais ao vivo de esportes, notícias, infantis e muito mais."], ["🎬", "Filmes", "Lançamentos e clássicos sempre atualizados."], ["📱", "Séries", "Assista na TV, celular, PC, Xbox e TV Box."]].map(([i, t, d], k) => (
              <div key={t} className="reveal rounded-3xl border border-border bg-background p-8 text-center transition duration-500 hover:-translate-y-2 hover:border-accent" style={{ transitionDelay: `${k * 120}ms` }}>
                <div className="mx-auto text-5xl animate-floaty" style={{ animationDelay: `${k * -2}s` }}>{i}</div>
                <h3 className="mt-4 font-display text-2xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {streams.map((s) => (
              <div key={s} className="rounded-xl border border-border bg-background py-5 text-center font-display text-lg transition hover:scale-105 hover:border-primary hover:text-primary">{s}</div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">Conteúdo similar ao das maiores plataformas de streaming.</p>
        </div>
      </section>

      {/* preço + teste + revenda */}
      <section id="planos" className="relative z-10 mx-auto max-w-7xl px-5 py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="reveal relative">
            <div className="absolute inset-0 rounded-3xl bg-primary/30 blur-3xl" />
            <img src={preco.url} alt="Com tudo liberado a partir de R$ 30 por mês" className="relative mx-auto w-full max-w-sm rounded-3xl animate-floaty" />
          </div>
          <div className="reveal">
            <span className="font-bold uppercase tracking-widest text-primary">Plano IPTV</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Com tudo <span className="text-gradient">liberado!</span></h2>
            <div className="mt-6 flex items-end gap-3">
              <span className="text-xl text-muted-foreground">a partir de</span>
              <span className="font-display text-7xl text-gold md:text-8xl">R$ 30</span>
              <span className="mb-3 text-muted-foreground">/mês</span>
            </div>
            <p className="mt-4 text-muted-foreground">Canais, filmes e séries na TV, celular, PC e TV Box.</p>
            <a href={WA_TESTE} target="_blank" rel="noreferrer" className="mt-8 inline-block animate-pulse-ring rounded-full bg-success px-8 py-5 font-display text-xl text-background transition hover:scale-105">🎁 Peça seu teste grátis</a>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="reveal rounded-3xl border border-secondary/50 bg-card p-8 transition hover:-translate-y-2">
            <span className="text-4xl">💼</span>
            <h3 className="mt-4 font-display text-3xl">Seja um <span className="text-gold">revendedor</span></h3>
            <p className="mt-3 text-muted-foreground">Trabalhe de casa com baixo custo de investimento inicial. Abra seu painel de revenda e venda junto com a gente.</p>
            <a href={PAINEL} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-gold px-7 py-4 font-bold text-secondary-foreground transition hover:scale-105">Cadastrar meu painel</a>
          </div>
          <div className="reveal rounded-3xl border border-success/50 bg-card p-8 transition hover:-translate-y-2">
            <span className="text-4xl">📢</span>
            <h3 className="mt-4 font-display text-3xl">Canal <span className="text-gradient">TopPlay Suporte</span></h3>
            <p className="mt-3 text-muted-foreground">Siga nosso canal no WhatsApp e receba novidades, avisos e suporte.</p>
            <a href={CANAL} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-success px-7 py-4 font-bold text-background transition hover:scale-105">Ver canal</a>
          </div>
        </div>
      </section>

      {/* apps */}
      <section id="apps" className="relative z-10 mx-auto max-w-7xl px-5 py-24">
        <div className="reveal text-center">
          <span className="font-bold uppercase tracking-widest text-secondary">Aplicativos parceiros</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">Assista no <span className="text-gradient">seu app favorito</span></h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[[rx.url, "RX Purple Canal", "Disponível em LG, Android TV, Roku, Android, Windows, Xbox e Fire TV (Beta)."], [noma.url, "NOMA App — O futuro é aqui", "Nas lojas: LG, Roku, Android, Amazon, Apple, Windows, Xbox."], [hd.url, "HD Player Pro", "Disponível em Samsung, LG, Android TV e Roku."]].map(([img, t, d], k) => (
            <div key={t} className="reveal group overflow-hidden rounded-3xl border border-border bg-card transition duration-500 hover:-translate-y-3 hover:glow" style={{ transitionDelay: `${k * 120}ms` }}>
              <div className="overflow-hidden bg-background"><img src={img} alt={t} className="aspect-square w-full object-contain transition duration-700 group-hover:scale-110" /></div>
              <div className="p-6"><h3 className="text-xl font-bold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
            </div>
          ))}
        </div>
        <div className="reveal mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {extraApps.map((a) => (
            <div key={a} className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card py-6 font-display text-lg transition hover:scale-105 hover:border-primary hover:text-primary">▶ {a}</div>
          ))}
        </div>
      </section>

      {/* compat */}
      <section id="compatibilidade" className="relative z-10 mx-auto max-w-7xl px-5 pb-24">
        <div className="reveal text-center">
          <h2 className="font-display text-4xl md:text-5xl">Compatibilidade dos <span className="text-gradient">Aplicativos</span></h2>
          <p className="mt-4 text-muted-foreground">Veja em quais dispositivos cada aplicativo está disponível e escolha o ideal para você.</p>
        </div>
        <div className="reveal mt-10 overflow-x-auto rounded-3xl border border-border bg-card">
          <table className="w-full min-w-[1100px] text-center text-sm">
            <thead>
              <tr className="text-xs uppercase text-primary">
                <th className="p-3" />
                <th colSpan={5} className="border-b border-border p-3">📺 Smart TVs e TV Box</th>
                <th colSpan={2} className="border-b border-border p-3">📱 Celular e Tablet</th>
                <th colSpan={4} className="border-b border-border p-3">💻 Computador e Outros</th>
              </tr>
              <tr className="text-xs text-muted-foreground">
                <th className="p-3 text-left text-foreground">Aplicativo</th>
                {cols.map((c) => <th key={c} className="p-3">{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {apps.map(([n, r]) => (
                <tr key={n} className="border-t border-border/60 transition hover:bg-muted/60">
                  <td className="p-3 text-left font-bold">{n}</td>
                  {r.map((v, i) => <td key={i} className="p-2"><Cell v={v} /></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="reveal mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span><Cell v="D" /> Aplicativo disponível para o dispositivo</span>
          <span><Cell v="E" /> Lançamento em breve</span>
          <span><Cell v="Beta" /> Versão de testes</span>
          <span><Cell v="V" /> Sem informação oficial, confirme conosco</span>
        </div>
        <details className="reveal mt-6 text-center">
          <summary className="cursor-pointer text-primary">Ver tabela original</summary>
          <img src={compat.url} alt="Tabela de compatibilidade dos aplicativos" className="mx-auto mt-4 rounded-2xl" />
        </details>
      </section>

      {/* contato */}
      <section id="contato" className="relative z-10 mx-auto max-w-7xl px-5 pb-24">
        <div className="reveal grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-primary/40 bg-card p-8 md:grid-cols-2 md:p-14 glow">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Fale com a gente <span className="text-gradient">agora!</span></h2>
            <p className="mt-4 text-muted-foreground">Cidade de São Paulo · Atendimento a todo Brasil. Escaneie o QR Code ou clique no botão.</p>
            <a href={WA} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-success px-8 py-5 font-display text-2xl text-background animate-pulse-ring transition hover:scale-105">💬 (11) 99768-1821</a>
          </div>
          <img src={qr.url} alt="QR Code do WhatsApp" className="w-full rounded-3xl transition duration-700 hover:rotate-1 hover:scale-105" />
        </div>
      </section>

      <footer className="relative z-10 border-t border-border py-10 text-center text-sm text-muted-foreground">
        <img src={logo.url} alt="TopPlay" className="mx-auto mb-4 h-16 w-16 rounded-full" />
        TopPlay Listas Premium · Manutenções e Informática · São Paulo – SP · © {new Date().getFullYear()}
      </footer>

      {/* floating whatsapp */}
      <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-success text-3xl animate-pulse-ring transition hover:scale-110">💬</a>
    </div>
  );
}
