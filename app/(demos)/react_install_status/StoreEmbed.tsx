'use client';
import { z } from 'zod';
import { CallbackEvent, Store } from '@integrationscaptain/react';

const callbackEventSchema = z.object({
	listingId: z.string(),
});

export const StoreEmbed = ({ installed }: { installed: string[] }) => {
	const onCallback = (e: CallbackEvent) => {
		if (e.actionIdentifier === 'INSTALL_LISTING') {
			// Do whatever you want.
			const payload = callbackEventSchema.parse(e.payload);
			alert('installed listing with id: ' + payload.listingId);

			// 1) If the callback has caused a change in the unsafe params, you can just update the passed `unsafeParams` and the component
			// will take care of posting an update event for you. This is the same as doing:
			// storeRef.current.updateUnsafeParams({}) but easier to just update `unsafeParams`

			// 2) If there was a change in data that is included in the safe session, you can ask the store to reload the session:
			// if (storeRef.current){
			// 	storeRef.current.reloadSession();
			// }
		}
	};

	const STORE_URL = process.env.NEXT_PUBLIC_STORE_URL || 'https://demo.integrations.store';
	return <Store url={STORE_URL} unsafeParams={{ installed }} onCallback={onCallback} />;
};
