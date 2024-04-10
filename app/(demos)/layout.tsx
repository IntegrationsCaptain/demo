export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full flex flex-col bg-gray-200 p-4 shadow-md">
      <div className="mb-2 p-2 bg-gray-300 rounded text-black text-lg font-semibold">
        Embedding demo
      </div>
      <div className="flex-grow bg-white p-2 rounded">{children}</div>
    </div>
  );
}
