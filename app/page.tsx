import NavMenu from "@/components/NavMenu";
import { paths } from "@/lib/paths";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-2xl font-semibold mb-6 flex items-center gap-4">
        <Image src="/logo2.png" alt="IntegrationsCaptain Logo" width={250} height={150} />
        demo
      </h1>
      <p className="mb-8">
        It is really easy to embed IntegrationsCaptain into your application.<br/>
        This git repo contains multiple examples of how to do it.
      </p>
      <div>
        <NavMenu noLogo={true} />
      </div>
    </main>
  );
}
