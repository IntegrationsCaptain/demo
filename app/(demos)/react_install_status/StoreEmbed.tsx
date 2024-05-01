'use client';
import { z } from 'zod';
import { CallbackEvent, Store } from '@sidedish/react';
import { toast } from 'sonner';
import { useState } from 'react';

const callbackEventSchema = z.object({
	listingId: z.string(),
});

export const StoreEmbed = ({ installedListings }: { installedListings: string[] }) => {
	const [installed, setInstalled] = useState(installedListings);
	const onCallback = (e: CallbackEvent) => {
		if (e.actionIdentifier === 'INSTALL') {
			// Do whatever you want.
			const payload = callbackEventSchema.parse(e.payload);
			toast.success('asked to install listing with id: ' + payload.listingId);

			// HERE you would do your own logic to install the app. For example, you could call an internal API to install the app.
			// fetch('/your-api/install', {listingId: payload.listingId}) //this is just an example.

			// The callback has caused a change in the unsafe params, we can just update the passed `unsafeParams` and the component
			// will take care of posting an update event for you. This is the same as doing:
			// storeRef.current.updateUnsafeParams({}) but easier to just update `unsafeParams`
			setInstalled([...installed, payload.listingId]);
		} else if (e.actionIdentifier === 'UNINSTALL') {
			// Do whatever you want.
			const payload = callbackEventSchema.parse(e.payload);
			toast.success('asked to uninstall listing with id: ' + payload.listingId);

			// HERE you would do your own logic to uninstall the app. For example, you could call an internal API to uninstall the app.
			// fetch('/your-api/uninstall', {listingId: payload.listingId}) //this is just an example.
			setInstalled(installed.filter((id) => id !== payload.listingId));
		}
	};

	const STORE_URL = process.env.NEXT_PUBLIC_STORE_URL || 'https://demo.integrations.store';
	return <Store url={STORE_URL} unsafeParams={{ purchases: installed }} onCallback={onCallback} />;
};
