import { Store } from '@sidedish/react';

export const metadata = {
	title: 'Specific listing demo',
};

export default function DemoReactListing() {
	const NEXT_PUBLIC_STORE_URL = process.env.NEXT_PUBLIC_STORE_URL || 'https://demo.integrations.store';
	return <Store url={NEXT_PUBLIC_STORE_URL} listingId="demo-listing" />;
}
