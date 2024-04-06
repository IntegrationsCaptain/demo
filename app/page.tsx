import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1>Integrations captain demo app</h1>
      This app showcases different ways to embed IntegrationsCaptain store.
      <Link href="/iframe">iFrame integration</Link>
      <Link href="/react">React integration</Link>
      <Link href="/react_path_change">React path change integration</Link>
    </main>
  );
}
