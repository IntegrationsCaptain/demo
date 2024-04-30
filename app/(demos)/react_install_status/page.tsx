import { StoreEmbed } from './StoreEmbed';

async function getInstalledListings(): Promise<string[]> {
	return ['4f26c716-a85e-48e4-b197-84f1c1dd5b26'];
}

export default async function DemoReactInstallStatusClient() {
	const installedListings = await getInstalledListings();

	return <StoreEmbed installed={installedListings} />;
}
