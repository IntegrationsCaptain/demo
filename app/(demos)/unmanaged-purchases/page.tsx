import { getFakeAuth } from '@/lib/fakeAuth';
import { StoreEmbed } from './StoreEmbed';

async function getInstalledListings(): Promise<string[]> {
	return ['c140c3a4-209a-4bb1-9dd6-635f9ae1bffa'];
}

export const metadata = {
	title: 'Unmanged purchases demo',
};

export default async function DemoReactInstallStatusClient() {
	const installedListings = await getInstalledListings();
	const user = await getFakeAuth();

	return <StoreEmbed user={user} installedListings={installedListings} />;
}
