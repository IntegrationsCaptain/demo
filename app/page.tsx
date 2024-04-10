import { paths } from "@/lib/paths";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-3xl font-semibold mb-6">
        Integrations Captain Demo App
      </h1>
      <p className="mb-8">
        Explore the various ways to integrate the IntegrationsCaptain store into
        your application.
      </p>
      <div>
        {paths.map((link) => (
          <div key={link.href} className="mb-2">
            <Link
              href={link.href}
              className="text-sm text-gray-800 hover:text-gray-500 transition-colors"
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
