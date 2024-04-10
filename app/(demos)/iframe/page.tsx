export default function DemoIFrame() {
  const STORE_URL = process.env.STORE_URL || "https://demo.integrations.store";
  return (
    <iframe
      src={STORE_URL}
      className="w-full h-full border-none"
      allow="clipboard-write"
      loading="lazy"
    />
  );
}
