import { Store } from '@sidedish/react';

export const metadata = {
	title: 'Basic React demo',
};

export default function DemoReact() {
	const NEXT_PUBLIC_STORE_URL = process.env.NEXT_PUBLIC_STORE_URL || 'https://demo.integrations.store';
	return <Store url={NEXT_PUBLIC_STORE_URL} />;
}
