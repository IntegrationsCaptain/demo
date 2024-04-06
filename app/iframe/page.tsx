export default function DemoIFrame() {
  const STORE_URL = "http://demo.integrations.store";
  return (
    <div className="h-full w-full flex flex-col bg-gray-200 p-4 shadow-md">
      <div className="mb-2 p-2 bg-gray-300 rounded text-black text-lg font-semibold">
        Embedding with an iFrame
      </div>
      <div className="flex-grow bg-white p-2 rounded">
        <iframe
          src={STORE_URL}
          className="w-full h-full border-none"
          allow="clipboard-write"
          loading="lazy"
        />
      </div>
    </div>
  );
}
