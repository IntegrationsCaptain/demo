import { getFakeAuth } from '@/lib/fakeAuth';
import { StoreEmbed } from './StoreEmbed';

async function getInstalledListings(): Promise<string[]> {
	// since we are constantly resetting the database in the demo environment, we will not hard code the installed listing id
	// but will load one from api
	//fetch(`/api/listings`)
	return [];
}

export default async function DemoReactInstallStatusClient() {
	const installedListings = await getInstalledListings();
	const user = await getFakeAuth();

	return <StoreEmbed user={user} installedListings={installedListings} />;
}
