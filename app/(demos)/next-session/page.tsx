import { getFakeAuth } from '@/lib/fakeAuth';
import { createSafeSession, AcceptableParameters } from '@sidedish/core';
import { Store } from '@sidedish/react';

//This is a server component
const StoreEmbed = async ({ params }: { params: AcceptableParameters }) => {
	// see docs for "Safe sessions"
	try {
		const apiKey = process.env.SIDEDISH_API_KEY!;
		const domain = process.env.SIDEDISH_DOMAIN!;
		const { sessionId } = await createSafeSession({ apiKey, domain, data: params });

		const STORE_URL = process.env.NEXT_PUBLIC_STORE_URL || 'https://demo.integrations.store';
		return <Store url={STORE_URL} sessionId={sessionId} />;
	} catch (e) {
		//do some error handling
		return <div className="bg-red-50 p-10 text-red-700">Something went wrong</div>;
	}
};

export default async function NextJSDemo() {
	// usually these will come from your auth
	const user = await getFakeAuth();
	const params = {
		userId: user.id,
		userName: `${user.firstName} ${user.lastName}`,
		accountId: user.accountId,
	};
	return <StoreEmbed params={params} />;
}
