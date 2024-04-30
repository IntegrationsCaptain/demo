export default function DemoIFrame() {
	const STORE_URL = process.env.NEXT_PUBLIC_STORE_URL || 'https://demo.integrations.store';
	return <iframe src={STORE_URL} className="h-full w-full border-none" allow="clipboard-write" loading="lazy" />;
}
