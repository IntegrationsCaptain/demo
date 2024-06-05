import { getFakeAuth } from '@/lib/fakeAuth';
import { StoreEmbed } from './StoreEmbed';

async function getInstalledListings(): Promise<string[]> {
	return [process.env.FAKE_PURCHASED_LISTING_ID!];
}

export const metadata = {
	title: 'Unmanged purchases demo',
};

export default async function DemoReactInstallStatusClient() {
	const installedListings = await getInstalledListings();
	const user = await getFakeAuth();

	return <StoreEmbed user={user} installedListings={installedListings} />;
}
