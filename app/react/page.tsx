import { Store } from "@integrationscaptain/react";

export default function DemoReact() {
  const STORE_URL = "http://demo.integrations.store";
  return (
    <div className="h-full w-full flex flex-col bg-gray-200 p-4 shadow-md">
      <div className="mb-2 p-2 bg-gray-300 rounded text-black text-lg font-semibold">
        React integration Demo
      </div>
      <div className="flex-grow bg-white p-2 rounded">
        <Store url={STORE_URL} />
      </div>
    </div>
  );
}
