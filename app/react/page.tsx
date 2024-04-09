import { Store } from "@integrationscaptain/react";

export default function DemoReact() {
  const NEXT_PUBLIC_STORE_URL =
    process.env.NEXT_PUBLIC_STORE_URL || "http://demo.integrations.store";
  return (
    <div className="h-full w-full flex flex-col bg-gray-200 p-4 shadow-md">
      <div className="mb-2 p-2 bg-gray-300 rounded text-black text-lg font-semibold">
        Embedding with a React component
      </div>
      <div className="flex-grow bg-white p-2 rounded">
        <Store url={NEXT_PUBLIC_STORE_URL} />
      </div>
    </div>
  );
}
