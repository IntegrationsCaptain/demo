import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-2xl font-bold mb-4">Integrations Captain Demo App</h1>
      <p className="mb-4">
        This app showcases different ways to embed IntegrationsCaptain store.
      </p>
      <ul className="list-disc list-inside shadow-md rounded-lg p-4">
        <li className="mb-2">
          <Link
            href="/iframe"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            iFrame integration
          </Link>
        </li>
        <li>
          <Link
            href="/react"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            React integration
          </Link>
        </li>
        <li>
          <Link
            href="/react_path_change"
            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            React path change integration
          </Link>
        </li>
      </ul>
    </main>
  );
}
